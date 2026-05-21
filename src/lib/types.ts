export type ToolId =
  | 'cursor'
  | 'github_copilot'
  | 'claude'
  | 'chatgpt'
  | 'anthropic_api'
  | 'openai_api'
  | 'gemini'
  | 'windsurf';

export type UseCase = 'coding' | 'writing' | 'data' | 'research' | 'mixed';

export interface ToolInput {
  toolId: ToolId;
  plan: string;
  seats: number;
  monthlySpend: number; // what they're actually paying
}

export interface AuditInput {
  tools: ToolInput[];
  teamSize: number;
  useCase: UseCase;
}

export interface ToolRecommendation {
  toolId: ToolId;
  currentSpend: number;
  recommendedAction: 'downgrade' | 'switch' | 'cancel' | 'keep' | 'use_credits';
  recommendedPlan?: string;
  recommendedTool?: string;
  projectedSpend: number;
  monthlySavings: number;
  reason: string;
}

export interface AuditResult {
  auditId: string;
  recommendations: ToolRecommendation[];
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  aiSummary?: string;
  showCredexCTA: boolean; // true if savings > $500/mo
}