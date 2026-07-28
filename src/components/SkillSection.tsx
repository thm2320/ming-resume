import {  Title, Table, Text } from "@mantine/core";
import { skills } from "../data";

const SkillSection = () => {
  return (<>
    <Title order={3}>Skills</Title>
    <Table>
      <tbody>{Object.keys(skills).map((key) => {
        return <tr key={key}><td>{key}</td><td>
           <Text variant="outline" mr={3}>{skills[key]}</Text>
        </td></tr>
      })}</tbody>
    </Table>
  </>);
}

export default SkillSection;