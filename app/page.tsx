import Link from 'next/link';
import VisitorCounter from '@/components/VisitorCounter';
import MatrixRain from '@/components/MatrixRain';
import RotatingSubtitle from '@/components/RotatingSubtitle';

export default function HomePage() {
  return (
    <div className="space-y-20 relative">
      <MatrixRain />
      {/* Hero */}
      <section id="home" className="space-y-6 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <a href="https://github.com/sum35h/sumesh-pradhan-site/actions/workflows/deploy.yml" target="_blank" rel="noreferrer">
            <img src="https://github.com/sum35h/sumesh-pradhan-site/actions/workflows/deploy.yml/badge.svg" alt="Build and Deploy" />
          </a>
          <a href="https://github.com/sum35h/sumesh-pradhan-site/actions/workflows/test.yml" target="_blank" rel="noreferrer">
            <img src="https://github.com/sum35h/sumesh-pradhan-site/actions/workflows/test.yml/badge.svg" alt="Run Tests" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold flex items-center gap-4">
          <span className="text-white">Hello, I&apos;m Sumesh</span>
        </h1>
    
        <div className="text-lg text-white">
          A fellow{' '}
          <RotatingSubtitle />{' '}Engineer
               <span className="cli-cursor ml-2">_</span>
        </div>
        

        <p className="text-lg text-gray-300">
          On a journey of building bridges between code, cloud, and culture.
        </p>
        {/* <p className="text-lg text-green-200 max-w-2xl">
          I enjoy building reliable systems, fast feedback loops, and developer-friendly platforms/tools.
          </p>
        <p className="text-lg text-green-200 max-w-2xl">          

          I help organizations scale while improving developer experience, enabling teams to develop and deploy quickly with confidence.
        </p> */}
        <ul className="flex flex-col items-start gap-2">
          <li className="list-disc list-outside ml-5">
            <Link className="matrix-link text-gray-300" href="#experience">experience</Link>
          </li>
          <li className="list-disc list-outside ml-5">
            <Link className="matrix-link text-gray-300" href="#about">whoami</Link>
          </li>
          <li className="list-disc list-outside ml-5">
            <Link className="matrix-link text-gray-300" href="#contact">contact</Link>
          </li>
        </ul>
        <div className="flex flex-col items-start gap-2 pt-2 text-sm text-gray-300">
          <a className="matrix-link flex items-center gap-2" href="https://linkedin.com/in/sumeshpradhan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.4c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V23h-4V8z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a className="matrix-link flex items-center gap-2" href="https://github.com/sum35h" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M12 .5a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.11-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.09 1.87 2.85 1.33 3.55 1.02.11-.8.43-1.33.78-1.64-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.44.38.83 1.12.83 2.26v3.35c0 .33.22 .7 .83 .58A12 12 0 0 0 12 .5z"/></svg>
            <span>GitHub</span>
          </a>

        </div>
        <div className="pt-2">
          <a href="/resume.pdf" download className="matrix-link text-gray-300">
            Download Resume (PDF)
          </a>
        </div>
        {/* <VisitorCounter /> */}
      </section>

      {/* About */}
      <section id="about" className="space-y-6 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">About</h2>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <img src="/about.png" alt="About section illustrative" className="w-full h-72 md:h-[28rem] object-cover rounded-lg matrix-border" />
          <div className="space-y-3 text-gray-300">
          <p className="text-lg text-gray-300 max-w-2xl">

I’m a DevOps engineer and cloud architect with 6+ years of experience building scalable, secure, and automated infrastructure.

</p> 
<p className="text-lg text-gray-300 max-w-2xl">
I work across cloud architecture, platform engineering, and developer enablement—helping teams ship faster and operate with confidence.
</p>


         
        <p className="text-lg text-gray-300 max-w-2xl">          

{/* I’ve designed and run complex AWS environments, led automation efforts, and set up observability for mission‑critical systems. I care about applying DevOps principles to both technology and team culture—clear communication, shared ownership, and continuous improvement. */}

{/* Lately, I’ve been integrating AI into DevOps workflows—using natural language tools to surface infrastructure insights and improve operational visibility. */}
</p>
 <p className="text-lg text-gray-300 max-w-2xl">          

{/* I’m still learning every day and honing my craft.  */}
My goal is to keep improving the “golden path” for developers: reliable systems, smooth pipelines, and practical tooling that gets out of the way.        


</p>
          {/* <p>
            Outside work, I enjoy reading, learning systems design, and tinkering
            with automation that removes toil.
          </p> */}
          </div>
        </div>
        {/* <div className="mt-6 flex flex-wrap gap-2">
          {['React','Next.js','TypeScript','Tailwind','Node.js','AWS','Lambda','S3','CloudFront','DynamoDB','CI/CD'].map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</span>
          ))}
        </div> */}

        {/* Technical Skills */}
        <div className="mt-10 space-y-4">
          <h3 className="text-2xl font-semibold">Technical Skills</h3>
          <p className="text-green-200">Core competencies and specialized skills in DevOps and cloud infrastructure</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'Cloud Infrastructure', icon: '☁️' },
              { label: 'Linux', icon: '🐧' },
              { label: 'Platform Engineering', icon: '🧱' },
              { label: 'Cloud Governance', icon: '🛡️' },
              { label: 'Cost Optimization', icon: '💹' },
              { label: 'Platform Reliability', icon: '🔧' },
              { label: 'Kubernetes', icon: '📦' },
              { label: 'Containerization', icon: '🗃️' },
              { label: 'Infrastructure as Code (IaC)', icon: '🧩' },
              { label: 'Configuration Management', icon: '⚙️' },
              { label: 'CI/CD', icon: '🚀' },
              { label: 'DevOps Automation', icon: '🤖' },
              { label: 'Workflow Optimization', icon: '🛠️' },
              { label: 'Release Management', icon: '📦' },
              { label: 'Logging and Monitoring', icon: '📈' },
              { label: 'Observability', icon: '🔭' },
              { label: 'Access Management', icon: '🔐' },
            ].map((item) => (
              <div key={item.label} className="matrix-card rounded-md p-3 flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-300 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects removed per request */}

      {/* Experience */}
      <section id="experience" className="space-y-6 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">Professional Experience</h2>
        <p className="text-green-200">My journey through various roles and responsibilities.</p>
        <div className="space-y-4">
          <div className="matrix-card rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-300">Eventbrite, Senior Software Engineer - Platform (DevOps)</h3>
              <span className="text-xs text-green-500/70">Oct 2023 — Present</span>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
            • Built a self-service CLI for infrastructure, reducing infra admin TOIL by 30%.<br />
            • Designed CDK constructs for canary releases serverless services (AWS Lambda/Fargate) with auto-rollback, improving<br />
            recovery time, reliability and manual effort. Uptime of 99.9%<br />
            • Developed monitors for CI/CD pipelines with DORA metrics for deployment visibility and efficiency insights.<br />
            • Optimized AWS infrastructure reducing monthly cloud costs by about 10%.<br />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['AWS EKS','Kubernetes', 'Terraform', 'AWS CDK Constructs','CircleCI','GithubActions', 'AWS Codebuild/Codepipeline', 'AWS Lambda', 'AWS Fargate', 'AWS ECR','AWS Coudwatch','AWS Eventbridge', 'AWS SNS', 'Hashicorp Vault','Python', 'Bash', 'TypeScript','Golang'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul>
          </div>
          <div className="matrix-card rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-300">Appsmith, DevOps Engineer</h3>
              <span className="text-xs text-green-500/70">Feb 2022 — Oct 2023</span>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              • Built a backup and restore CLI utility for Appsmith, streamlining data management.<br />
              • Integrated health checks in NGINX with a loading screen, cutting onboarding queries by 50%.<br />
              • Created a pipeline to publish Appsmith machine images for AWS and Azure VMs.<br />
              • Designed and documented self-hosting Appsmith serverless(ECS Fargate, Azure Container Instance).<br />
              • Integrated Grafana Stack Monitoring (Prometheus, Tempo, Loki) for metrics, traces, and logs.<br />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['AWS EKS','Kubernetes','Docker','Helm','AWS ECS', 'MongoDB','Terraform','Prometheus','Grafana','GithubActions','Python','TypeScript','Bash','Technical Writing', 'Techincal Support L2'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul>
          </div>
          <div className="matrix-card rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-300">Voiro, Software Engineer - Backend</h3>
              <span className="text-xs text-green-500/70">Apr 2021 – Feb 2022</span>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              • Designed, developed, and modernized backend services with RESTful APIs.<br />
              • Integrated notifications using Firebase FCM for real-time updates.<br />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['AWS EC2','Docker','Postgres','Python','Django REST Framework', 'Redis','Terraform','Firebase FCM'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul>
          </div>
           <div className="matrix-card rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-300">Sonicwall, Software Dev Associate Engineer</h3>
              <span className="text-xs text-green-500/70">Mar 2019 – Apr 2021</span>
            </div>
            <p className="mt-2 text-green-200 text-sm">
              • Designed, developed, and modernized backend services with RESTful APIs.<br />
              • Developed various SonicTools, internal dashboards, and automation scripts to improve team productivity.<br />
              • Managed the infrastructure and deployment of serevised in the Dev and QA servers<br />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['AWS EC2','Docker','Python','Flask', 'Perl','Bash' ].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>
      
      {/* Credentials */}
      <section id="credentials" className="space-y-6 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">Credentials</h2>
        <p className="text-gray-300">Selected accreditations and certifications with dates and source links.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Bachelor of Technology: Computer Science & Engineering', source: 'Visvesvaraya Technological University', date: '2018', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
            // { name: 'AWS Certified DevOps Engineer – Professional', source: 'AWS', date: '2025', url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' },
            { name: 'CKAS: Kubernetes Certified Application Developer', source: 'Linux Foundation (CNCF)', date: '2024', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
            { name: 'AWS Certified Cloud Practitioner', source: 'AWS', date: '2023', url: 'https://www.hashicorp.com/certification/terraform-associate' },

          ].map((c) => (
            <div key={c.name} className="matrix-card rounded-lg p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span>
                <a href={c.url} target="_blank" rel="noreferrer" className="matrix-link text-white text-base font-semibold">
                  {c.name}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-2 py-0.5 rounded matrix-border text-gray-300">{c.source}</span>
                <span className="text-gray-400">{c.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* What I Do */}
      <section id="services" className="space-y-6 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">What I Do</h2>
        <p className="text-gray-300">Turning complexity into clear, working systems.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="matrix-card rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white">Cloud Engineering</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Design and implement secure, scalable cloud solutions with an eye for cost, reliability, and operability.
            </p>
            {/* <ul className="mt-3 flex flex-wrap gap-2">
              {['AWS','IaC','Security','Cost','Terraform','AWS CDK Constructs', 'Ansible', 'Bash Scripting', 'Python','TypeScript','Goland','Kubernetes'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul> */}
          </div>
          <div className="matrix-card rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white">DevOps & Automation</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Design and automate CI/CD pipelines with quality gates, artifact signing, and zero-downtime deploys.
            </p>
            {/* <ul className="mt-3 flex flex-wrap gap-2">
              {['GithubActions','Next.js','Perf','Tooling'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul> */}
          </div>

          <div className="matrix-card rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white">Monitoring & Observability</h3>
            <p className="mt-2 text-gray-300 text-sm">
             Designing and implementing comprehensive monitoring and observability solutions that provide deep insights into system performance and health.
            </p>
            {/* <ul className="mt-3 flex flex-wrap gap-2">
              {['GithubActions','Next.js','Perf','Tooling'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul> */}
          </div>

              <div className="matrix-card rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white">Software Development</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Building maintainable, performant applications with a focus on user experience and code quality.
            </p>
            {/* <ul className="mt-3 flex flex-wrap gap-2">
              {['GithubActions','Next.js','Perf','Tooling'].map(t => (
                <li key={t} className="text-xs px-2 py-1 rounded matrix-border text-green-300">{t}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </section>

      

      {/* Contact */}
      <section id="contact" className="space-y-4 min-h-screen scroll-mt-24 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
        <p className="text-gray-300">
          Feel free to reach out by email or connect via LinkedIn.
        </p>
        <div className="flex gap-4">
          <a className="matrix-link" href="mailto:sumesh6361@gmail.com">Email</a>
          <a className="matrix-link" href="https://linkedin.com/in/sumeshpradhan" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
