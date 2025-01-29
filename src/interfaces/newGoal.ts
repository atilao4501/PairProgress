export interface NewGoal {
  name: string;
  description: string;
  targetAmount: number;
  currentAmount?: number;
  finalDate: Date;
  recommendedInvestmentPerMonth: number;
}
