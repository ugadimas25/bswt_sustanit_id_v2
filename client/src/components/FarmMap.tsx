import { useEffect, useState, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LeafletMap = lazy(() => import("@/components/LeafletMap").then(module => ({ default: module.LeafletMap })));

interface PlotData {
  country: string | null;
  province: string | null;
  district: string | null;
  subdistrict: string | null;
  village: string | null;
  farmer: string | null;
  plot: string | null;
  latlong: string | null;
  polygon: string | null;
  polygonarea: string | null;
  commodity: string | null;
  firstplanting: string | null;
}

interface ParsedPlot extends PlotData {
  coordinates: [number, number][];
  color: string;
}

export function FarmMap() {
  const [plots, setPlots] = useState<PlotData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetchPlots();
  }, []);

  const fetchPlots = async () => {
    try {
      const response = await fetch("/api/plots");
      if (!response.ok) throw new Error("Failed to fetch plots");
      const data = await response.json();
      console.log("Sample plot data:", data[0]);
      console.log("Sample polygon:", data[0]?.polygon);
      setPlots(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const parsePolygon = (polygonStr: string | null): [number, number][] => {
    if (!polygonStr) return [];
    
    try {
      // Format WKT: POLYGON((lat lng, lat lng, ...)) - non-standard format in this DB
      if (polygonStr.toUpperCase().startsWith("POLYGON")) {
        const coordsStr = polygonStr.match(/\(\((.*?)\)\)/)?.[1];
        if (coordsStr) {
          const coords = coordsStr.split(",").map((coord) => {
            const parts = coord.trim().split(" ");
            const first = parseFloat(parts[0]);
            const second = parseFloat(parts[1]);
            // Database format is already lat lng, Leaflet uses [lat, lng]
            return [first, second] as [number, number];
          }).filter(([lat, lng]) => !isNaN(lat) && !isNaN(lng));
          
          if (coords.length > 0) {
            console.log("Parsed WKT polygon sample:", polygonStr.substring(0, 80), "->", coords.slice(0, 3));
          }
          return coords;
        }
      }
      
      // Format semicolon: lat,lng;lat,lng;...
      if (polygonStr.includes(";")) {
        return polygonStr.split(";").map((coord) => {
          const [lat, lng] = coord.trim().split(",").map(Number);
          return [lat, lng] as [number, number];
        }).filter(([lat, lng]) => !isNaN(lat) && !isNaN(lng));
      }
      
      // Format JSON: [[lat, lng], [lat, lng], ...]
      if (polygonStr.startsWith("[")) {
        const parsed = JSON.parse(polygonStr);
        return parsed.map(([lat, lng]: [number, number]) => [lat, lng] as [number, number]);
      }
    } catch (err) {
      console.error("Error parsing polygon:", polygonStr, err);
    }
    
    return [];
  };

  const getPolygonColor = (commodity: string | null, index: number): string => {
    const colors = [
      "#10b981", "#3b82f6", "#f59e0b", "#ef4444",
      "#8b5cf6", "#ec4899", "#06b6d4", "#f97316",
    ];
    
    if (commodity) {
      let hash = 0;
      for (let i = 0; i < commodity.length; i++) {
        hash = commodity.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    }
    
    return colors[index % colors.length];
  };

  const validPlots: ParsedPlot[] = plots
    .map((plot, index) => ({
      ...plot,
      coordinates: parsePolygon(plot.polygon),
      color: getPolygonColor(plot.commodity, index),
    }))
    .filter((plot) => plot.coordinates.length > 0);

  if (!isMounted) {
    return (
      <Card className="w-full h-[600px] flex items-center justify-center">
        <CardContent>
          <p className="text-muted-foreground">Initializing...</p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="w-full h-[600px] flex items-center justify-center">
        <CardContent>
          <p className="text-muted-foreground">Loading map data...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full h-[600px] flex items-center justify-center">
        <CardContent>
          <p className="text-destructive">Error: {error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Plots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{validPlots.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {validPlots
                .reduce((sum, plot) => sum + (Number(plot.polygonarea) || 0), 0)
                .toFixed(2)} ha
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Farmers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(validPlots.map((p) => p.farmer).filter(Boolean)).size}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Commodities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(validPlots.map((p) => p.commodity).filter(Boolean)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Farm Distribution Map</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Suspense fallback={
            <div className="h-[600px] w-full flex items-center justify-center">
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          }>
            <LeafletMap validPlots={validPlots} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
