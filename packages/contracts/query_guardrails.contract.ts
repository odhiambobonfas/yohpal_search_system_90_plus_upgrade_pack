export type QueryGuardrailInput = {
  query: string;
  requestedLimit: number;
};

export type QueryGuardrailDecision = {
  allowQueryExecution: boolean;
  reason: string;
  thresholds: {
    maxQueryLength: number;
    maxSearchLimit: number;
  };
};
