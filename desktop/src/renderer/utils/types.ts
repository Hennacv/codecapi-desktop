export interface AddTagDto {
  title: string;
}
export interface AddQuestionDto {
  title: string;
  text: string;
  tags?: { id: number }[];
}

export interface AddAnswerDto {
  text: string;
  questionId: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Tag {
  id: number;
  title: string;
  color: string;
}

export interface Question {
  answer: Answer[];
  id: number;
  title: string;
  text: string;
  tags: Tag[];
  createdAt: string;
  user: User;
}

export interface Answer {
  id: number;
  text: string;
  createdAt: string;
}
