import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Blog } from './pages/Blog'
import { ProfileGithubProvider } from './contexts/ProfileGithubContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ProfileGithubProvider>
          <Blog />
        </ProfileGithubProvider>
      </ThemeProvider>
    </>
  )
}
