interface Block {
  position: number;
  type: 'code' | 'text';
  value: string;
  language?: string;
}
