import COLOR from "./Colors";

const defaultFontType = "regular";

const baseConfig = {
  paragraph: {
    // used defaultFontType from above
    fontType: defaultFontType,
    size: 14,
    color: COLOR.BLACK,
    center: false,
    textStyle: {},
    tappable: false,
    onTap: () => null,
    textTransform: "none",
    testID: "",
  },
}

export default baseConfig;
