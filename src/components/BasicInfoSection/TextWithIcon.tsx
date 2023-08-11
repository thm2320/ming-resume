import { Box, Center, Text } from '@mantine/core';

type TextWithIconProp = {
  icon: React.ReactNode;
  url?: string;
  text: string;
};

export const TextWithIcon = ({ icon, url, text }: TextWithIconProp) => {
  return (
    <Box>
      <Center inline>
        {icon}
        {url ? (
          <Text ml={5} component="a" href={url}>
            {text}
          </Text>
        ) : (
          <Text ml={5}>{text}</Text>
        )}
      </Center>
    </Box>
  );
};
