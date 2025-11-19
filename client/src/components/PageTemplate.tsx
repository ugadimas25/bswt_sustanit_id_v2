import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Download, RefreshCw } from "lucide-react";
import { Link } from "wouter";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface PageTemplateProps {
  title: string;
  description?: string;
  data: any[];
  columns: Column[];
  addButtonText?: string;
  addButtonHref?: string;
  stats?: Array<{
    label: string;
    value: string | number;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  showActions?: boolean;
}

export function PageTemplate({
  title,
  description,
  data,
  columns,
  addButtonText,
  addButtonHref,
  stats,
  showActions = true
}: PageTemplateProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground" data-testid={`text-page-title`}>{title}</h1>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>
        {addButtonText && addButtonHref && (
          <Link href={addButtonHref}>
            <Button data-testid="button-add">
              <Plus className="h-4 w-4 mr-2" />
              {addButtonText}
            </Button>
          </Link>
        )}
      </div>

      {/* Stats Grid */}
      {stats && stats.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1" data-testid={`text-stat-${index}`}>{stat.value}</p>
                  </div>
                  {stat.icon && <stat.icon className="h-8 w-8 text-primary opacity-50" />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Actions Bar */}
      {showActions && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" data-testid="button-search">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" data-testid="button-filter">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" data-testid="button-export">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" data-testid="button-refresh">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>{title} List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  {columns.map((column) => (
                    <th key={column.key} className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b hover-elevate">
                      {columns.map((column) => (
                        <td key={column.key} className="py-3 px-4">
                          {column.render ? column.render(row[column.key], row) : row[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center py-12 text-muted-foreground">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
