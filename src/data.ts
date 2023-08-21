import { JobExprience, WorkMode } from './types/jobExperience.type';
import { Language, LanguageLevel } from './types/language.type';
import { Award } from './types/award.type';
import { BasicInfo } from './types/basicInfo.type';
import { Education } from './types/education.type';
import { Certificate } from './types/certificate.type';
import { Skills } from './types/skill.type';

const basicInfo: BasicInfo = {
  name: 'Ho Ming, Tsang',
  email: 'mingtsang232@gmail.com',
  github: 'https://github.com/thm2320',
  linkedin: 'https://www.linkedin.com/in/ming-tsang-aa5121126/',
  location: 'North Greenwich, London, UK',
  visaInfo: 'Have a BNO Visa and eligible to work in UK',
};

export const introInfo = `
I was born in Hong Kong and worked as a Software Engineer there for 9 years.  
I have a BNO Visa which allows me to live and work in UK.  
Recently relocated to London to live with my wife who is British citizen.  
Since I planned to settle down in UK, I will extend the Visa by myself with/without sponsorship.
`;

const education: Education[] = [
  {
    title: 'Master of Science in Information Technology',
    institute: 'The Hong Kong University of Science and Technology',
  },
  {
    title: 'Bachelor Degree of Computer Engineering',
    institute: 'The Hong Kong University of Science and Technology',
  },
];

const skills: Skills = {
  Languages: ['Typescript', ' Javascript', ' Java', ' Groovy'],
  Frontend: [
    'React.js',
    'Single-Spa',
    'Redux',
    'Nextjs',
    'HTML5',
    'CSS',
    'Bootstrap',
    'Material-UI',
    'Graphql',
  ],
  Backend: [
    'Nodejs',
    'Expressjs',
    'Socket.io',
    'Nestjs',
    'Spring MVC',
    'Spring Boot',
    'Grails',
    'Graphql',
  ],
  Database: [
    'Postgresql',
    'Dynamodb',
    'Mongodb',
    'SQL Server',
    'Mysql',
    'Oracle',
  ],
  Testing: ['Jest', 'Junit', 'Supertest', 'Mocha', 'Chai'],
  Containerization: ['Docker', 'Kubernetes'],
  Cloud: [
    'AWS',
    'Vercel',
    'Render',
    'Heroku',
    'Firebase',
    'Digital Ocean ',
    'Serverless',
  ],
  Others: [
    'Micro-services',
    'Micro-frontend',
    'CI/CD',
    'Github Action',
    'NATS-streaming',
    'Redis',
    'Postman',
    'Jmeter',
  ],
};

const certification: Certificate[] = [
  {
    title: 'AWS Cerfied Developer - Associate',
    year: 2022,
    certificateUrl:
      'https://www.credly.com/badges/843c1f17-140e-48c5-ab58-7bb8b5960d38/linked_in?t=rmll7u',
    institute: 'Amazon Web Services Training and Certification',
    instituteUrl: 'https://aws.amazon.com/certification/',
  },
];

const awards: Award[] = [];

const languages: Language[] = [
  {
    name: 'Cantonese',
    level: LanguageLevel.MotherTongue,
  },
  {
    name: 'English',
    level: LanguageLevel.Fluent,
  },
  {
    name: 'Mandarin',
    level: LanguageLevel.Basic,
  },
];

