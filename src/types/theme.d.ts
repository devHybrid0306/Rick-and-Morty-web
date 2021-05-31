interface IColor {
  mainBgColor: string;
  sideBgColor: string;
  primaryColor: string;
  errorColor: string;
  mainFontColor: string;
  whiteColor: string;
}

interface IFont {
  family: string;
  weight: {
    regular: number;
    medium: number;
    semi_bold: number;
  };
}

interface ITransition {
  transitionFast: string;
  transitionNormal: string;
  transitionSlow: string;
}

interface IBreakPoints {
  desktop: string;
  laptop: string;
  tablet: string;
  mobile: string;
}

export interface ITheme {
  name: string;
  color: IColor;
  font: IFont;
  transition: ITransition;
  breakPoints: IBreakPoints;
}
