import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { New } from "./pages/New"

import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

import GlobalStyles from "./styles/global"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New/>
    </ThemeProvider>
  </StrictMode>
)
