import { Title, Flex, Box, Stack } from '@mantine/core';
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconEPassport,
} from '@tabler/icons-react';
import { basicInfo } from '../../data';
// import { usePrintContext } from '../../contexts/print';
import { TextWithIcon } from '../BasicInfoSection/TextWithIcon';

// const AvatarSection = () => {
//   return (
//     <HoverCard width={280} shadow="md" withArrow>
//       <HoverCard.Target>
//         <Avatar
//           size={150}
//           radius={150}
//           src="https://cataas.com/cat?width=150&height=150"
//         />
//       </HoverCard.Target>
//       <HoverCard.Dropdown>
//         <Text size="sm">
//           Random Cat Images from{' '}
//           <Text component="a" href="https://cataas.com/" target="_blank">
//             Cat as a service
//           </Text>
//           .
//         </Text>
//       </HoverCard.Dropdown>
//     </HoverCard>
//   );
// };

const BasicInfoText = () => {
  return (
    <Stack spacing={0}>
      <Title mb={15}>{basicInfo.name}</Title>
      <TextWithIcon
        icon={<IconMail />}
        url={`mailto:${basicInfo.email}`}
        text={basicInfo.email}
      />
      {basicInfo.github && (
        <TextWithIcon
          icon={<IconBrandGithub />}
          url={basicInfo.github}
          text={basicInfo.github}
        />
      )}
      {basicInfo.linkedin && (
        <TextWithIcon
          icon={<IconBrandLinkedin />}
          url={basicInfo.linkedin}
          text={basicInfo.linkedin}
        />
      )}
      {basicInfo.location && (
        <TextWithIcon
          icon={<IconMapPin />}
          url={`https://www.google.com/maps/search/${basicInfo.location}`}
          text={basicInfo.location}
        />
      )}
      {basicInfo.visaInfo && (
        <TextWithIcon icon={<IconEPassport />} text={basicInfo.visaInfo} />
      )}
    </Stack>
  );
};

const BasicInfoSection = () => {
  // const { isPrinting } = usePrintContext();
  return (
    <Box miw="xs" sx={(theme) => ({ backgroundColor: theme.colors.blue[4] })}>
      <Box m="md">
        <Flex gap={50}>
          {/* <Box display={isPrinting ? 'none' : 'block'}>
            <AvatarSection />
          </Box> */}
          <Box>
            <BasicInfoText />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BasicInfoSection;
