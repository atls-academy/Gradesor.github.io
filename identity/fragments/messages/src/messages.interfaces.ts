export interface UiText {
  context?: object;
  id: number;
  text: string;
  type: string;
}

export interface GeneralMessagesProps {
  messages?: UiText[];
}

export interface FieldMessagesProps {
  messages?: UiText[]
}
