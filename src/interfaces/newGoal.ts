export interface NewGoal {
  name: string;
  description: string;
  targetAmount: number;
  currentAmount?: number;
  date: Date;
  recommendedInvestmentPerMonth: number;
}
