import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { Group, ActionIcon, useMantineColorScheme, Text } from '@mantine/core';

const AppHeader = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (<Group sx={{ height: '100%' }} px={20} position="apart">
            <Text>CV - Ada Yu</Text>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun color='violet' size="1rem" /> : <IconMoonStars size="1rem" />}
            </ActionIcon>
          </Group>);
}

export default AppHeader;