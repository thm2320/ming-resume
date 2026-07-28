export interface CertificationOrEducation {
    type: 'certification' | 'education';
    title: string;
    year: number;
    certificateUrl?: string;
    institute: string;
    instituteUrl?: string;
}