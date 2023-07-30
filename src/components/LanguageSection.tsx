import { useState } from 'react';
import { Progress, Text, Title } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { languages } from '../data';
import { Language, LanguageLevel } from '../types/language.type';

const Language = ({ language, isPrinting }: { language:Language, isPrinting:boolean }) => {
    const progress = language.level==LanguageLevel.MotherTongue?100:language.level==LanguageLevel.Fluent?75:50;

    return isPrinting?(
        <Text>{language.name}: {language.level}</Text>
    ):(
        <>
            <Text>{language.name}</Text>
            <Text size='xs'>{language.level}</Text>
            <Progress value={progress} size="xs" radius="xs" />
        </>
    );
}

const LanguageSection = () => {
    const [isPrinting, setIsPrinting] = useState(false);
    useWindowEvent('beforeprint', ()=>setIsPrinting(true));
    useWindowEvent('afterprint', ()=>setIsPrinting(false));
    return (
    <>
        <Title order={3}>Languages</Title>
        {languages.map((language)=>{
            return <Language isPrinting={isPrinting} language={language} key={language.name}/>
        })}
    </>
    );
}

export default LanguageSection;