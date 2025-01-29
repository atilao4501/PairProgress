export interface Goal {
  id: number;
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  date: Date;
  recommendedInvestmentPerMonth: number;
}
