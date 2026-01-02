import type { Service, BlogPost, Category, Lead } from './types';

export const services: Service[] = [
  {
    title: 'Architecture',
    description: 'Secure implementation and robust cloud design to build a resilient foundation for your digital assets.',
    longDescription: 'Our architecture services focus on designing and implementing secure-by-design systems. We work with you to build a resilient foundation, whether you are migrating to the cloud or building new applications. We ensure your infrastructure is scalable, compliant, and fortified against modern threats.'
  },
  {
    title: 'Offensive',
    description: 'Real-world attack simulations and penetration testing to uncover vulnerabilities before they can be exploited.',
    longDescription: 'Our offensive security team thinks like an attacker. Through penetration testing, red teaming, and adversary simulation, we identify and help you remediate vulnerabilities in your applications, networks, and cloud environments, providing a clear picture of your real-world risk.'
  },
  {
    title: 'DevSecOps',
    description: 'Integrating automated security controls and practices directly into your development pipelines.',
    longDescription: 'We help you shift security left by embedding automated security testing and best practices into your CI/CD pipelines. Our DevSecOps approach ensures that security is a continuous part of your development lifecycle, not an afterthought, enabling you to build and deploy software faster and more securely.'
  },
  {
    title: 'Awareness',
    description: 'Human-centric security training and phishing simulations to empower your team as the first line of defense.',
    longDescription: 'The human element is often the weakest link in security. Our awareness programs go beyond generic training. We provide engaging, human-centric security education and realistic phishing simulations to empower your employees, turning your team into a proactive first line of defense.'
  },
  {
    title: 'Incident Response',
    description: 'Rapid response and remediation services to contain threats, minimize damage, and restore operations after a security breach.',
  },
  {
    title: 'Digital Forensics',
    description: 'Investigating security incidents to understand the scope of a breach and gather evidence for legal action.',
  },
];

