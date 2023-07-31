import { useState, useEffect } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Header, MantineThemeOverride } from '@mantine/core';
import { useHotkeys, useLocalStorage, useWindowEvent } from '@mantine/hooks';
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
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: undefined,
    getInitialValueInEffect: true
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(()=>{
    if(colorScheme){
      // only toggle the color scheme when color scheme is undefined, 
      // otherwise it always use dark no matter what is in local storage
      toggleColorScheme(colorScheme);
    }
  },[]);

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