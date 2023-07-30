export interface JobExprience {
    workDuration:WorkDuration[];
    companyName: string;
    companyUrl?:string;
    location: string;
    descriptions: string[];
}

export enum WorkMode {
    PartTime = "Part Time",
    FullTime = "Full Time",
    Contract = "Contract",
    Freelance = "Freelance",
  }

export interface WorkDate{
    month: string;
    year: number;
}

export interface WorkDuration {
    fromDate: WorkDate;
    toDate?: WorkDate;
    mode: WorkMode;
    title: string;
}