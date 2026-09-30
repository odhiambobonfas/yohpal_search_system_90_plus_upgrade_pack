import { Injectable } from '@nestjs/common';

@Injectable()
export class GuardrailsService {
  query(input: { query: string; requestedLimit: number }) {
    const maxQueryLength = Number(process.env.MAX_QUERY_LENGTH || 120);
    const maxSearchLimit = Number(process.env.MAX_SEARCH_LIMIT || 25);
    const allowQueryExecution = input.query.length <= maxQueryLength && input.requestedLimit <= maxSearchLimit;
    return {
      allowQueryExecution,
      reason: allowQueryExecution ? 'within_threshold' : (input.query.length > maxQueryLength ? 'query_too_long' : 'search_limit_exceeded'),
      thresholds: { maxQueryLength, maxSearchLimit },
    };
  }

  ranking(input: { engagementScore: number; freshnessScore: number; trustScore: number }) {
    const score = (input.engagementScore * 0.4) + (input.freshnessScore * 0.3) + (input.trustScore * 0.3);
    const minRankingScore = Number(process.env.MIN_RANKING_SCORE || 0.1);
    const allowRankingOutput = score >= minRankingScore;
    return {
      allowRankingOutput,
      reason: allowRankingOutput ? 'within_threshold' : 'ranking_score_too_low',
      thresholds: { minRankingScore },
    };
  }
}
