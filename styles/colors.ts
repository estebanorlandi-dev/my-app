export interface Colors {
  hex: { [key: string]: string };
  rgb: { [key: string]: string };
  hsl: { [key: string]: string };
}

const colors: Colors = {
  hex: {
    lightBlue: "00b4d8",
    blue: "0077b6",
    red: "db222a",
  },
  rgb: {},
  hsl: {},
};

export default colors;
