export type FormProps = {
  onChange: (data: { name: string; color: string }) => void;
};

export type Position = {
  x: number;
  y: number;
};

export type MapProps = {
  width: number;
  height: number;
  name: string;
  color: string;
};

export type CharacterProps = {
  x: number;
  y: number;
  name: string;
  color: string;
  size?: number;
};
