import { useState, useEffect } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Header, MantineThemeOverride } from '@mantine/core';
import { useHotkeys, useWindowEvent } from '@mantine/hooks';
import Profile from './components/Profile';
import AppHeader from './components/AppHeader';
import { PrintContext } from './contexts/print';


const App = () => {
  return (
      <AppShell
      fixed
      header={<Header height={60} p="xs"><AppHeader/></Header>}
      styles={{
        main: {
          paddingTop: "var(--mantine-header-height, 0px)", // remove padding from mantine main component
          paddingBottom: "var(--mantine-footer-height, 0px)",
          paddingLeft: "var(--mantine-navbar-width, 0px)",
          paddingRight: "var(--mantine-aside-width, 0px)"
        },
      }}
      >
      <Profile/>
    </AppShell>
  );
};

const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  white:'#000000', // override white to fix the timeline display in dark mode
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
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    if(value){
      setColorScheme(value);
      localStorage.setItem("mantine-color-scheme", value);
    }else{
      const toggledValue = colorScheme==='dark'?'light':'dark';
      setColorScheme(toggledValue);
      localStorage.setItem("mantine-color-scheme", toggledValue);
    }
  }

  useEffect(()=>{
    // do the theme check in useEffect once,
    // since the mantine built in hooks useColorScheme and useLocalStorage cannot seem to work together
    const theme = localStorage.getItem("mantine-color-scheme");
    if(theme){
      // use the theme in local storage as long as it exist
      toggleColorScheme(theme as ColorScheme);
    }else if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // otherwise check on user preference
      toggleColorScheme('dark');
    }
  },[]);

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const [isPrinting, setIsPrinting] = useState(false);
  useWindowEvent('beforeprint', ()=>setIsPrinting(true));
  useWindowEvent('afterprint', ()=>setIsPrinting(false));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={colorScheme === 'dark'?darkTheme:{colorScheme}} withGlobalStyles withNormalizeCSS>
        <PrintContext.Provider value={{isPrinting, setIsPrinting}}>
        <App />
        </PrintContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}