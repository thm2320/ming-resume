import { Flex, Box, Title } from '@mantine/core';
import { introInfo } from '../../data';
import ReactMarkdown from 'react-markdown';

const IntroSection = () => {
  return (
    <Box>
      <Title order={3}>Introduction</Title>
      <Flex gap={50}>
        <Box>
          <ReactMarkdown>{introInfo}</ReactMarkdown>
        </Box>
      </Flex>
    </Box>
  );
};

export default IntroSection;
