import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Questrial",
      styles: ["Regular"],
    },
    {
      name: "Playfair Display",
      styles: ["Black"],
    },
  ],
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Questrial", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
