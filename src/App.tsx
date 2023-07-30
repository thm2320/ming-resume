import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Profile from './components/Profile';


const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
      padding="0"
      
    >
      <Profile/>
    </AppShell>
    </MantineProvider>
  );
};

export default function Main() {
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}