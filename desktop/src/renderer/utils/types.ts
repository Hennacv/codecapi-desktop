import { NavigateFunction } from 'react-router-dom';

export interface AddTagDto {
  title: string;
}

interface BaseBlock {
  position: number;
  value: string;
}

export interface CodeBlock extends BaseBlock {
  type: 'code';
  language: string;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  contents: string;
}

export type Block = CodeBlock | TextBlock;

// typeguard
export const isTextBlock = (block: Block): block is TextBlock => {
  return block.type === 'text';
};

export const isCodeBlock = (block: Block): block is CodeBlock => {
  return block.type === 'code';
};

export interface AddQuestionDto {
  title: string;
  text: string;
  blocks: Block[];
  tags?: { id: number }[];
}

export interface AddAnswerDto {
  blocks: Block[];
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
  createdAt?: string;
  updatedAt?: string;
}

export interface Question {
  answer: Answer[];
  id: number;
  title: string;
  blocks: Block[];
  tags: Tag[];
  createdAt: string;
  user: User;
}

export interface Answer {
  id: number;
  blocks: Block[];
  createdAt: string;
  user: User;
}

export interface Filter {
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  isShown: boolean;
  onClose: () => void;
}

export interface Searched {
  searchTerm: string;
  setSearchTerm: (str: string) => void;
}

interface MessageUser {
  userId: number;
  userName: string;
}

interface BaseMessageEvent {
  type: string;
  user: MessageUser;
}

interface QuestionMessageEvent extends BaseMessageEvent {
  type: 'new-question';
  questionId: number;
}

interface AnswerMessageEvent extends BaseMessageEvent {
  type: 'new-answer';
  questionId: number;
}

export type MessageEvent = QuestionMessageEvent | AnswerMessageEvent;

export interface showNotificationData {
  title: string;
  message: string;
  navigate: NavigateFunction;
  link?: string;
}

export interface setBadgeCountData {
  count: number;
}
