import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { Group, ActionIcon, useMantineColorScheme, useMantineTheme, Text } from '@mantine/core';

const AppHeader = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    return (<Group sx={{ height: '100%' }} px={20} position="apart">
            <Text fw={700}>CV - Ada Yu</Text>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun color={theme.colors.gray[0]} size="1.25rem" /> : <IconMoonStars size="1.25rem" />}
            </ActionIcon>
          </Group>);
}

export default AppHeader;