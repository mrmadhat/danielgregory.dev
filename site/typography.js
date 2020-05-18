import Typography from "typography"
import site from "./config"

const typography = new Typography({
  title: "Daniel Gregory Dev",
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
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      lineHeight: rhythm(2),
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
      color: "#841717",
      fontWeight: "bold",
    },
    blockquote: {
      borderLeft: `3px solid ${site.theme.color.accent}`,
      padding: rhythm(1),
      margin: `0 0 ${rhythm(1)} 0`,
      fontSize: rhythm(1.444),
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
