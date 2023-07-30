export interface Language {
    name: string;
    level: LanguageLevel;
};

export enum LanguageLevel {
    MotherTongue = "Mother Tongue",
    Fluent = "Fluent",
    Intermediate = "Intermediate"
};