import { useState, useCallback } from 'react';
import {
  Timeline,
  Text,
  Badge,
  Center,
  Box,
  Title,
  Flex,
  Container,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';
import { myJobExp } from '../data';
import { JobExprience, WorkDuration } from '../types/jobExperience.type';
import {
  IconCalendarEvent,
  IconWorld,
  IconBriefcase,
  IconBuilding,
  IconTool,
} from '@tabler/icons-react';

const CompanyName = ({
  companyName,
  companyLink,
}: {
  companyName: string;
  companyLink?: string;
}) => {
  if (companyLink) {
    return (
      <Text
        size="sm"
        ml={5}
        mr={10}
        component="a"
        href={companyLink}
        target="_blank"
      >
        {companyName}
      </Text>
    );
  }
  return (
    <Text size="sm" ml={5} mr={10}>
      {companyName}
    </Text>
  );
};

const JobDescriptions = ({ descriptions }: { descriptions: string }) => {
  return <ReactMarkdown children={descriptions} />;
};

const WorkDurationText = ({ workDuration }: { workDuration: WorkDuration }) => {
  const workStart = `${workDuration.fromDate.month ?? ''} ${
    workDuration.fromDate.year
  }`;
  const workEnd = workDuration.toDate
    ? `${workDuration.toDate.month ?? ''} ${workDuration.toDate.year}`
    : 'Current';
  const workPeriod = `${workStart} to ${workEnd}`;
  return (
    <Text size="xs">
      <Center inline>
        <IconBriefcase size="1.125rem" />
        <Box mx={5}>
          <Text size="md">{workDuration.title}</Text>
        </Box>
        <IconCalendarEvent size="1.125rem" />
        <Box mx={5}>{workPeriod}</Box>
        <Badge variant="outline">{workDuration.mode}</Badge>
      </Center>
      {workDuration.skillSet && (
        <>
          <Flex wrap={'wrap'} align={'flex-start'} gap={1}>
            <IconTool size="1.125rem" />
            <Box mx={5}>
              <Text size="sl">Tech Stack:</Text>
            </Box>
            {workDuration.skillSet.map((skill) => (
              <Badge>{skill}</Badge>
            ))}
          </Flex>
        </>
      )}
    </Text>
  );
};

const JobExperienceContainer = ({ data }: { data: JobExprience }) => {
  return (
    <Container fluid>
      <Flex maw="100%" wrap="wrap">
        {data.companyName && (
          <Center inline>
            <IconBuilding size="1.125rem" />
            <CompanyName
              companyName={data.companyName}
              companyLink={data.companyUrl}
            />
          </Center>
        )}
        <Center>
          <IconWorld size="1.125rem" />
          <Text size="sm" ml={5}>
            {data.location}
          </Text>
        </Center>
      </Flex>
      {data.workDuration.map((workDuration) => (
        <>
          <WorkDurationText
            workDuration={workDuration}
            key={`${workDuration.title ?? ''} ${workDuration.fromDate.year}`}
          />
          {workDuration.descriptions && (
            <Box className="job-description" w="90%">
              <JobDescriptions descriptions={workDuration.descriptions} />
            </Box>
          )}
        </>
      ))}
      <Box className="job-description" w="90%">
        <JobDescriptions descriptions={data.descriptions || ''} />
      </Box>
    </Container>
  );
};

const JobSection = () => {
  // const [currentActive, setCurrentActive] = useState(myJobExp.length + 1);
  return (
    <Box>
      <Title order={3}>Work Experience</Title>
      <Timeline
        mt={5}
        // active={myJobExp.length - currentActive}
        reverseActive
        bulletSize={24}
        lineWidth={2}
      >
        {myJobExp.map((item: JobExprience, idx: number) => {
          const { hovered, ref } = useHover();
          // const onHover = useCallback(() => {
          //   setCurrentActive(idx + 1);
          // }, []);
          // const onMouseOut = useCallback(() => {
          //   setCurrentActive(myJobExp.length + 1);
          // }, []);
          return (
            <Timeline.Item
              bullet={hovered}
              // onMouseOver={onHover}
              // onMouseOut={onMouseOut}
              active={hovered}
              ref={ref}
              bg={hovered ? 'blue.0' : undefined}
              key={`${item.id}`}
            >
              <JobExperienceContainer data={item}></JobExperienceContainer>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default JobSection;
