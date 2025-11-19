import { useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Popup, useMap } from "react-leaflet";
import { Badge } from "@/components/ui/badge";
import "leaflet/dist/leaflet.css";

interface ParsedPlot {
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
  coordinates: [number, number][];
  color: string;
}

interface LeafletMapProps {
  validPlots: ParsedPlot[];
}

// Component to auto-fit map bounds
function MapBounds({ polygons }: { polygons: [number, number][][] }) {
  const map = useMap();

  useEffect(() => {
    if (polygons.length > 0) {
      const allPoints = polygons.flat();
      if (allPoints.length > 0) {
        try {
          map.fitBounds(allPoints, { padding: [50, 50] });
        } catch (err) {
          console.error("Error fitting bounds:", err);
        }
      }
    }
  }, [map, polygons]);

  return null;
}

export function LeafletMap({ validPlots }: LeafletMapProps) {
  const allPolygons = validPlots.map((plot) => plot.coordinates);
  const defaultCenter: [number, number] = [-2.5, 118.0];

  return (
    <div className="h-[600px] w-full rounded-b-lg overflow-hidden">
      <MapContainer
        center={defaultCenter}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {validPlots.map((plot, index) => (
          <Polygon
            key={index}
            positions={plot.coordinates}
            pathOptions={{
              color: plot.color,
              fillColor: plot.color,
              fillOpacity: 0.4,
              weight: 2,
            }}
          >
            <Popup>
              <div className="space-y-2 min-w-[200px]">
                <div className="font-semibold text-base border-b pb-2">
                  {plot.plot || "Unknown Plot"}
                </div>
                
                {plot.farmer && (
                  <div>
                    <span className="text-xs text-muted-foreground">Farmer:</span>
                    <p className="text-sm font-medium">{plot.farmer}</p>
                  </div>
                )}
                
                {plot.commodity && (
                  <div>
                    <span className="text-xs text-muted-foreground">Commodity:</span>
                    <p className="text-sm">
                      <Badge variant="secondary">{plot.commodity}</Badge>
                    </p>
                  </div>
                )}
                
                {plot.polygonarea && (
                  <div>
                    <span className="text-xs text-muted-foreground">Area:</span>
                    <p className="text-sm font-medium">{plot.polygonarea} ha</p>
                  </div>
                )}
                
                <div className="text-xs text-muted-foreground border-t pt-2 space-y-1">
                  {plot.village && <p>📍 {plot.village}</p>}
                  {plot.subdistrict && <p>   {plot.subdistrict}</p>}
                  {plot.district && <p>   {plot.district}</p>}
                  {plot.province && <p>   {plot.province}</p>}
                </div>
                
                {plot.firstplanting && (
                  <div className="text-xs text-muted-foreground border-t pt-2">
                    <p>First Planting: {new Date(plot.firstplanting).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </Popup>
          </Polygon>
        ))}
        
        {allPolygons.length > 0 && <MapBounds polygons={allPolygons} />}
      </MapContainer>
    </div>
  );
}
