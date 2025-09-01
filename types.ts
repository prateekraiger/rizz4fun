
export enum GameState {
  Home,
  AskingName,
  Quiz,
  Success,
  Failure,
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}
