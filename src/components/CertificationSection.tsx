import { List, Title, Text } from '@mantine/core';
import { certAndEduItems } from '../data';
import { IconCertificate, IconSchool } from '@tabler/icons-react';

const CertAndEduSection = () => {

  return (
    <>
      <Title order={3}>Certifications & Education</Title>
      <List>
        {certAndEduItems.map((item, idx) => {
          return (
            <List.Item
              key={`${idx}_${item.title.substring(0, Math.min(5, item.title.length))}`}
              icon={
                item.type === 'certification' ? <IconCertificate size="1rem" /> : <IconSchool size="1rem" />
              }
            >
              {item.certificateUrl ? <><Text fw={500} component='a' href={item.certificateUrl} target="_blank">{item.title} ({item.year})</Text><br /></> :
                <Text fw={500}>{item.title} ({item.year})</Text>
              }
              {item.instituteUrl ? <Text c="dimmed" component='a' href={item.instituteUrl} target="_blank">{item.institute}</Text> :
                <Text c="dimmed">{item.institute}</Text>
              }
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export default CertAndEduSection;