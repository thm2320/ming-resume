import { JobExprience, WorkMode } from '../types/jobExperience.type';

export const myJobExp: JobExprience[] = [
  {
    id: 'stanleygibbons',
    companyName: 'Stanley Gibbons Baldwin\'s',
    companyUrl: 'https://www.stanleygibbons.com/',
    workDuration: [
      {
        fromDate: { year: 2023, month: 'Sep' },
        toDate: { year: 2026, month: 'Jun' },
        mode: WorkMode.FullTime,
        title: 'Software Engineer',
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
* **Data Architecture & Large-Scale ETL**: Built a central data service from scratch, with event-driven pipelines (SNS, SQS, Step Functions) that process 100k+ e-commerce records a day. Replaced scattered manual processes for Finance (ERP), Marketing and Auction reporting.
* **Cloud Cost Optimisation**: Volunteered to shut down unused legacy websites on AWS, tracing shared resources through the infrastructure code and logs. Removed them in small batches with no outages, cutting the AWS bill by about $50k/month (~£40k), mostly from idle RDS and Redis.
* **Large-Scale Data Migration**: Migrated 60M+ stamp records to a new platform on my own, in 2 weeks against a 1-month estimate. Built re-runnable scripts in TypeScript, Node.js and PostgreSQL, with zero downtime and no data loss.
* **API Performance & Caching**: Cut search API response time from 20s to under 1s by moving filtering into PostgreSQL and indexing a pre-calculated sort order. Added Redis caching for repeated searches, cutting database traffic by about 80%.
* **Digital Auction Platform**: Helped take the company's auction house online for the first time, launching on time in about 2 months. Built the API and the third-party auction platform integration, using Redis caching to stay fast when that API was unstable.
* **AI-Assisted Delivery**: Adopted AI agents for feature work, first Cursor with Linear tickets, then Orca running several Claude agents in parallel. Approved each plan and reviewed all code, with a second AI review, roughly doubling the story points I completed per sprint.
* **CI/CD Automation**: Cut deployment time from 25 to about 10 minutes with a GitHub Actions pipeline.
* **Technical Leadership & Mentorship**: Set code-review standards and ran cross-team sessions on serverless and event-driven architecture. Helped developers onboard faster and raised code quality across the team.
`,
/* 
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
*/  },
  {
    id: 'self_development',
    workDuration: [
      {
        fromDate: { year: 2022, month: 'Jul' },
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
* **AWS Cloud Certification**: Earned the AWS Certified Developer - Associate certification, validating expertise in cloud-native development, security, and deployment.
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
* **Monolith-to-Microservices Migration:** Architected the zero-downtime migration of a legacy Java monolith to a Node.js/AWS microservice/distributed architecture, successfully migrating 10M+ seafarer records with zero data loss while serving 1,000+ active daily users.
* **Ship Tracking Integration**: Integrated a third-party ship GPS provider using AWS Lambda and REST APIs, so customers could subscribe to location data for their vessels. Launched a new paid service for the company, with subscriptions arranged directly with the sales team.
* **Automated Data Monitoring & Reliability:** Engineered an automated data reconciliation system using AWS CDK and ECS, eliminating daily 1-hour manual data validation tasks and saving the team 5+ hours per week in operational maintenance.
* **Global Team Leadership**: Managed and mentored a diverse, remote global engineering team, establishing rigorous code review standards and architectural guidance to ensure high-quality, collaborative delivery.
`,
  },
  {
    id: 'mtg',
    workDuration: [
      {
        fromDate: { year: 2012, month: 'Sep' },
        toDate: { year: 2020, month: 'Jul' },
        mode: WorkMode.FullTime,
        title: 'Software Engineer | Senior Software Engineer | System Analyst',
        // skillSet: [
        //   'ReactJs',
        //   'Java',
        //   'Grails',
        //   'SQL Server',
        //   'Mongodb',
        //   'ExtJs',
        // ],
        descriptions: `
* **System Analyst (Oct 2018 - Jul 2020)**: Led architectural modernization of legacy enterprise systems into modular platforms (Java, Spring Boot, SQL). Executed load-testing strategies (JMeter) to eliminate critical performance bottlenecks, and engineered 3rd-party integrations to deliver tailored client solutions.
* **Senior Software Engineer (Dec 2015 - Oct 2018)**: Architected a modular, reusable charting web application adopted across multiple internal systems to unlock new business opportunities. Served as Tier-3 technical escalation lead and managed production release deployments.
* **Software Engineer (Sep 2012 - Nov 2015)**: Contributed to a mission-critical Hong Kong Government Public Health initiative powering public health data infrastructure. Co-owned development and feature expansion for the company's flagship product.`,
      },
//       
    ],
    companyName: 'Mobigator Technology Group',
    companyUrl: 'https://www.mobigator.com/pages/index.asp',
    location: 'Hong Kong',
  },
];
