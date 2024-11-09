export interface Item {
  id: number;
  code: string;
  name: string;
  stock: number;
  dateAdded: string;
}

export type IncomingSource = 'EXPEDITION' | 'RETURN';

export interface IncomingItem {
  id: number;
  itemId: number;
  quantity: number;
  source: IncomingSource;
  expeditionNumber?: string;
  returnReason?: string;
  date: string;
}

export interface OutgoingItem {
  id: number;
  itemId: number;
  quantity: number;
  date: string;
}

export interface ExcelRow {
  'Kode Barang': string;
  'Jumlah': number;
}

export type ReportPeriod = 'WEEKLY' | 'MONTHLY';

export interface SalesReport {
  itemId: number;
  totalSales: number;
  period: string;
}