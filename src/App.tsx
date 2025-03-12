import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import Home from './Home/page'

// Dark theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MUIThemeSwitch from './Components/MUIThemeSwitch/index.tsx';
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e2939f0',
    },
    // background: {
    //   default: '#121212',
    // },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffffb8',
      contrastText: '#343434',
    },
    // background: {
    //   default: '#121212',
    // },
  },
});


function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    return theme.palette.mode === 'dark' ? setTheme(lightTheme) : setTheme(darkTheme);
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} noSsr>
        <CssBaseline />
        <main
          className="App flex justify-center items-center w-full min-h-screen bg-cover bg-fixed bg-center"
          dir="rtl"
          style={{ backgroundImage: `url('/background.jpg')` }}
        >
          <MUIThemeSwitch changeTheme={toggleTheme} />
          <Home />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
