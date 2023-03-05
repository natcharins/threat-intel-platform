export interface TagStatus {
  key: string;
  name: string;
  color: string;
}

export interface DataType {
  site: string;
  type: string;
  source: string;
  keyword: string;
  content: string;
  severity: string;
  monitoringStatus: string;
  date: string;
  status: boolean;
}
