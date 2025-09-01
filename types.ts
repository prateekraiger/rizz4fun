
export enum GameState {
  Home,
  AskingName,
  Quiz,
  Success,
  Failure,
  GameOver,
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}