export const categories: Category[] = [
  { name: 'Threat Intelligence', slug: 'threat-intelligence' },
  { name: 'Network Security', slug: 'network-security' },
  { name: 'Compliance', slug: 'compliance' },
  { name: 'Zero-Day Exploits', slug: 'zero-day-exploits' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-rise-of-ai-in-phishing-attacks',
    title: 'The Rise of AI in Phishing Attacks',
    excerpt: 'Explore how attackers are leveraging AI to create more sophisticated phishing campaigns and what you can do to protect your organization.',
    content: `<p>The landscape of cybersecurity is perpetually evolving, and one of the most significant recent shifts has been the integration of Artificial Intelligence (AI) into phishing attacks. Traditionally, phishing emails were often identifiable by grammatical errors, generic greetings, and a sense of urgency that felt slightly off. However, with the advent of advanced AI language models, attackers are now capable of crafting highly personalized, contextually aware, and grammatically perfect emails that can deceive even the most cautious users.</p>
             <h3>How AI is Changing the Game</h3>
             <p>AI-powered tools can analyze vast amounts of public data from social media and corporate websites to create detailed profiles of potential targets. This allows them to tailor phishing emails to specific individuals, referencing their job roles, recent projects, or even personal interests. The result is a hyper-realistic message that bypasses conventional suspicion.</p>
             <p>Furthermore, AI can automate the entire campaign process, from target selection to email distribution and follow-up, enabling attackers to scale their operations with unprecedented efficiency. This means more attacks, with a higher success rate, are reaching inboxes every day.</p>
             <h3>Defensive Strategies</h3>
             <p>Countering AI-driven threats requires an equally sophisticated, multi-layered defense strategy. This includes:</p>
             <ul>
                <li><strong>Advanced Email Filtering:</strong> Implementing email security solutions that use their own AI and machine learning algorithms to detect anomalies in communication patterns, sender reputation, and email content.</li>
                <li><strong>Employee Training:</strong> Continuous security awareness training is more critical than ever. Employees must be educated on the nuances of these new-generation phishing attacks.</li>
                <li><strong>Multi-Factor Authentication (MFA):</strong> Enforcing MFA across all critical systems ensures that even if credentials are stolen, attackers cannot easily gain access.</li>
             </ul>
             <p>As we move forward, the cat-and-mouse game between attackers and defenders will increasingly be fought on the battleground of artificial intelligence. Staying ahead requires investment in new technologies and a commitment to a culture of security.</p>`,
    category: 'Threat Intelligence',
    categorySlug: 'threat-intelligence',
    date: '2024-05-15',
    image: 'blog-post-1',
    author: {
      name: 'Jane Doe',
      avatar: 'https://picsum.photos/seed/author1/100/100'
    }
  },
  {
    slug: 'securing-your-hybrid-cloud-environment',
    title: 'Securing Your Hybrid Cloud Environment',
    excerpt: 'Navigating the complexities of hybrid cloud security is a major challenge. Here are key strategies for a robust defense.',
    content: `<p>The adoption of hybrid cloud models—blending on-premises infrastructure with public and private cloud services—offers businesses unparalleled flexibility and scalability. However, this complex, distributed environment also introduces significant security challenges. Protecting data and applications across disparate systems requires a unified and strategic approach.</p>
             <h3>Key Challenges in Hybrid Cloud Security</h3>
             <ul>
                <li><strong>Visibility:</strong> Gaining a comprehensive view of security posture across all environments is difficult.</li>
                <li><strong>Inconsistent Policies:</strong> Applying consistent security policies across different cloud providers and on-premise data centers is a major hurdle.</li>
                <li><strong>Compliance:</strong> Ensuring compliance with regulations like GDPR or HIPAA when data can reside in multiple locations can be complex.</li>
             </ul>
             <h3>Strategies for a Secure Hybrid Cloud</h3>
             <p>A successful hybrid cloud security strategy is built on the principles of Zero Trust and defense-in-depth.</p>
             <ol>
                <li><strong>Unified Security Management:</strong> Use a Cloud Security Posture Management (CSPM) tool to gain centralized visibility and manage policies across all your environments.</li>
                <li><strong>Identity and Access Management (IAM):</strong> Implement a robust IAM solution with strong authentication and least-privilege access controls.</li>
                <li><strong>Data Encryption:</strong> Encrypt data both in transit and at rest, regardless of where it is located.</li>
             </ol>
             <p>By treating the entire hybrid environment as a single, cohesive entity from a security perspective, organizations can harness the power of the cloud without exposing themselves to unnecessary risk.</p>`,
    category: 'Network Security',
    categorySlug: 'network-security',
    date: '2024-05-10',
    image: 'blog-post-2',
    author: {
      name: 'John Smith',
      avatar: 'https://picsum.photos/seed/author2/100/100'
    }
  },
  {
    slug: 'navigating-the-gdpr-compliance-maze',
    title: 'Navigating the GDPR Compliance Maze',
    excerpt: 'A practical guide to understanding and implementing the core principles of the General Data Protection Regulation.',
    content: `<p>The General Data Protection Regulation (GDPR) has fundamentally changed how organizations handle personal data. Achieving and maintaining compliance is not just a legal obligation but also a critical component of building trust with customers. This guide breaks down the core principles you need to know.</p>
              <h3>Core Principles of GDPR</h3>
              <p>GDPR is built around seven key principles:</p>
              <ul>
                <li><strong>Lawfulness, fairness and transparency:</strong> Processing must be lawful, fair, and transparent to the data subject.</li>
                <li><strong>Purpose limitation:</strong> You must process data for the legitimate purposes specified explicitly to the data subject when you collected it.</li>
                <li><strong>Data minimization:</strong> You should collect and process only as much data as absolutely necessary for the purposes specified.</li>
                <li><strong>Accuracy:</strong> Personal data must be kept accurate and up to date.</li>
                <li><strong>Storage limitation:</strong> You can only store personally identifying data for as long as necessary.</li>
                <li><strong>Integrity and confidentiality:</strong> Processing must be done in a way that ensures appropriate security of the personal data.</li>
                <li><strong>Accountability:</strong> The data controller is responsible for being able to demonstrate GDPR compliance with all of these principles.</li>
              </ul>
              <p>Adhering to these principles not only helps avoid hefty fines but also strengthens your organization's reputation as a trustworthy custodian of personal information.</p>`,
    category: 'Compliance',
    categorySlug: 'compliance',
    date: '2024-05-01',
    image: 'blog-post-3',
    author: {
      name: 'Alice Johnson',
      avatar: 'https://picsum.photos/seed/author3/100/100'
    }
  },
  {
    slug: 'the-anatomy-of-a-zero-day-exploit',
    title: 'The Anatomy of a Zero-Day Exploit',
    excerpt: 'What is a zero-day exploit, and why is it so dangerous? We break down the lifecycle of this critical threat.',
    content: `<p>A "zero-day" exploit is a cyber attack that occurs on the same day a weakness is discovered in software. At that point, it's exploited before a fix becomes available from its creator. This is what makes zero-day attacks so dangerous: there is no defense against them, as even the software vendor is unaware of the vulnerability.</p>
             <h3>The Lifecycle of a Zero-Day</h3>
             <ol>
              <li><strong>Vulnerability Discovery:</strong> A vulnerability is found by an individual or group, either a security researcher or a malicious actor.</li>
              <li><strong>Exploit Creation:</strong> An exploit (a piece of code that takes advantage of the vulnerability) is developed.</li>
              <li><strong>Exploitation:</strong> The attacker uses the exploit to compromise a system. This could be to steal data, install malware, or create a backdoor for future access.</li>
              <li><strong>Detection:</strong> Eventually, the unusual activity is detected by security researchers or the vendor themselves.</li>
              <li><strong>Disclosure and Patching:</strong> The vendor works to create a patch. Once the patch is released, the vulnerability is no longer a "zero-day".</li>
             </ol>
             <p>Protecting against zero-day attacks requires a proactive, behavior-based security approach rather than a traditional signature-based one. This includes intrusion detection systems, behavior analytics, and robust network segmentation to limit the potential damage from an unknown threat.</p>`,
    category: 'Zero-Day Exploits',
    categorySlug: 'zero-day-exploits',
    date: '2024-04-25',
    image: 'blog-post-4',
    author: {
      name: 'Bob Williams',
      avatar: 'https://picsum.photos/seed/author4/100/100'
    }
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const leads: Lead[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'Doe Enterprises',
      message: 'Need help with cybersecurity for my small business.',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      company: 'Smith Co.',
      message: 'Interested in learning more about your threat detection services.',
    },
    {
        name: 'Peter Jones',
        email: 'peter.jones@startup.com',
        company: 'Innovative Startups',
        message: 'We are growing fast and need to ensure our cloud infrastructure is secure. Looking for a consultation on cloud security best practices.',
    }
]
