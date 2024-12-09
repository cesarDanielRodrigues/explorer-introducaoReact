import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { Profile } from "./pages/Profile"

import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

import GlobalStyles from "./styles/global"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </StrictMode>
)
