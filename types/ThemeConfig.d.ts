import { Components, ComponentsPropsList, Interpolation, Theme  } from "@mui/material/styles";


interface customgreyProps {
  darkRed: string;
  darkGreyOne: string;
  darkGreyTwo: string;
  lightPink: string;
  darkPink: string;
  ligthGreyOne: string;
}

type CustomShadow = {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  card: string;
  dropdown: string;
  table: string;
  dialog: string;
  primary: string;
  info: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
};


declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    export: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
  
  interface TypographyOwnProps {
    size: "small" | "large";
  }
}


export type ComponentsVariantss<ProTheme = unknown> = {
  [Name in keyof ComponentsPropsList]?: Array<{
    props:
      | Partial<ComponentsPropsList[Name]>
      | ((
          props: Partial<ComponentsPropsList[Name]> & {
            ownerState: Partial<ComponentsPropsList[Name]>;
          },
        ) => boolean);
    style: Interpolation<{ theme: ProTheme, demo : "demo" }>;
  }>;
};

declare module "@mui/material/styles/variants" {
    export interface ComponentsVariants extends ComponentsVariantss<Theme>{}
}


declare module "@mui/material/styles" {

  interface PaletteColor {
    darker?: string;
    lighter?: string;
    backgoundColorLight?: string;
    extralight?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
    backgoundColorLight?: string;
    extralight?: string;
  }
  interface Palette {
    customColor: customgreyProps;
  }
  interface TypeBackground {
    neutral?: string;
  }
  interface PaletteOptions {
    customColor: customgreyProps;
  }
  interface Theme {
    customShadows: CustomShadow;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontSecondaryFamily: string;
    fontWeightSemiBold: number;
    subtitle3: TypographyStyleOptions;
  }
}
