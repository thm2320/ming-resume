import { List, Title } from '@mantine/core';
import { awards } from '../data';
import { IconSchool, IconTrophy, IconBulb } from '@tabler/icons-react';
import { AwardIcon } from '../types/award.type';

const ICONS = {
  [AwardIcon.school]: IconSchool,
  [AwardIcon.trophy]: IconTrophy,
  [AwardIcon.lightbulb]: IconBulb,
};

const AwardSection = () => {
  return (
    <>
      <Title order={3}>Awards</Title>
      <List>
        {awards.map((award, idx) => {
          const IconToDisplay = ICONS[award.icon];
          return (
            <List.Item
              key={`${idx}_${award.description.substring(
                0,
                Math.min(5, award.description.length)
              )}`}
              icon={<IconToDisplay size="1rem" />}
            >
              {award.description}
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export default AwardSection;
