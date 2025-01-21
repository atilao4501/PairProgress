export interface NewGoal {
  name: string;
  description: string;
  targetAmount: number;
  initialAmount?: number;
  finalDate: Date;
  recommendedInvestmentPerMonth: number;
}
