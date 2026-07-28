import { JobExprience, WorkMode } from '../types/jobExperience.type';

export const myJobExp: JobExprience[] = [
  {
    id: 'stanleygibbons',
    companyName: 'Stanley Gibbons Baldwin\'s',
    companyUrl: 'https://www.stanleygibbons.com/',
    workDuration: [
      {
        fromDate: { year: 2023, month: 'September' },
        mode: WorkMode.FullTime,
        title: 'Software engineer',
        // skillSet: [
        //   'AWS',
        //   'SST',
        //   'CDK',
        //   'Pulumi',
        //   'Serverless Framework',
        //   'Typescript',
        //   'Node.js',
        //   'React.js',
        //   'Nextjs',
        //   'Nestjs',
        //   'Docker',
        //   'Postgresql',
        //   'Jest',
        //   'Vitest',
        //   'Cursor',
        //   'Claude',
        // ],
      },
    ],
    location: 'London',
    descriptions: `
*  **Enterprise Data Architecture**: Designed and built a Central Data Service from scratch to aggregate fragmented data across multiple e-commerce websites, creating a single source of truth powering core internal services for Finance (ERP integrations), Marketing analytics, and Auction reporting.
*  **Operational Process Automation**: Replaced legacy manual workflows across Finance, Marketing, and Auction operations with automated data pipelines, drastically improving cross-department reporting accuracy and efficiency.
*  **Accelerated Feature Velocity**: Leveraged AI-assisted development tools (Cursor, Claude) to double daily ticket throughput and execute a complex legacy data migration 75% faster than estimated (2 weeks vs. 2 months).  
*  **End-to-End Product Delivery**: Architected and launched a flagship primary auction revenue platform from concept to production in 2 months using TypeScript, Next.js, and AWS serverless infrastructure (Lambda, SQS, SNS, Step Functions, SST, CDK, Pulumi).
*  **Cloud Architecture & Cost Optimization**: Slashed cloud infrastructure costs by $50,000/month by auditing legacy AWS setups and cutting API infrastructure costs by 90% through an ECS-to-Lambda migration.
*  **Zero-Downtime Data Migration**: Engineered a reusable ETL pipeline in TypeScript, Node.js, and PostgreSQL that migrated 60M+ stamps (10k+ sets across 100+ countries) with 0% downtime for both legacy and new platforms.
*  **Core Data Infrastructure**: Built a high-availability Stamp Data Service powering the core website for 1,000+ active users and digitized manual Finance workflows via a Central Data Service.
*  **API Performance Engineering**: Reduced critical search API response latency from 20 seconds to under 1 second and spearheaded complex third-party API integrations to unblock engineering bottlenecks.
*  **CI/CD & Quality Automation**: Built automated GitHub Actions pipelines with unit and integration testing frameworks, slashing deployment times by an estimated 80% while securing production stability.
*  **Technical Leadership & Mentorship**: Upskilled senior leads and management on event-driven design, caching, and cost-saving refactors while establishing robust code review standards to accelerate onboarding.
 `,
  },
  {
    id: 'self_development',
    workDuration: [
      {
        fromDate: { year: 2022, month: 'July' },
        toDate: { year: 2023, month: 'Aug' },
        mode: WorkMode.FullTime,
        title: 'Relocation & Self Development',
        // skillSet: [
        //   'Typescript',
        //   'Node.js',
        //   'React.js',
        //   'Nextjs',
        //   'Socket.io',
        //   'Jest',
        // ],
      },
    ],
    location: 'London',
    descriptions: `
* **AWS Cloud Certification**: Earned the AWS Certified Developer – Associate certification, validating expertise in cloud-native development, security, and deployment.
* **Cloud & DevOps Upskilling**: Advanced technical proficiency in core AWS services, DevOps principles, and automated infrastructure configuration to align with UK market standards.
* **Full-Stack Projects (TypeScript, Next.js, Node.js, Jest)**: Designed personal architectures with strict test coverage, implementing Socket.io to build low-latency, real-time data communication services.
    `,
  },
  {
    id: 'fml',
    workDuration: [
      {
        fromDate: { year: 2021, month: 'Apr' },
        toDate: { year: 2022, month: 'Jun' },
        mode: WorkMode.FullTime,
        title: 'Software Engineer',
        // skillSet: [
        //   'AWS',
        //   'Serverless Framework',
        //   'Typescript',
        //   'Node.js',
        //   'React.js',
        //   'Single-SPA',
        //   'Postgresql',
        //   'Oracle',
        //   'Dynamodb',
        //   'Jest',
        // ],
      },
    ],
    companyName: 'Fleet Management Limited',
    companyUrl: 'https://www.fleetship.com/',
    location: 'Hong Kong',
    descriptions: `
* **Monolith-to-Microservices Migration:** Architected the zero-downtime migration of a legacy Java monolith to a Node.js/AWS microservice architecture, successfully migrating **10M+ records with zero data loss** while serving **1,000+ active daily users**.
* **Revenue-Generating Integration:** Engineered a high-availability third-party system integration utilizing AWS Lambda and REST APIs, enabling seamless paid subscription models and launching a new enterprise revenue channel.
* **Automated Data Monitoring & Reliability:** Engineered an automated data reconciliation system using AWS CDK and ECS, eliminating daily 1-hour manual data validation tasks and saving the team 5+ hours per week in operational maintenance.
* **Global Team Leadership**: Managed and mentored a diverse, remote global engineering team, establishing rigorous code review standards and architectural guidance to ensure high-quality, collaborative delivery.
`,
  },
  {
    id: 'freelance',
    workDuration: [
      {
        fromDate: { year: 2020, month: 'Jul' },
        toDate: { year: 2021, month: 'Mar' },
        mode: WorkMode.PartTime,
        title: 'Freelance',
        // skillSet: ['React.js', 'Typescript', 'Sass'],
      },
    ],
    location: 'Hong Kong',
    descriptions: `
* **E-Commerce Feature Delivery**: Modernized and optimized the company's retail platform to support high-traffic sales events, deploying time-sensitive feature updates and ensuring UI/UX reliability during peak user volume.
`,
  },
  {
    id: 'mtg',
    workDuration: [
      {
        fromDate: { year: 2019, month: 'Oct' },
        toDate: { year: 2020, month: 'Jul' },
        mode: WorkMode.FullTime,
        title: 'System Analyst',
        // skillSet: [
        //   'ReactJs',
        //   'Java',
        //   'Grails',
        //   'SQL Server',
        //   'Mongodb',
        //   'ExtJs',
        // ],
        descriptions: `
* **Legacy System Modernization**: Led the successful architectural transformation of multiple outdated legacy systems into highly extensible, modular platforms using modern development frameworks and design patterns.
* **Performance Engineering & Load Testing**: Researched, designed, and executed load-testing strategies to proactively identify and resolve critical performance bottlenecks across core company products.
* **User-Centric Feature Delivery**: Translated complex user requirements into high-performance features, directly optimizing user experience and system responsiveness.
* **Cross-Functional & 3rd-Party Integration**: Collaborated closely with internal module owners and external third-party providers to engineer flexible integrations, enabling tailored client solutions.
`,
      },
      {
        fromDate: { year: 2016, month: 'Dec' },
        toDate: { year: 2018, month: 'Oct' },
        mode: WorkMode.FullTime,
        title: 'Senior Software Engineer',
        // skillSet: [
        //   'ReactJs',
        //   'Java',
        //   'Grails',
        //   'SQL Server',
        //   'Mongodb',
        //   'ExtJs',
        // ],
        descriptions: `
* **Reusable Charting Architecture**: Developed a modular, plug-and-play charting web application integrated across multiple systems, driving data visibility that unlocked new enterprise business opportunities.
* **User-Driven Product Evolution**: Designed and delivered core features mapped strictly to user requirements, directly elevating product UX and system utility.
* **Tier-3 Technical Support**: Functioned as the primary escalation point to diagnose and resolve complex technical issues, ensuring high system availability for end-users.
* **Release & Deployment Management**: Partnered in critical production release deployments, managing deployment stability and maintaining smooth software delivery pipelines.
    `,
      },
      {
        fromDate: { year: 2012, month: 'Spe' },
        toDate: { year: 2016, month: 'Nov' },
        mode: WorkMode.FullTime,
        title: 'Software Engineer',
        // skillSet: ['Java', 'Grails', 'SQL Server', 'Mongodb', 'ExtJs'],
        descriptions: `
* **Public Health Government Initiative**: Contributed to the development and maintenance of a mission-critical Hong Kong government project directly impacting public health infrastructure and data reliability.
* **Core Product Co-Ownership**: Partnered closely with project managers and engineering supervisors to drive the continuous development, feature expansion, and maintenance of the company's flagship product.
    `,
      },
    ],
    companyName: 'Mobigator Technology Group',
    companyUrl: 'https://www.mobigator.com/pages/index.asp',
    location: 'Hong Kong',
  },
];
