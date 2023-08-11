import { JobExprience, WorkMode } from './types/jobExperience.type';
import { Language, LanguageLevel } from './types/language.type';
import { Award } from './types/award.type';
import { BasicInfo } from './types/basicInfo.type';
import { Education } from './types/education.type';
import { Certificate } from './types/certificate.type';
import { Skills } from './types/skill.type';

const basicInfo: BasicInfo = {
  name: 'Ming, Tsang',
  email: 'mingtsang232@gmail.com',
  github: 'thm2320',
  linkedin: 'ming-tsang-aa5121126',
  location: 'North Greenwich, London, UK',
  visaInfo: 'Visa sponsorship Is Not Required to work in UK',
};

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
        title: 'Self Development',
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
    descriptions: `* Applied online course to learn devops and AWS cloud service
* Self practising with different kind of AWS cloud services
* Gain certification in 'AWS Certified Developer – Associate'
* Worked on personal projects with stack: Typescript, Node.js, React.js, Nextjs, Socket.io, Jest
* Relocated from Hong Kong to London in April, 2023
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
* Successfully transform one of a big module from a monolithic legacy system to a new microservice module. It improved users’ workflow as it has better UI design and new features. Also, it becomes easily scalable and extensible due to the microservice architecture.
* In charge of important integration between our company’s main system and third party system, which becomes a new business service. It helped the company gain more business chances.
* Design and build a scalable and customizable solution which can automatically monitor data out of sync problems between old and new systems. It helped our maintenance team reduce workload.
* Supervise and manage a remote developers team located globally. Mentor the team and provide code review and suggestions/improvements to ensure the team can work smoothly.
* Main stack used: AWS, Serverless Framework, Typescript, Node.js, React.js, Single-SPA, Postgresql, Oracle, Dynamodb, Jest
    `,
  },
  {
    id: 'freelance',
    workDuration: [
      {
        fromDate: { year: 2020 },
        toDate: { year: 2021 },
        mode: WorkMode.PartTime,
        title: 'Freelance',
        skillSet: ['React.js', 'Typescript', 'Sass'],
      },
    ],
    location: 'Hong Kong',
    descriptions: `
* Helped updating the company retail website for different sales events
* Main stacked used: Reactjs, Typescript and Sass`,
  },
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
* In charge of several modules and sub systems, transforming some out-dated systems into new ones with modern technologies so that they will be easily extensible.
* Help to identify performance issues on company main products by research and apply a load test tool on the company system. 
* Improve user experiences by designing and implementing new features according to user requirements
* Cooperate with other module owners/3rd party for integration. Make the system more flexible and easier to provide different solutions to clients.
* Main stack: ReactJs, Java, Grails, SQL Server, Mongodb, ExtJs
    `,
      },
      {
        fromDate: { year: 2016 },
        toDate: { year: 2019 },
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
        toDate: { year: 2016 },
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
