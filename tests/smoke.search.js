const fs = require('fs');

const required = [
  'docs/QUERY_GUARDRAIL_CONTRACTS.md',
  'docs/RANKING_GUARDRAIL_CONTRACTS.md',
  'apps/api_nest/src/modules/guardrails/guardrails.service.ts'
];

for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`missing required file: ${file}`);
}

console.log('search smoke test passed');
