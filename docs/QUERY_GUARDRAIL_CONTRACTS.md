# Search Query Guardrail Contracts

## Guardrail input
{
  "query": "campus radio",
  "requestedLimit": 10
}

## Guardrail decision
{
  "allowQueryExecution": true,
  "reason": "within_threshold",
  "thresholds": {
    "maxQueryLength": 120,
    "maxSearchLimit": 25
  }
}
