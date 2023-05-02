interface Block {
  position: number;
  type: 'code' | 'text';
  value: string;
  contents?: string;
  language?: string;
}

interface BaseMessageEvent {
  title: string;
  message: string;
}

interface QuestionMessageEvent extends BaseMessageEvent {
  type: 'new-question';
  userId: number;
}

interface AnswerMessageEvent extends BaseMessageEvent {
  type: 'new-answer';
  answerId: number;
}

type MessageEvent = QuestionMessageEvent | AnswerMessageEvent;