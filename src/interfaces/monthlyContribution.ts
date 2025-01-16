export interface MonthlyContribution {
  month: string;
  monthNumber: number;
  year: number;
  contributed: boolean;
}

export interface GoalContribution {
  goalId: number;
  goalName: string;
  contributions: MonthlyContribution[];
}
