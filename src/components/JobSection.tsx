import { useState, useCallback } from 'react';
import { Timeline, Text, List, Badge, Center, Box, Title } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { myJobExp } from "../data";
import { JobExprience, WorkDuration } from '../types/jobExperience.type';
import { IconCalendarEvent, IconWorld, IconBriefcase, IconBuilding } from '@tabler/icons-react';

const CompanyName = ({companyName, companyLink} :{companyName: string, companyLink?:string}) => {
  if(companyLink){
    return <Text size="sm" ml={5} mr={10} component="a" href={companyLink} target="_blank">{companyName}</Text>;
  }
  return <Text size="sm" ml={5} mr={10}>{companyName}</Text>;
}

const JobDescriptions = ({descriptions} :{descriptions: string[]}) => {
  return (
    <List size="sm" color="dimmed" withPadding>
      {descriptions.map((desc, idx)=>{
        return <List.Item key={`${idx}_${desc.substring(0)}`}>{desc}</List.Item>;
      })}
    </List>);
}

const WorkDurationText = ({workDuration} :{workDuration: WorkDuration}) => {
  return (<Text size="xs">
            <Center inline>
            <IconBriefcase size="1.125rem"/>
            <Box mx={5}><Text size="md">{workDuration.title}</Text></Box>
            <IconCalendarEvent size="1.125rem"/>
            <Box mx={5}>{workDuration.fromDate.month} {workDuration.fromDate.year} to {workDuration.toDate?.month} {workDuration.toDate?.year}</Box>
            <Badge variant="outline">{workDuration.mode}</Badge>
          </Center>
        </Text>);
};

const JobExprience = ({data } :{data: JobExprience}) => {
  return (
        <Box>
          <Center inline><IconBuilding size="1.125rem"/><CompanyName companyName={data.companyName} companyLink={data.companyUrl}/><IconWorld size="1.125rem"/><Text size="sm" ml={5}>{data.location}</Text></Center>
          {data.workDuration.map(workDuration => <WorkDurationText workDuration={workDuration} key={`${workDuration.title} ${workDuration.fromDate.year}`}/>)}
          <Box w='90%'>
            <JobDescriptions descriptions={data.descriptions}/>
          </Box>
          
        </Box>
    );
}

const JobSection = () => {
    const [currentActive, setCurrentActive] = useState(myJobExp.length+1);
    return (
      <Box>
        <Title order={3}>Work Experience</Title>
        <Timeline mt={5} active={myJobExp.length-currentActive} reverseActive bulletSize={24} lineWidth={2}>
          {myJobExp.map((item: JobExprience, idx:number)=>{
            const { hovered, ref } = useHover();
            const onHover = useCallback(()=>{
              setCurrentActive(idx+1);
            },[]);
            const onMouseOut = useCallback(()=>{
              setCurrentActive(myJobExp.length+1);
            },[]);
            return (
              <Timeline.Item bullet={hovered} onMouseOver={onHover} onMouseOut={onMouseOut} active={hovered} ref={ref} bg={hovered?'blue.0':undefined} key={`${item.companyName}`}>
                <JobExprience data={item}></JobExprience>
              </Timeline.Item>
            );
          }
        )}
      </Timeline></Box>
      )
}


export default JobSection;