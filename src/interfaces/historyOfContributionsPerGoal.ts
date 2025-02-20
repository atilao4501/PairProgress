import { Contribution } from './contribution';

export interface HistoryOfContributionsPerGoal {
  goalId: number;
  goalName: string;
  contributions: Contribution[];
}
