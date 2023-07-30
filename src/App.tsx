import { useState, useEffect } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Header,Footer, MantineThemeOverride } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Profile from './components/Profile';


const App = () => {
  return (
      <AppShell
      padding="0">
      <Profile/>
    </AppShell>
  );
};

const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  white:'#000000',
  colors:{
    blue: ['#212529',//'#E7F5FF',
      '#D0EBFF',
      '#A5D8FF',
      '#74C0FC',
      '#2D4356',//'#4DABF7',
      '#339AF0',
      '#228BE6',
      '#1C7ED6',
      '#1971C2',
      '#1864AB'
  ]
  }
};

export default function Main() {
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme(undefined,{
    getInitialValueInEffect: true
  });
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(()=>{
    toggleColorScheme(preferredColorScheme);
  },[preferredColorScheme])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={colorScheme === 'dark'?darkTheme:{colorScheme}} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}