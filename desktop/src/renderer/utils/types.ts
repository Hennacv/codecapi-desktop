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

export interface QuestionDto {
  title: string;
  blocks: Block[];
  tags?: { id: number }[];
}

export interface AnnouncementDto {
  title: string;
  blocks: Block[];
}

export interface TrickDto {
  title: string;
  blocks: Block[];
}

export interface AddAnswerDto {
  blocks: Block[];
  questionId: number;
}

export interface UpdateAnswerDto extends AddAnswerDto {
  accepted: boolean;
  answerId?: number;
}
export interface EditProfileDto {
  jobtitle: string;
  name: string;
  description: string;
  tags: { id: number }[];
}

interface BaseVoteDto {
  type: 'upvote';
  userId: number;
}

export interface AddAnswerVoteDto extends BaseVoteDto {
  answerId?: number;
}

export interface AddQuestionVoteDto extends BaseVoteDto {
  questionId?: number;
}

export interface AddTrickVoteDto extends BaseVoteDto {
  trickId?: number;
}

export type AddVoteDto = AddAnswerVoteDto | AddQuestionVoteDto | AddTrickVoteDto;

export interface AddCommentDto {
  comment: string;
  userId: number;
  answerId?: number;
  tricksId?: number;
  announcementsId?: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  uid: string;
  tags: Tag[];
  description: string;
  jobtitle: string;
  team: string;
}

export interface Profile {
  user: User;
  questionCount: number;
  answerCount: number;
  acceptedAnswerCount: number;
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
  votes: Vote[];
}

export interface Trick {
  id: number;
  title: string;
  blocks: Block[];
  createdAt: string;
  user: User;
  votes: Vote[];
  comments: Comment[];
}

export interface Answer {
  id: number;
  blocks: Block[];
  createdAt: string;
  user: User;
  votes: Vote[],
  comments: Comment[];
  accepted: boolean;
  questionId: number;
}

export interface Announcement {
  id: number;
  title: string;
  type: string;
  blocks: Block[];
  createdAt: string;
  user: User;
  date: string | undefined;
  time: string | undefined;
  location: string;
  image: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  comment: string;
  user: User;
  createdAt: string;
}

interface BaseVote {
  id: number;
  type: string;
  userId: number;
  user: User;
}

export interface AnswerVote extends BaseVote {
  answerId: number;
}

export interface QuestionVote extends BaseVote {
  questionId: number;
}

export type Vote = AnswerVote | QuestionVote;

export interface Modal {
  children: string | JSX.Element | JSX.Element[];
  isShown: boolean;
  onClose: () => void;
}

export type UseSelectedTagsType = {
  tags: Tag[];
  selectedTags: Tag[];
  addTag: (addedTag: Tag) => void;
  deleteTag: (removedTag: Tag) => void;
};

export type UseSelectedUsersType = {
  users: User[];
  selectedUsers: User[];
  addUser: (addedTag: User) => void;
  deleteUser: (removedTag: User) => void;
};

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

export interface AddQuestionForm {
  title: string;
  blocks: Block[];
  tags: Tag[];
  id?: number;
  isEditing?: boolean;
  createdAt?: string;
}