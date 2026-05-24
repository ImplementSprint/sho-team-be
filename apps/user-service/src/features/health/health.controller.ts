import { Controller, Get } from '@nestjs/common';
import { createHealthResponse, HealthResponse } from '../../../../../libs/common/src';

const SERVICE_NAME = 'user-service';

@Controller(['health', 'api/v1/health'])
export class HealthController {
  @Get()
  root(): HealthResponse {
    return createHealthResponse(SERVICE_NAME);
  }

  @Get('live')
  live(): HealthResponse {
    return createHealthResponse(SERVICE_NAME);
  }

  @Get('ready')
  ready(): HealthResponse {
    return createHealthResponse(SERVICE_NAME);
  }
}
