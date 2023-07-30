import { Progress, Text, Title } from '@mantine/core';
import { languages } from '../data';
import { Language, LanguageLevel } from '../types/language.type';

const Language = ({ language }: { language:Language }) => {
    const progress = language.level==LanguageLevel.MotherTongue?100:language.level==LanguageLevel.Fluent?75:50;

    return (
        <>
            <Text>{language.name}</Text>
            <Text size='xs'>{language.level}</Text>
            <Progress value={progress} size="xs" radius="xs" />
        </>
    );
}

const LanguageSection = () => {
    return (
    <>
        <Title order={3}>Languages</Title>
        {languages.map((language)=>{
            return <Language language={language} key={language.name}/>
        })}
    </>
    );
}

export default LanguageSection;