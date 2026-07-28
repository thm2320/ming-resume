import { Flex, Container, Stack, Divider } from "@mantine/core";
import JobSection from "./JobSection";
import LanguageSection from "./LanguageSection";
import BasicInfoSection from "./BasicInfoSection";
// import EducationSection from './EducationSection';
import CertAndEduSection from "./CertificationSection";
import SkillSection from "./SkillSection";
import IntroSection from "./IntroSection";

const Profile = () => {
  return (
    <Stack spacing="0">
      <BasicInfoSection />
      <Divider mb="sm" />
      <Flex
        mx="md"
        mb="md"
        gap="md"
        direction={{ base: "column", md: "row" }}
        justify={{ sm: "left" }}
      >
        <Container size="100%">
          <IntroSection />
          <SkillSection />
          <JobSection />
          <Divider my="sm" variant="dotted" />
          <CertAndEduSection />
          <Divider my="sm" variant="dotted" />
          <LanguageSection />
        </Container>
      </Flex>
    </Stack>
  );
};

export default Profile;
