/** JSON-driven table column configuration consumed by DynamicTableComponent */
export interface TableColumnConfig {
  key: string;
  header: string;
  type: 'text' | 'number' | 'date' | 'action' | 'custom' | 'boolean';
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  templateRef?: string;
  actions?: TableAction[];
}

export interface TableAction {
  label: string;
  icon?: string;
  action: string;
  permission?: string;
}

export interface TableConfig {
  columns: TableColumnConfig[];
  pagination?: boolean;
  pageSize?: number;
  searchable?: boolean;
}
