import { List, Title, Text } from '@mantine/core';
import { education } from '../data';
import { IconSchool } from '@tabler/icons-react';

const EducationSection = () => {

    return (
        <>
            <Title order={3}>Education</Title>
            <List>
                { education.map((study, idx)=>{
                    return (
                            <List.Item 
                                key={`${idx}_${study.title.substring(0, Math.min(5,study.title.length))}`}
                                icon={
                                      <IconSchool size="1rem" />
                                  }
                                >
                                <Text fw={study.institute?500:0}>{study.title}{study.institute? ',':''}</Text>
                                <Text>{study.institute}</Text>
                            </List.Item>
                        );
                }) }
            </List>
        </>
    );
};

export default EducationSection;