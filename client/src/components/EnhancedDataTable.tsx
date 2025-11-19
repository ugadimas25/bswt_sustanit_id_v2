import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search, Filter, Download, RefreshCw, ChevronDown, 
  ArrowUpDown, ArrowUp, ArrowDown, MoreHorizontal,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle2,
  Sparkles
} from "lucide-react";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
  width?: string;
}

export interface AIInsight {
  type: 'trend' | 'anomaly' | 'prediction' | 'recommendation';
  message: string;
  severity?: 'low' | 'medium' | 'high';
  icon?: any;
}

interface EnhancedDataTableProps {
  title: string;
  description?: string;
  data: any[];
  columns: Column[];
  searchable?: boolean;
  filterable?: boolean;
  exportable?: boolean;
  bulkActions?: boolean;
  aiInsights?: AIInsight[];
  onRowClick?: (row: any) => void;
  rowActions?: (row: any) => Array<{
    label: string;
    onClick: () => void;
    icon?: any;
  }>;
  stats?: Array<{
    label: string;
    value: string | number;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
    icon?: any;
  }>;
}

export function EnhancedDataTable({
  title,
  description,
  data,
  columns,
  searchable = true,
  filterable = true,
  exportable = true,
  bulkActions = false,
  aiInsights,
  onRowClick,
  rowActions,
  stats,
}: EnhancedDataTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const itemsPerPage = 10;

  // Filter data based on search
  const filteredData = data.filter(row => {
    if (!searchQuery) return true;
    return Object.values(row).some(value => 
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Helper function to parse numeric values from strings
  const parseNumericValue = (val: any): number | null => {
    if (typeof val === 'number') return val;
    if (typeof val !== 'string') return null;
    
    // Trim first to handle leading/trailing whitespace
    const trimmed = val.trim();
    
    // Exclude date-like strings (/, T, : or - not at the start)
    // Allow leading - for negative numbers, but reject internal hyphens (ISO dates)
    if (/[\/T:]/.test(trimmed) || /[^-]-/.test(trimmed)) return null;
    
    // Remove common formatting: commas, $, %, spaces
    const cleaned = trimmed.replace(/[\$,\s%]/g, '');
    
    // Check if it's a valid number
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  };

  // Helper function to parse dates from various formats
  const parseDateValue = (val: any): Date | null => {
    if (val instanceof Date) return val;
    if (typeof val !== 'string') return null;
    
    const str = val.trim();
    
    // Try dd/MM/YYYY or mm/dd/YYYY format
    const dateMatch = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (dateMatch) {
      const [, first, second, year] = dateMatch;
      const firstNum = parseInt(first);
      const secondNum = parseInt(second);
      const yearNum = parseInt(year);
      
      // If first number > 12, must be dd/MM/YYYY
      if (firstNum > 12 && secondNum <= 12) {
        const date = new Date(yearNum, secondNum - 1, firstNum);
        if (!isNaN(date.getTime())) return date;
      }
      
      // If second number > 12, must be mm/dd/YYYY
      if (secondNum > 12 && firstNum <= 12) {
        const date = new Date(yearNum, firstNum - 1, secondNum);
        if (!isNaN(date.getTime())) return date;
      }
      
      // Ambiguous case: both <= 12. Default to dd/MM/YYYY (international standard)
      if (firstNum <= 31 && secondNum <= 12) {
        const date = new Date(yearNum, secondNum - 1, firstNum);
        if (!isNaN(date.getTime())) return date;
      }
    }
    
    // Try ISO format or other Date-parseable formats
    const date = new Date(str);
    return isNaN(date.getTime()) ? null : date;
  };

  // Sort data with type-safe comparison
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    const direction = sortDirection === 'asc' ? 1 : -1;
    
    // Handle null/undefined values - always keep them at the end
    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return 1;  // null always goes to end
    if (bVal == null) return -1;  // null always goes to end
    
    // Try numeric comparison first (handles numbers and numeric strings)
    const aNum = parseNumericValue(aVal);
    const bNum = parseNumericValue(bVal);
    
    if (aNum !== null && bNum !== null) {
      return (aNum - bNum) * direction;
    }
    
    // Try date comparison (dd/MM/YYYY, mm/dd/YYYY, ISO formats)
    const aDate = parseDateValue(aVal);
    const bDate = parseDateValue(bVal);
    
    if (aDate !== null && bDate !== null) {
      return (aDate.getTime() - bDate.getTime()) * direction;
    }
    
    // Fall back to string comparison
    return String(aVal).localeCompare(String(bVal)) * direction;
  });

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  // Generate unique row ID
  const getRowId = (row: any, _index: number): string => {
    // Try to use a unique field from the row, fallback to stringified row (stable across re-renders)
    return row.id || row.farmerId || row.harvestCollectionNumber || `row-${JSON.stringify(row)}`;
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(paginatedData.map((row, index) => getRowId(row, index))));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (rowId: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
  };

  // CSV Export functionality
  const handleExport = () => {
    const headers = columns.map(col => col.label).join(',');
    const rows = sortedData.map(row => 
      columns.map(col => {
        const value = row[col.key];
        // Escape commas and quotes in CSV
        const escaped = String(value || '').replace(/"/g, '""');
        return `"${escaped}"`;
      }).join(',')
    ).join('\n');
    
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-export.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getAIInsightIcon = (type: AIInsight['type']) => {
    switch (type) {
      case 'trend': return TrendingUp;
      case 'anomaly': return AlertTriangle;
      case 'prediction': return Sparkles;
      case 'recommendation': return CheckCircle2;
    }
  };

  const getAIInsightColor = (severity?: AIInsight['severity']) => {
    switch (severity) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-amber-600 dark:text-amber-400';
      case 'low': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6" data-testid="enhanced-data-table">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
          {description && <p className="text-sm sm:text-base text-muted-foreground mt-1">{description}</p>}
        </div>
      </div>

      {/* Stats Grid */}
      {stats && stats.length > 0 && (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      {stat.change !== undefined && (
                        <div className={`flex items-center text-sm ${
                          stat.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                          stat.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                          'text-muted-foreground'
                        }`}>
                          {stat.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                          {stat.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                          <span>{Math.abs(stat.change)}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {stat.icon && <stat.icon className="h-8 w-8 text-primary opacity-30" />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* AI Insights */}
      {aiInsights && aiInsights.length > 0 && (
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {aiInsights.map((insight, index) => {
              const Icon = insight.icon || getAIInsightIcon(insight.type);
              return (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${getAIInsightColor(insight.severity)}`} />
                  <p className="text-sm text-foreground">{insight.message}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* Actions Bar */}
      <Card>
        <CardContent className="pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-2">
            {/* Search */}
            {searchable && (
              <div className="relative flex-1 min-w-full sm:min-w-[200px] sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search"
                />
              </div>
            )}

            {/* Filters */}
            {filterable && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuCheckboxItem>Active Items</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Inactive Items</DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Certified</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Export */}
            {exportable && (
              <Button variant="outline" size="sm" onClick={handleExport} data-testid="button-export">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            )}

            {/* Refresh */}
            <Button variant="outline" size="sm" data-testid="button-refresh">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>

            {/* Bulk Actions */}
            {bulkActions && selectedRows.size > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" size="sm">
                    Bulk Actions ({selectedRows.size})
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Export Selected</DropdownMenuItem>
                  <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete Selected</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  {bulkActions && (
                    <TableHead className="w-12">
                      <Checkbox
                        checked={
                          paginatedData.length > 0 && 
                          paginatedData.every((row, idx) => selectedRows.has(getRowId(row, idx)))
                        }
                        onCheckedChange={handleSelectAll}
                        data-testid="checkbox-select-all"
                      />
                    </TableHead>
                  )}
                  {columns.map((column) => (
                    <TableHead 
                      key={column.key} 
                      className={`font-medium ${column.width || ''}`}
                    >
                      {column.sortable ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="-ml-3 h-8 hover:bg-transparent"
                          onClick={() => handleSort(column.key)}
                        >
                          {column.label}
                          {sortColumn === column.key ? (
                            sortDirection === 'asc' ? (
                              <ArrowUp className="ml-2 h-4 w-4" />
                            ) : (
                              <ArrowDown className="ml-2 h-4 w-4" />
                            )
                          ) : (
                            <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
                          )}
                        </Button>
                      ) : (
                        column.label
                      )}
                    </TableHead>
                  ))}
                  {rowActions && <TableHead className="w-12"></TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => {
                    const rowId = getRowId(row, rowIndex);
                    return (
                    <TableRow
                      key={rowId}
                      className={`${onRowClick ? 'cursor-pointer' : ''} hover:bg-muted/30`}
                      onClick={() => onRowClick?.(row)}
                      data-testid={`row-${rowIndex}`}
                    >
                      {bulkActions && (
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={selectedRows.has(rowId)}
                            onCheckedChange={(checked) => handleSelectRow(rowId, checked as boolean)}
                            data-testid={`checkbox-row-${rowIndex}`}
                          />
                        </TableCell>
                      )}
                      {columns.map((column) => (
                        <TableCell key={column.key}>
                          {column.render ? column.render(row[column.key], row) : row[column.key]}
                        </TableCell>
                      ))}
                      {rowActions && (
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                data-testid={`button-row-actions-${rowIndex}`}
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {rowActions(row).map((action, actionIndex) => (
                                <DropdownMenuItem
                                  key={actionIndex}
                                  onClick={action.onClick}
                                >
                                  {action.icon && <action.icon className="h-4 w-4 mr-2" />}
                                  {action.label}
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      )}
                    </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell 
                      colSpan={columns.length + (bulkActions ? 1 : 0) + (rowActions ? 1 : 0)} 
                      className="text-center py-12 text-muted-foreground"
                    >
                      No data available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t">
              <div className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} results
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  data-testid="button-previous-page"
                >
                  Previous
                </Button>
                <div className="text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="button-next-page"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
