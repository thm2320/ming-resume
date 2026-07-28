import { CertificationOrEducation } from '../types/certificate.type';

export const certAndEduItems: CertificationOrEducation[] = [
  {
    type: 'certification',
    title: 'AWS Certified Developer - Associate',
    year: 2022,
    certificateUrl:
      'https://www.credly.com/badges/843c1f17-140e-48c5-ab58-7bb8b5960d38/linked_in?t=rmll7u',
    institute: 'Amazon Web Services Training and Certification',
    instituteUrl: 'https://aws.amazon.com/certification/',
  },
  {
    type: 'education',
    title: 'Master of Science in Information Technology',
    year: 2012,
    institute: 'The Hong Kong University of Science and Technology',
  },
  {
    type: 'education',
    year: 2011,
    title: 'Bachelor Degree of Computer Engineering',
    institute: 'The Hong Kong University of Science and Technology',
  },
];
