import Typography from "typography"

const typography = new Typography({
  title: "Unfilter",
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["300", "400", "400i"],
    },
  ],
  headerFontFamily: ["Merriweather", "serif"],
  bodyFontFamily: ["Merriweather", "serif"],
  scaleRatio: 2.5,
  headerWeight: 300,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      lineHeight: rhythm(2.5),
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1),
    },
    h3: {
      ...adjustFontSizeTo("18px"),
      fontStyle: "italic",
      color: "#7F7F7F",
    },
    a: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "#FF8383",
      fontWeight: "bold",
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
