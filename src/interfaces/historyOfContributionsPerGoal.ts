import { Contribution } from './contribution';

export interface HistoryOfContributionsPerGoal {
  goalId: number;
  contributions: Contribution[];
}
