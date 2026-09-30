import { Controller, Get } from '@nestjs/common';
import { FinanceRulesService } from './finance-rules.service';

@Controller('search-finance-rules')
export class FinanceRulesController {
  constructor(private readonly service: FinanceRulesService) {}
  @Get() get() { return this.service.get(); }
}
