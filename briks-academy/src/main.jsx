import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { getTheme } from './theme/theme.js'

function Main() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
