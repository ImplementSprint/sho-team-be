import { HealthResponse } from './health.types';

export function createHealthResponse(service: string, now = new Date()): HealthResponse {
  return {
    service,
    status: 'ok',
    checks: {
      apiCenter: true,
    },
    timestamp: now.toISOString(),
  };
}
