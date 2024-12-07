import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import {ThemeProvider} from'styled-components';
import theme from './styles/theme';

import GlobalStyles from './styles/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp/>
    </ThemeProvider>
  </StrictMode>,
)
