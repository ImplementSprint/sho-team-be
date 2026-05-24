export interface HealthResponse {
  service: string;
  status: 'ok';
  checks: {
    apiCenter: boolean;
  };
  timestamp: string;
}
