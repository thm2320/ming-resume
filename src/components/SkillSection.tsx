import { Title,  Text, Box } from "@mantine/core";
import { skills } from "../data";

const SkillSection = () => {
  return (
    <Box style={{margin:'0 0 16px 0'}}>
    {/* <Box> */}
      <Title order={3}>Skills</Title>
        {Object.keys(skills).map((key) => {
          return (
            <Text variant="outline" mr={3}>
              <b>{key}</b>: {skills[key]}
            </Text>
          );
        })}
    </Box>
  );
};

export default SkillSection;
