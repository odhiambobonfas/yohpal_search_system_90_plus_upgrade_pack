import { Body, Controller, Post } from '@nestjs/common';
import { GuardrailsService } from './guardrails.service';

@Controller('search-guardrails')
export class GuardrailsController {
  constructor(private readonly service: GuardrailsService) {}
  @Post('query') query(@Body() body: { query: string; requestedLimit: number }) { return this.service.query(body); }
  @Post('ranking') ranking(@Body() body: { engagementScore: number; freshnessScore: number; trustScore: number }) { return this.service.ranking(body); }
}
