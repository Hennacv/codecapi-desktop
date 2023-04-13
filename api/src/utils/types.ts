interface Block {
  position: number;
  type: 'code' | 'text';
  value: string;
  contents?: string;
  language?: string;
}
