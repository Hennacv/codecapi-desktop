export interface AddTagDto {
  title: string;
}
export interface AddQuestionDto {
  title: string;
  text: string;
  tags?: { id: number }[];
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Tag {
  id: number;
  title: string;
}

export interface Question {
  id: number;
  title: string;
  text: string;
  tags: Tag[];
  createdAt: string;
  user: User;
}
