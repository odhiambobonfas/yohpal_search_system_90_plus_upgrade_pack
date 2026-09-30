# Search Ranking Guardrail Contracts

## Guardrail input
{
  "engagementScore": 0.6,
  "freshnessScore": 0.7,
  "trustScore": 0.8
}

## Guardrail decision
{
  "allowRankingOutput": true,
  "reason": "within_threshold",
  "thresholds": {
    "minRankingScore": 0.1
  }
}
