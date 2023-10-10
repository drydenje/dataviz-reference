export type Size = {
  width: number;
  height: number;
};

export type Datum = {
  // x: number;
  // y: number;
  date: Date;
  temperatureHigh: number;
};

export type Pos = {
  x: number;
  y: number;
};

export type Layout = {
  pos: Pos;
  size: Size;
};
