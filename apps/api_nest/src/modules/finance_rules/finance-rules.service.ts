import { Injectable } from '@nestjs/common';

@Injectable()
export class FinanceRulesService {
  get() {
    return {
      sponsoredSearchBlendEnabled: process.env.ENABLE_SPONSORED_SEARCH_BLEND === 'true',
      minRankingScore: Number(process.env.MIN_RANKING_SCORE || 0.1),
      sponsoredSearchMustRespectVisibility: true,
      sponsoredSearchMustRespectActiveStatus: true,
    };
  }
}
