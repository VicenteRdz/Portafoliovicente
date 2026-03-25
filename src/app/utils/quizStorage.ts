const RESULTS_KEY = 'phishing_quiz_results';
const USER_KEY = 'phishing_quiz_user';
const RANKING_KEY = 'phishing_quiz_ranking';

export type SavedQuizAnswer = {
  answer: string;
  score: number;
};

export type QuizResultsMap = Record<string, SavedQuizAnswer>;

export type QuizSession = {
  alias: string;
  totalScore: number;
  percentage: number;
  completedCount: number;
  timestamp: string;
};

export const saveAnswer = (scenarioId: string, data: SavedQuizAnswer): void => {
  const current = getResults();
  current[scenarioId] = data;
  localStorage.setItem(RESULTS_KEY, JSON.stringify(current));
};

export const getResults = (): QuizResultsMap => {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    return raw ? (JSON.parse(raw) as QuizResultsMap) : {};
  } catch {
    return {};
  }
};

export const clearResults = (): void => {
  localStorage.removeItem(RESULTS_KEY);
};

export const saveUserAlias = (alias: string): void => {
  localStorage.setItem(USER_KEY, alias.trim());
};

export const getUserAlias = (): string => {
  return localStorage.getItem(USER_KEY) || '';
};

export const clearUserAlias = (): void => {
  localStorage.removeItem(USER_KEY);
};

export const saveQuizSession = (session: QuizSession): void => {
  const current = getQuizRanking();
  current.push(session);

  current.sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
    return b.percentage - a.percentage;
  });

  localStorage.setItem(RANKING_KEY, JSON.stringify(current));
};

export const getQuizRanking = (): QuizSession[] => {
  try {
    const raw = localStorage.getItem(RANKING_KEY);
    return raw ? (JSON.parse(raw) as QuizSession[]) : [];
  } catch {
    return [];
  }
};

export const clearQuizRanking = (): void => {
  localStorage.removeItem(RANKING_KEY);
};