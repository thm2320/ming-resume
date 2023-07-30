import { Flex, Container, Stack, Divider } from '@mantine/core';
import JobSection from './JobSection';
import LanguageSection from './LanguageSection';
import AwardSection from './AwardSection';
import BasicInfoSection from './BasicInfoSection';
import EducationSection from './EducationSection';
import CertificationSection from './CertificationSection';
import SkillSection from './SkillSection';

const Profile = () => {
    return (
        <Container px="0" fluid>
            <Stack spacing="0">
                <BasicInfoSection/>
                <Divider mb="sm"/>
                <Flex mx="md" mb="md" gap="md" direction={{ base: 'column', md: 'row' }} justify={{ sm: 'left' }}>
                        <JobSection/>
                        <Container miw={500}><Stack spacing="xs">
                            <CertificationSection/>
                            <Divider my="sm" variant="dotted" />
                            <AwardSection/>
                            <Divider my="sm" variant="dotted" />
                            <SkillSection/>
                            <Divider my="sm" variant="dotted" />
                            <EducationSection/>
                            <Divider my="sm" variant="dotted" />
                            <LanguageSection/>
                        </Stack></Container>
                </Flex>
            </Stack>
        </Container>
    );
}

export default Profile;