const myJobExp: JobExprience[] = [
  {
    id: 'self_development',
    workDuration: [
      {
        fromDate: { year: 2023 },
        mode: WorkMode.FullTime,
        title: 'Relocation & Self Development',
        skillSet: [
          'Typescript',
          'Node.js',
          'React.js',
          'Nextjs',
          'Socket.io',
          'Jest',
        ],
      },
    ],
    location: 'London',
    descriptions: `
* Relocated from Hong Kong to London for career growth opportunities
* Completed an online devops and AWS cloud service course to expand skill set
* Actively engaged in self-practice with various AWS cloud services to enhance proficiency
* Successfully obtained certification as 'AWS Certified Developer - Associate'
* Independently worked on personal projects utilizing a diverse tech stack including Typescript, Node.js, React.js, Nextjs, Socket.io, and Jest.
    `,
  },
  {
    id: 'fml',
    workDuration: [
      {
        fromDate: { year: 2021 },
        toDate: { year: 2022 },
        mode: WorkMode.FullTime,
        title: 'Software Engineer',
        skillSet: [
          'AWS',
          'Serverless Framework',
          'Typescript',
          'Node.js',
          'React.js',
          'Single-SPA',
          'Postgresql',
          'Oracle',
          'Dynamodb',
          'Jest',
        ],
      },
    ],
    companyName: 'Fleet Management Limited',
    companyUrl: 'https://www.fleetship.com/',
    location: 'Hong Kong',
    descriptions: `
* Successfully modernized a major module from a monolithic legacy system to a scalable and extensible microservice architecture. This transformation improved workflow, user experience, and added new features.
* Led integration efforts between our company's main system and a third party system, creating a valuable business service that increased opportunities for the company.
* Developed a automated monitoring solution to identify and resolve data synchronization issues between old and new systems, reducing maintenance workload for the team.
* Managed and mentored a diverse global remote development team, providing code reviews and guidance to ensure smooth collaboration and high-quality work.
`,
  },
  //   {
  //     id: 'freelance',
  //     workDuration: [
  //       {
  //         fromDate: { year: 2020 },
  //         toDate: { year: 2021 },
  //         mode: WorkMode.PartTime,
  //         title: 'Freelance',
  //         skillSet: ['React.js', 'Typescript', 'Sass'],
  //       },
  //     ],
  //     location: 'Hong Kong',
  //     descriptions: `
  // * Helped updating the company retail website for different sales events
  // * Main stacked used: Reactjs, Typescript and Sass`,
  //   },
  {
    id: 'mtg',
    workDuration: [
      {
        fromDate: { year: 2019 },
        toDate: { year: 2020 },
        mode: WorkMode.FullTime,
        title: 'System Analyst',
        skillSet: [
          'ReactJs',
          'Java',
          'Grails',
          'SQL Server',
          'Mongodb',
          'ExtJs',
        ],
        descriptions: `
* Led the successful transformation of multiple outdated systems into modern, easily extensible ones through the application of cutting-edge technologies.
* Identified and resolved performance issues on key company products by conducting thorough research and implementing load testing tools.
* Enhanced user experiences by designing and implementing innovative features based on extensive user requirements analysis.
* Collaborated with module owners and third-party providers to ensure seamless integration, resulting in a more flexible system capable of delivering tailored solutions to clients.
`,
      },
      {
        fromDate: { year: 2016 },
        toDate: { year: 2018 },
        mode: WorkMode.FullTime,
        title: 'Senior Software Engineer',
        skillSet: [
          'ReactJs',
          'Java',
          'Grails',
          'SQL Server',
          'Mongodb',
          'ExtJs',
        ],
        descriptions: `
* Develop a reusable charting web app that can plug into different systems. The charting system helps our company to gain more business opportunities.
* Improve user experiences by designing and implementing new features according to user requirements.
* Help users solving technical problems
* Participate in important release deployment to ensure the process is smooth.
* Main stack: ReactJs, Java, Grails, SQL Server, Mongodb, ExtJs  
    `,
      },
      {
        fromDate: { year: 2012 },
        toDate: { year: 2015 },
        mode: WorkMode.FullTime,
        title: 'Software Engineer',
        skillSet: ['Java', 'Grails', 'SQL Server', 'Mongodb', 'ExtJs'],
        descriptions: `
* Worked on Hong Kong Government Project which is important to public health
* Helped Project manager and supervisors to maintain and develop company main product
* Main stack: Java, Grails, SQL Server, Mongodb, ExtJs
    `,
      },
    ],
    companyName: 'Mobigator Technology Group',
    companyUrl: 'https://www.mobigator.com/pages/index.asp',
    location: 'Hong Kong',
  },
];

export {
  basicInfo,
  education,
  skills,
  certification,
  awards,
  languages,
  myJobExp,
};
