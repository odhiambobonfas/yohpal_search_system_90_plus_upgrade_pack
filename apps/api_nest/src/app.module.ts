import { Module } from '@nestjs/common';
import { PrismaService } from './modules/common/prisma.service';
import { SearchDocumentsController } from './modules/search_documents/search-documents.controller';
import { SearchDocumentsService } from './modules/search_documents/search-documents.service';
import { SearchIngestionController } from './modules/search_ingestion/search-ingestion.controller';
import { SearchIngestionService } from './modules/search_ingestion/search-ingestion.service';
import { SearchQueryController } from './modules/search_query/search-query.controller';
import { SearchQueryService } from './modules/search_query/search-query.service';
import { AutocompleteController } from './modules/autocomplete/autocomplete.controller';
import { AutocompleteService } from './modules/autocomplete/autocomplete.service';
import { RankingController } from './modules/ranking/ranking.controller';
import { RankingService } from './modules/ranking/ranking.service';
import { RecommendationsController } from './modules/recommendations/recommendations.controller';
import { RecommendationsService } from './modules/recommendations/recommendations.service';
import { SearchAnalyticsController } from './modules/search_analytics/search-analytics.controller';
import { SearchAnalyticsService } from './modules/search_analytics/search-analytics.service';
import { ConnectorsController } from './modules/connectors/connectors.controller';
import { ConnectorsService } from './modules/connectors/connectors.service';
import { GuardrailsController } from './modules/guardrails/guardrails.controller';
import { GuardrailsService } from './modules/guardrails/guardrails.service';
import { FinanceRulesController } from './modules/finance_rules/finance-rules.controller';
import { FinanceRulesService } from './modules/finance_rules/finance-rules.service';

@Module({
  controllers: [
    SearchDocumentsController,
    SearchIngestionController,
    SearchQueryController,
    AutocompleteController,
    RankingController,
    RecommendationsController,
    SearchAnalyticsController,
    ConnectorsController,
    GuardrailsController,
    FinanceRulesController,
  ],
  providers: [
    PrismaService,
    SearchDocumentsService,
    SearchIngestionService,
    SearchQueryService,
    AutocompleteService,
    RankingService,
    RecommendationsService,
    SearchAnalyticsService,
    ConnectorsService,
    GuardrailsService,
    FinanceRulesService,
  ],
})
export class AppModule {}
