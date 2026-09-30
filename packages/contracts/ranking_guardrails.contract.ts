export type RankingGuardrailInput = {
  engagementScore: number;
  freshnessScore: number;
  trustScore: number;
};

export type RankingGuardrailDecision = {
  allowRankingOutput: boolean;
  reason: string;
  thresholds: {
    minRankingScore: number;
  };
};
