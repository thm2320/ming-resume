import { Flex, Container, Stack, Divider } from '@mantine/core';
import JobSection from './JobSection';
import LanguageSection from './LanguageSection';
import BasicInfoSection from './BasicInfoSection';
// import EducationSection from './EducationSection';
import CertAndEduSection from './CertificationSection';
import SkillSection from './SkillSection';
import IntroSection from './IntroSection';

const Profile = () => {
  return (
    <Stack spacing="0">
      <BasicInfoSection />
      <Divider mb="sm" />
      <Flex
        mx="md"
        mb="md"
        gap="md"
        direction={{ base: 'column', md: 'row' }}
        justify={{ sm: 'left' }}
      >
        <Container >
          <IntroSection />
          <SkillSection />
          <JobSection />
          <Stack spacing="xs">
            <Divider my="sm" variant="dotted" />
            <CertAndEduSection />
            <Divider my="sm" variant="dotted" />
            <LanguageSection />
          </Stack>
        </Container>
      </Flex>
    </Stack>
  );
};

export default Profile;
