import {
  Beaker,
  Bolt,
  Briefcase,
  ComputerDesktop,
  CurrencyDollar,
  ExclamationTriangle,
  FaceSmile,
  Photo,
  ShieldCheck,
  ShieldExclamation,
  UserGroup,
  Users,
} from '@/components/icons';
import { Sparkles } from '@/components/icons/sparkles';

export type AccentColor = 'secondary' | 'accent';

export interface CrossItem {
  label: string;
  text: string;
}

export interface FocusBlock {
  title: string;
  items: string[];
}

export interface Theme {
  slug: string;
  num: number;
  page_title: string;
  subtitle: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGElement>>;
  accent_color: AccentColor;
  overview_paras: string[];
  why_items: string[];
  focus_blocks: FocusBlock[];
  questions: string[];
  contributions: string[];
  strategic_text: string;
  cross_items: CrossItem[];
}

export const themes: Theme[] = [
  {
    slug: 'primary-health-care-integration',
    num: 1,
    page_title:
      'Integrating Mental Health into Primary Health Care and Community Systems',
    subtitle:
      'Exploring the strategic shift from centralized, specialist-driven models toward decentralized, community-anchored systems where mental health is embedded into routine healthcare and everyday community life.',
    label: 'Community Systems & PHC',
    icon: ShieldCheck,
    accent_color: 'secondary',
    overview_paras: [
      'Historically, mental health services have been centralized within tertiary institutions, leaving the majority of populations — especially those in rural and peri-urban areas — without access to care. This has contributed to a persistent treatment gap, with large proportions of individuals living with mental health conditions undiagnosed and unsupported.',
      'This theme explores the deliberate shift from centralized, specialist-driven models toward decentralized, community-anchored systems in which mental health is integrated into routine healthcare and everyday community structures.',
      'Integration ensures that mental health is treated not as a separate domain, but as an essential core component of overall health — addressed alongside maternal health, chronic disease management, and primary care consultations.',
    ],
    why_items: [
      'Reduces the treatment gap by bringing services closer to where people live, dramatically increasing access to care.',
      'Normalizes mental health care — when it is part of routine services, stigma decreases and help-seeking improves.',
      'Promotes early identification and prevention: PHC systems are ideal entry points for detecting distress before escalation.',
      'Strengthens continuity of care by allowing seamless referral and follow-up across levels of care.',
      'Enhances sustainability by embedding services within existing systems beyond donor-funded project cycles.',
    ],
    focus_blocks: [
      {
        title: 'Policy and Systems Integration',
        items: [
          'Aligning mental health with national PHC frameworks and UHC agendas',
          'Decentralization strategies that empower district health systems',
          'Integrating mental health into district health plans and budgets',
          'Cross-sectoral collaboration across health, education, and social development',
        ],
      },
      {
        title: 'Service Delivery at Primary Care Level',
        items: [
          'Routine mental health screening within PHC settings',
          'Integration of psychosocial care into maternal, child, and chronic disease services',
          'Use of WHO mhGAP guidelines and standardized protocols',
          'Strengthening Health Center capacity to deliver mental health care',
        ],
      },
      {
        title: 'Community-Based Mental Health Systems',
        items: [
          'Role of Village Health Teams, community volunteers, and lay counselors',
          'Family and caregiver involvement in care and recovery',
          'Community outreach, psychoeducation, and stigma reduction',
          'Integration into local governance and community development',
        ],
      },
      {
        title: 'Task-Sharing and Workforce Expansion',
        items: [
          'Training non-specialist providers to deliver evidence-based interventions',
          'Scaling models such as IPT-G, PM+, and Foundational Helping Skills (FHS)',
          'Supervision systems ensuring quality and accountability',
          'Addressing workforce shortages through scalable human resource models',
        ],
      },
      {
        title: 'Referral Pathways and Continuity of Care',
        items: [
          'Strengthening linkages between community, PHC, and tertiary care',
          'Building functional referral and feedback loops',
          'Integration with child protection and social services',
          'Managing complex cases within decentralized systems',
        ],
      },
      {
        title: 'Cultural and Contextual Integration',
        items: [
          'Incorporating local beliefs and community structures into care models',
          'Engaging traditional healers, faith leaders, and cultural institutions',
          'Designing culturally responsive interventions',
          'Leveraging community strengths such as storytelling and social cohesion',
        ],
      },
      {
        title: 'Digital and Data Integration',
        items: [
          'Digital tools to support screening, supervision, and follow-up',
          'Integration into national health information systems (HMIS/DHIS2)',
          'Real-time data for decision-making and quality improvement',
          'Mobile and remote support systems for underserved populations',
        ],
      },
    ],
    questions: [
      'How can countries effectively decentralize mental health services without compromising quality?',
      'What models best support integration of mental health into PHC in resource-limited settings?',
      'How can community systems be strengthened to complement formal healthcare structures?',
      'What are the barriers to integration, and how can they be overcome?',
      'How can integration reduce stigma and improve help-seeking behaviors?',
      'What role can digital innovation play in supporting integrated care systems?',
    ],
    contributions: [
      'Empirical research on integrated care models',
      'Implementation studies from district and community settings',
      'Policy analyses and system-level evaluations',
      'Service delivery and workforce development innovations',
      'Lessons from integration efforts in Africa and globally',
    ],
    strategic_text:
      'This theme sits at the heart of the conference. It represents a paradigm shift — from tertiary institutions to community systems, from specialists to shared responsibility, from treatment to prevention and promotion, and from fragmentation to integrated, people-centered care.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Ensuring that integration models serve all populations, especially the most marginalized',
      },
      {
        label: 'Quality',
        text: 'Maintaining care standards while expanding reach into community settings',
      },
      {
        label: 'Sustainability',
        text: 'Embedding services within existing systems for continuity beyond donor funding',
      },
      {
        label: 'Data',
        text: 'Using digital and information systems to drive quality improvement',
      },
      {
        label: 'Cultural Fit',
        text: 'Designing services that resonate with local beliefs and community structures',
      },
    ],
  },
  {
    slug: 'digital-mental-health-ai-task-sharing',
    num: 2,
    page_title:
      'Innovations in Digital Mental Health, AI, and Task-Sharing Models',
    subtitle:
      'Examining how rapid advances in digital technology and scalable service delivery models are transforming access to mental health care — particularly in low-resource and underserved settings across Africa.',
    label: 'Digital Innovation & Technology',
    icon: ComputerDesktop,
    accent_color: 'secondary',
    overview_paras: [
      'Across Africa and globally, the combination of digital tools and task-sharing approaches is redefining what is possible — expanding reach, reducing costs, improving supervision, and enabling timely, data-informed care.',
      'At the same time, these innovations raise critical questions about quality, ethics, equity, and the role of human connection in care. This theme invites rigorous exploration of how technology and non-specialist delivery systems can work together to create effective, safe, and culturally grounded mental health services.',
      'The future of mental health care will not be purely clinical nor purely technological — but a deliberate integration of both, grounded in human-centered design and community realities.',
    ],
    why_items: [
      'Expands access: digital platforms and task-sharing enable services to reach populations that traditional systems cannot.',
      'Addresses workforce shortages: non-specialist providers supported by digital tools can deliver evidence-based care.',
      'Improves efficiency and supervision through remote systems enabling continuous oversight and quality assurance.',
      'Supports early identification through digital screening and monitoring for faster detection of distress and risk.',
      'Enables blended care models (digital + human) as new pathways for intervention at scale.',
      'Raises essential ethical considerations around data privacy, algorithm bias, and the limits of automation.',
    ],
    focus_blocks: [
      {
        title: 'Artificial Intelligence in Mental Health',
        items: [
          'AI-powered chatbots and conversational agents for screening and low-intensity support',
          'Early detection through natural language processing and behavioral data',
          'Risks: misdiagnosis, over-reliance, and lack of human judgment',
          'Ethical considerations: privacy, consent, bias, accountability, and regulation',
          'AI as augmentation — not replacement — of human care',
        ],
      },
      {
        title: 'Tele-Mental Health and Remote Supervision',
        items: [
          'Therapy and psychosocial support via phone, video, and messaging platforms',
          'Expanding access in rural and hard-to-reach areas',
          'Remote supervision of lay providers and community health workers',
          'Hybrid models combining in-person and remote care',
        ],
      },
      {
        title: 'Digital Screening, Monitoring, and Data',
        items: [
          'Mobile-based screening tools for depression, anxiety, trauma, and suicide risk',
          'Integration of mental health data into electronic medical records (EMRs)',
          'Integration with national health information systems (DHIS2)',
          'Real-time monitoring of symptoms and treatment outcomes',
        ],
      },
      {
        title: 'Task-Sharing and Lay-Provider Models',
        items: [
          'Scaling evidence-based interventions through non-specialists (IPT-G, PM+, FHS)',
          'Training, certification, and supervision systems for lay counselors',
          'Role of peer supporters and community volunteers',
          'Ensuring fidelity while adapting to local contexts',
        ],
      },
      {
        title: 'Human - Technology Interaction',
        items: [
          'Designing digital tools that enhance — not replace — human connection',
          'Balancing automation with empathy and relational care',
          'User-centered design for low-literacy and diverse populations',
          'Cultural adaptation of digital interventions',
        ],
      },
    ],
    questions: [
      'How can AI be used responsibly in mental health care without compromising safety and quality?',
      'What models best combine digital tools with human-delivered care?',
      'How can task-sharing be optimized to maintain fidelity while scaling interventions?',
      'What are the ethical boundaries of digital mental health in low-resource settings?',
      'How can digital systems be designed to serve marginalized and low-literacy populations?',
      'What is the future balance between human care and technological support?',
    ],
    contributions: [
      'Empirical studies on digital mental health interventions',
      'Evaluations of task-sharing models at scale',
      'Ethical analyses of AI and digital tools in mental health',
      'Implementation research on hybrid care models',
      'Case studies from Africa and other LMICs',
      'Innovations in supervision, training, and digital integration',
    ],
    strategic_text:
      'This theme positions the conference at the intersection of innovation, scalability, and ethics. It acknowledges that the future of mental health care will be a deliberate integration of digital and human approaches, grounded in human-centered design and community realities.',
    cross_items: [
      {
        label: 'Equity and Inclusion',
        text: 'Who is being left out of digital mental health innovations?',
      },
      {
        label: 'Ethics and Safeguarding',
        text: 'Protecting vulnerable users in digital environments',
      },
      {
        label: 'Data Governance',
        text: 'Ownership, storage, and responsible use of mental health data',
      },
      {
        label: 'Scalability vs Quality',
        text: 'Maintaining care standards while expanding reach',
      },
      {
        label: 'Digital Literacy',
        text: 'Supporting both providers and users to effectively engage with technology',
      },
    ],
  },
  {
    slug: 'financing-sustainability-economic-impact',
    num: 3,
    page_title:
      'Financing, Sustainability, and Economic Impact of Mental Health Systems',
    subtitle:
      'Exploring how mental health can be financed, sustained, and economically justified within broader health and development agendas — transforming mental health from a cost center into a high-impact investment.',
    label: 'Financing & Policy',
    icon: CurrencyDollar,
    accent_color: 'accent',
    overview_paras: [
      'Across many African contexts and other LMICs, mental health remains critically underfunded — often receiving less than 1% of national health budgets — despite its profound impact on individuals, communities, and national development.',
      'This theme moves beyond short-term, donor-driven programming to examine long-term system financing, integration into Universal Health Coverage (UHC), and the economic case for investing in community-based mental health care.',
      'The focus is on transforming mental health from a cost center into a high-impact investment — one that drives productivity, strengthens families, reduces health system burden, and supports national growth.',
    ],
    why_items: [
      'Closes the treatment gap: without financing, even the best-designed interventions cannot scale.',
      'Supports Universal Health Coverage: mental health must be included as an essential health service.',
      'Strengthens system resilience: sustainable financing ensures continuity beyond donor cycles.',
      'Demonstrates economic value: investments in mental health yield measurable returns.',
      'Reduces long-term costs: early intervention prevents more expensive downstream care.',
      'Aligns with development goals: mental health is linked to education, employment, and poverty reduction.',
    ],
    focus_blocks: [
      {
        title: 'Mental Health Financing in National Systems',
        items: [
          'Budget allocation within Ministries of Health',
          'Integration into national health financing strategies',
          'Prioritization of community-based versus institutional care',
          'Role of decentralization in funding distribution',
        ],
      },
      {
        title: 'Universal Health Coverage Integration',
        items: [
          'Positioning mental health as an essential service within UHC packages',
          'Insurance coverage for mental health services',
          'Financial protection for individuals and families',
          'Aligning mental health with primary health care financing',
        ],
      },
      {
        title: 'Cost-Effectiveness of Community-Based Care',
        items: [
          'Economic evaluations: community-based vs. institutional care',
          'Demonstrating value for money to policymakers and funders',
          'Scaling low-cost, high-impact interventions',
          'Long-term savings through prevention and early intervention',
        ],
      },
      {
        title: 'Donor Funding and Sustainable Transition',
        items: [
          'Role of international donors in scaling mental health services',
          'Risks of dependency on external funding',
          'Strategies for transitioning to government ownership',
          'Blended financing models (public, private, donor)',
        ],
      },
      {
        title: 'Economic Burden and Burden of Disease',
        items: [
          'Impact of mental illness on productivity, employment, and household income',
          'Prevalence of common mental disorders across African populations',
          'Sub-populations: adolescents, women, refugees, conflict-affected communities',
          'Comorbidity with HIV, tuberculosis, and non-communicable diseases',
        ],
      },
      {
        title: 'Investment Cases and Advocacy',
        items: [
          'Building compelling investment cases for policymakers',
          'Using data to influence budget allocation',
          'Framing mental health as a development priority',
          'Engaging Ministries of Finance, not just Health',
        ],
      },
      {
        title: 'Private Sector and Innovative Financing',
        items: [
          'Role of private sector partnerships in mental health funding',
          'Social impact bonds and results-based financing',
          'Insurance innovations and digital payment systems',
          'Philanthropy and local resource mobilization',
        ],
      },
    ],
    questions: [
      'How can governments increase and sustain mental health financing within constrained budgets?',
      'What models best integrate mental health into UHC frameworks in LMICs?',
      'How can cost-effectiveness data be translated into policy action?',
      'What strategies support the transition from donor-funded to government-led systems?',
      'How can mental health be positioned as an economic priority, not just a health issue?',
      'What innovative financing mechanisms can support large-scale mental health interventions?',
    ],
    contributions: [
      'Economic evaluations of mental health interventions',
      'Policy analyses on mental health financing',
      'Case studies of successful integration into UHC',
      'Models of sustainable community-based care financing',
      'Research on economic burden and cost savings',
      'Innovative financing approaches and partnerships',
    ],
    strategic_text:
      'This theme is central to the long-term viability of all others. Without financing, integration cannot scale, innovation cannot sustain, workforce development cannot expand, and community systems cannot function effectively. Financing is not a supporting issue — it is the foundation.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Ensuring financing models do not exclude the most vulnerable populations',
      },
      {
        label: 'Accountability',
        text: 'Transparent use of funds and measurable outcomes',
      },
      { label: 'Efficiency', text: 'Maximizing impact with limited resources' },
      {
        label: 'Policy Alignment',
        text: 'Linking financing to national mental health strategies',
      },
      {
        label: 'Scalability',
        text: 'Designing models that can expand without exponential cost increases',
      },
    ],
  },
  {
    slug: 'cultural-gender-social-determinants',
    num: 4,
    page_title:
      'Cultural, Gender, and Social Determinants of Mental Health in African Contexts',
    subtitle:
      'Examining how mental health is understood, experienced, and addressed within diverse African settings — challenging universalized models in favor of culturally grounded, gender-responsive, and socially informed approaches.',
    label: 'Culture, Gender & Equity',
    icon: Users,
    accent_color: 'secondary',
    overview_paras: [
      'Mental health does not exist in a vacuum — it is shaped by the cultural, social, and structural realities within which people live. In African contexts, experiences of distress, well-being, help-seeking, and recovery are deeply influenced by cultural beliefs, gender norms, economic conditions, and historical forces.',
      'This theme challenges universalized models of care that may overlook local realities and instead emphasizes culturally grounded, gender-responsive, and socially informed approaches to mental health.',
      'By examining the intersection of identity, culture, and inequality, this theme seeks to advance more inclusive, equitable, and contextually relevant mental health systems.',
    ],
    why_items: [
      'Improves relevance of care: interventions must align with local beliefs, languages, and practices to be effective.',
      'Addresses inequality: social determinants such as poverty, gender inequality, and marginalization directly shape mental health outcomes.',
      'Reduces stigma: understanding cultural narratives helps inform better anti-stigma strategies.',
      'Enhances access: gender-sensitive and culturally adapted services increase help-seeking behaviors.',
      'Promotes equity: ensures that mental health systems serve all populations, especially the most vulnerable.',
    ],
    focus_blocks: [
      {
        title: 'Cultural Conceptualizations of Mental Health',
        items: [
          'Local understandings of distress, suffering, and healing',
          'Indigenous knowledge systems and explanatory models of mental illness',
          'Role of spirituality, religion, and traditional healing practices',
          'Integrating cultural competence into clinical and community care',
        ],
      },
      {
        title: 'Gender and Mental Health',
        items: [
          'Impact of gender norms on mental health experiences and help-seeking',
          'Gender-based violence and its psychological consequences',
          'Masculinity norms and mental health (silence, risk-taking, suicide)',
          'Economic and caregiving burdens disproportionately affecting women',
        ],
      },
      {
        title: 'Poverty, Inequality, and Social Determinants',
        items: [
          'Relationship between poverty and mental health',
          'Effects of unemployment, food insecurity, and economic instability',
          'Urbanization and changing social structures',
          'Intergenerational transmission of disadvantage and distress',
        ],
      },
      {
        title: 'Stigma, Discrimination, and Exclusion',
        items: [
          'Cultural stigma surrounding mental illness',
          'Discrimination in families, communities, and institutions',
          'Community-driven stigma reduction strategies',
          'Role of language and narrative in shaping public attitudes',
        ],
      },
      {
        title: 'Intersectionality and Vulnerable Populations',
        items: [
          'Mental health at the intersection of gender, age, disability, and socioeconomic status',
          'Marginalized populations: refugees, persons with disabilities, ethnic minorities',
          'Elderly populations and social isolation',
          'Intersectional approaches to service design and delivery',
        ],
      },
      {
        title: 'Family, Community, and Cultural Interventions',
        items: [
          'Role of family structures in mental health and recovery',
          'Collective versus individual approaches to wellbeing',
          'Adapting evidence-based interventions to local contexts',
          'Community co-creation and gender-responsive delivery models',
        ],
      },
    ],
    questions: [
      'How do cultural beliefs shape the way mental health is understood and addressed in African contexts?',
      'What are the implications of gender norms for mental health outcomes and access to care?',
      'How can mental health interventions be adapted to reflect local realities without losing effectiveness?',
      'What strategies effectively address stigma and discrimination at the community level?',
      'How can systems better respond to the needs of marginalized and vulnerable populations?',
      'What role do families and communities play in promoting mental health and recovery?',
    ],
    contributions: [
      'Qualitative and ethnographic research on cultural understandings of mental health',
      'Gender-focused analyses and intervention studies',
      'Research on social determinants and structural inequalities',
      'Case studies of culturally adapted mental health programs',
      'Community-led and participatory approaches to mental health care',
      'Policy and advocacy work addressing equity and inclusion',
    ],
    strategic_text:
      'This theme ensures that mental health systems are contextually grounded rather than externally imposed, equitable rather than exclusionary, and responsive rather than generic. Effective mental health care must reflect the lived realities of the people it serves.',
    cross_items: [
      {
        label: 'Equity and Inclusion',
        text: 'Ensuring that all groups are represented and served',
      },
      {
        label: 'Human Rights',
        text: 'Protecting dignity and addressing structural injustice',
      },
      {
        label: 'Localization',
        text: 'Shifting from externally driven models to locally owned solutions',
      },
      {
        label: 'Participation',
        text: 'Involving communities in designing and delivering services',
      },
      {
        label: 'Ethics',
        text: 'Respecting cultural practices while safeguarding against harm',
      },
    ],
  },
  {
    slug: 'training-supervision-workforce',
    num: 5,
    page_title:
      'Training, Supervision, and Competency-Based Workforce Development',
    subtitle:
      'Building, training, supervising, and sustaining a diverse mental health workforce capable of delivering safe, effective, and culturally responsive care at scale — from specialists to community-based lay providers.',
    label: 'Workforce & Capacity Building',
    icon: Briefcase,
    accent_color: 'secondary',
    overview_paras: [
      'In many African contexts, the shortage of specialist mental health professionals remains a major barrier to access. Addressing this gap requires a fundamental shift — from specialist-only models to competency-based, task-shared workforce systems that expand coverage while maintaining quality.',
      'This theme focuses not just on training, but on ongoing supervision, quality assurance, and professional development as essential pillars of workforce effectiveness.',
      'A well-trained and supported workforce is the bridge between evidence and impact — enabling integration, innovation, and system sustainability across diverse settings.',
    ],
    why_items: [
      'Closes the workforce gap by expanding service delivery beyond specialists to trained non-specialists.',
      'Ensures quality of care: competency-based approaches focus on what providers can actually do, not just what they know.',
      'Supports scalability: structured training and supervision systems enable large-scale program expansion.',
      'Protects clients and providers: supervision and safeguarding frameworks reduce risk and improve outcomes.',
      'Strengthens system resilience: a well-trained workforce ensures continuity of care across settings and crises.',
    ],
    focus_blocks: [
      {
        title: 'Competency-Based Training Models',
        items: [
          'Moving from knowledge-based to skills-based training approaches',
          'Defining core competencies for specialists, non-specialists, and peer supporters',
          'Standardized training curricula for community mental health interventions',
          'Assessment, certification, and continuous professional development',
        ],
      },
      {
        title: 'Task-Sharing and Workforce Expansion',
        items: [
          'Training lay counselors, community health workers, and peer supporters',
          'Scaling evidence-based interventions (IPT-G, PM+, FHS) through non-specialists',
          'Role clarity and scope of practice for different cadres',
          'Workforce planning for national and district-level systems',
        ],
      },
      {
        title: 'Supervision and Quality Assurance',
        items: [
          'Models of supportive supervision (individual, group, remote)',
          'Building supervisory capacity at district and community levels',
          'Structured supervision tools, checklists, and fidelity monitoring',
          'Feedback mechanisms for continuous improvement',
        ],
      },
      {
        title: 'Safeguarding and Ethical Practice',
        items: [
          'Training providers in ethical principles and client protection',
          'Identifying and managing risk: suicide, abuse, severe distress',
          'Confidentiality, consent, and professional boundaries in community settings',
          'Strengthening accountability systems',
        ],
      },
      {
        title: 'Workforce Wellbeing and Burnout Prevention',
        items: [
          'Addressing emotional burden among mental health providers',
          'Supporting frontline workers exposed to trauma and distress',
          'Preventing burnout, moral injury, and secondary trauma',
          'Integrating self-care and resilience into training programs',
        ],
      },
      {
        title: 'Digital and Innovative Training',
        items: [
          'E-learning platforms and mobile-based training tools',
          'Remote supervision and mentorship systems',
          'Blended learning models (online + in-person)',
          'Simulation-based and practice-oriented learning',
        ],
      },
    ],
    questions: [
      'How can competency-based training improve the quality of mental health care?',
      'What supervision models are most effective in low-resource settings?',
      'How can task-sharing be scaled without compromising safety and fidelity?',
      'What strategies best support the well-being of mental health providers?',
      'How can workforce development be institutionalized within government systems?',
      'What role can digital tools play in training and supervision at scale?',
    ],
    contributions: [
      'Evaluations of training and supervision models',
      'Research on competency-based workforce development',
      'Case studies of task-sharing implementation',
      'Innovations in digital training and supervision',
      'Analyses of workforce wellbeing and burnout prevention',
      'Policy and system-level approaches to workforce strengthening',
    ],
    strategic_text:
      'This theme is central to scaling mental health care. Without a skilled and supported workforce, integration cannot function, innovations cannot be delivered, and systems cannot sustain. Workforce development is the bridge between evidence and impact.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Ensuring training opportunities reach rural and underserved areas',
      },
      {
        label: 'Standardization vs Flexibility',
        text: 'Balancing fidelity with contextual adaptation',
      },
      {
        label: 'Sustainability',
        text: 'Building systems that continue beyond external funding',
      },
      {
        label: 'Localization',
        text: 'Empowering local trainers and supervisors',
      },
      {
        label: 'Quality vs Scale',
        text: 'Maintaining high standards while expanding reach',
      },
    ],
  },
  {
    slug: 'research-monitoring-evaluation-implementation',
    num: 6,
    page_title: 'Research, Monitoring, Evaluation, and Implementation Science',
    subtitle:
      'Bridging the gap between evidence and impact — strengthening the science and practice of evidence generation, monitoring, evaluation, and implementation within community-based mental health systems.',
    label: 'Research & Evidence',
    icon: Beaker,
    accent_color: 'accent',
    overview_paras: [
      'While a growing body of research demonstrates the effectiveness of many mental health interventions, far less is known about how to implement, adapt, scale, and sustain these interventions in real-world, resource-constrained settings.',
      'This theme emphasizes the need to move beyond controlled trials toward practical, context-sensitive, and scalable models that can be delivered through existing systems and continuously improved through data.',
      'Without strong research and evaluation, innovations cannot be validated, systems cannot be improved, funding cannot be justified, and policy cannot be informed.',
    ],
    why_items: [
      "Closes the 'know-do' gap: ensures that evidence-based interventions are effectively translated into practice.",
      'Improves program quality through continuous monitoring and evaluation enabling real-time learning and adaptation.',
      'Supports scalability: implementation science identifies what works, for whom, and under what conditions.',
      'Strengthens accountability: data-driven systems demonstrate impact to governments, funders, and communities.',
      'Enhances policy influence: robust evidence informs national strategies and resource allocation.',
    ],
    focus_blocks: [
      {
        title: 'Implementation Science in Mental Health',
        items: [
          'Adapting evidence-based interventions to local contexts',
          'Understanding barriers and facilitators to implementation',
          'Scaling interventions within PHC, schools, and communities',
          'Fidelity versus adaptation: maintaining effectiveness while ensuring relevance',
        ],
      },
      {
        title: 'Monitoring and Evaluation Frameworks',
        items: [
          'Designing M&E systems for community-based programs',
          'Selecting appropriate indicators: process, output, outcome, impact',
          'Routine data collection and use for program improvement',
          'Participatory M&E involving communities and beneficiaries',
        ],
      },
      {
        title: 'Measurement and Tools Development',
        items: [
          'Validation of mental health screening tools in local languages',
          'Development of brief, scalable assessment tools for non-specialists',
          'Measuring complex outcomes: well-being, resilience, social functioning',
          'Ensuring cultural relevance and sensitivity in measurement',
        ],
      },
      {
        title: 'Real-World Effectiveness and Impact',
        items: [
          'Evaluating interventions outside controlled research environments',
          'Longitudinal studies assessing sustained impact',
          'Cost-effectiveness and return-on-investment analyses',
          'Capturing unintended consequences and contextual effects',
        ],
      },
      {
        title: 'Data Use for Decision-Making',
        items: [
          'Translating research findings into actionable policy recommendations',
          'Using data to inform resource allocation and system design',
          'Strengthening data literacy among program managers and policymakers',
          'Building feedback loops between research, practice, and policy',
        ],
      },
      {
        title: 'Community and Participatory Research',
        items: [
          'Involving communities in research design and implementation',
          'Co-creation of interventions and evaluation frameworks',
          'Ethical considerations in community-based research',
          'Amplifying voices of lived experience in research',
        ],
      },
      {
        title: 'Digital Innovations in Research',
        items: [
          'Mobile-based data collection systems and real-time dashboards',
          'Remote monitoring of program delivery',
          'Use of AI and machine learning in data analysis',
          'Ethical considerations in digital data use',
        ],
      },
    ],
    questions: [
      'How can evidence-based interventions be effectively adapted and scaled in diverse African contexts?',
      'What monitoring systems best support real-time program improvement?',
      'How can we measure outcomes that matter most to communities?',
      'What are the best approaches for balancing fidelity and adaptation?',
      'How can research more directly inform policy and practice?',
      'What role can digital tools play in strengthening research and M&E systems?',
    ],
    contributions: [
      'Implementation research studies',
      'Evaluations of community-based mental health interventions',
      'Innovations in monitoring and evaluation systems',
      'Validation studies of measurement tools',
      'Participatory and community-led research approaches',
      'Policy-relevant analyses and evidence translation efforts',
    ],
    strategic_text:
      'This theme underpins all others at the conference. Without strong research and evaluation, innovations cannot be validated, systems cannot be improved, funding cannot be justified, and policy cannot be informed. It ensures mental health systems are effective, accountable, and evidence-driven.',
    cross_items: [
      {
        label: 'Ethics and Safeguarding',
        text: 'Protecting participants in research and data collection',
      },
      {
        label: 'Equity',
        text: 'Ensuring data captures diverse populations and does not exclude marginalized groups',
      },
      {
        label: 'Feasibility',
        text: 'Designing systems that are practical in low-resource settings',
      },
      {
        label: 'Sustainability',
        text: 'Embedding M&E systems within routine program operations',
      },
      {
        label: 'Localization',
        text: 'Building local research capacity and leadership',
      },
    ],
  },
  {
    slug: 'youth-mental-health-schools-resilience',
    num: 7,
    page_title: 'Youth Mental Health, Schools, and Community Resilience',
    subtitle:
      'Strengthening mental health systems that support young people through schools, families, and community structures — emphasizing early intervention, resilience-building, and creating environments where youth can thrive.',
    label: 'Youth & Adolescent Mental Health',
    icon: FaceSmile,
    accent_color: 'secondary',
    overview_paras: [
      'Young people represent the largest and most dynamic segment of the population across Africa, yet they are also among the most vulnerable to mental health challenges. Adolescence and early adulthood are critical developmental periods marked by identity formation, social pressures, and increasing exposure to risk factors including poverty, violence, and digital influences.',
      'This theme recognizes that early intervention is one of the most effective strategies for preventing long-term mental health conditions — and that investing in youth mental health improves lifelong outcomes in education, employment, and well-being.',
      'Youth mental health is not just a sectoral issue — it is a societal priority with the potential to build stronger foundations for the next generation.',
    ],
    why_items: [
      'Early onset: many mental health challenges begin during adolescence, making early intervention critical.',
      'High vulnerability: young people face unique stressors including academic pressure, identity struggles, and social change.',
      'Rising suicide rates: suicide is a leading cause of death among young people globally, with increasing concern in African contexts.',
      'Schools as critical entry points: schools provide structured environments for prevention, identification, and intervention.',
      'Long-term impact: investing in youth mental health improves lifelong outcomes in education, employment, and well-being.',
    ],
    focus_blocks: [
      {
        title: 'Adolescent Mental Health and Early Intervention',
        items: [
          'Identification of mental health needs during adolescence',
          'Prevention-focused approaches in schools and communities',
          'Addressing anxiety, depression, trauma, and behavioral challenges',
          'Life skills development and emotional regulation',
        ],
      },
      {
        title: 'Suicide Prevention in Youth Populations',
        items: [
          'Understanding drivers of suicide among young people',
          'Gendered patterns and risk factors (young men, social isolation)',
          'School and community-based suicide prevention strategies',
          'Gatekeeper training for teachers, peers, and community members',
        ],
      },
      {
        title: 'School-Based Mental Health Systems',
        items: [
          'Integrating mental health into school health programs',
          'Role of teachers and school staff in mental health support',
          'Creating safe, inclusive, and supportive school environments',
          'Anti-bullying and anti-stigma initiatives',
        ],
      },
      {
        title: 'Peer-Led and Youth-Driven Interventions',
        items: [
          'Empowering young people as peer supporters and leaders',
          'Youth-led mental health awareness and advocacy',
          'Peer support groups and clubs',
          'Co-creation of programs with young people',
        ],
      },
      {
        title: 'Family and Community Engagement',
        items: [
          'Role of caregivers in supporting youth mental health',
          'Strengthening family communication and relationships',
          'Addressing cultural and social barriers to care',
          'Engaging parents, guardians, and community leaders',
        ],
      },
      {
        title: 'Trauma, Adversity, and Resilience',
        items: [
          'Impact of adverse childhood experiences (ACEs)',
          'Trauma from violence, displacement, and poverty',
          'Building resilience and coping mechanisms',
          'Protective factors that promote positive development',
        ],
      },
      {
        title: 'Digital Environments and Youth Mental Health',
        items: [
          'Influence of social media on mental health',
          'Designing youth-friendly digital interventions',
          'Risks: cyberbullying and online harm',
          'Balancing online and offline support systems',
        ],
      },
    ],
    questions: [
      'How can mental health systems effectively reach young people early?',
      'What models best integrate mental health into school environments?',
      'How can peer-led approaches be scaled safely and effectively?',
      'What are the most effective strategies for preventing youth suicide?',
      'How can families and communities better support adolescent wellbeing?',
      'What role can digital tools play in youth mental health support?',
    ],
    contributions: [
      'Research on adolescent mental health and early intervention',
      'Evaluations of school-based mental health programs',
      'Studies on youth suicide prevention strategies',
      'Case studies of peer-led and youth-driven interventions',
      'Innovations in digital youth mental health support',
      'Policy and systems approaches to youth wellbeing',
    ],
    strategic_text:
      'This theme is critical for the long-term transformation of the mental health system. By investing in young people, mental health conditions can be prevented or mitigated early, resilience can be strengthened across generations, and communities can build stronger foundations for wellbeing.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Reaching out-of-school youth, marginalized populations, and rural communities',
      },
      {
        label: 'Gender Sensitivity',
        text: 'Addressing different experiences of boys, girls, and gender-diverse youth',
      },
      {
        label: 'Safeguarding',
        text: 'Protecting children and adolescents from harm',
      },
      {
        label: 'Participation',
        text: 'Ensuring youth voices are central in program design',
      },
      {
        label: 'Integration',
        text: 'Linking schools with health, social services, and community systems',
      },
    ],
  },
  {
    slug: 'arts-faith-culture-mental-health',
    num: 8,
    page_title:
      'The Role of Arts, Faith, and Culture in Mental Health Promotion',
    subtitle:
      'Exploring how arts, faith, and cultural systems can be intentionally integrated into mental health promotion and care — honoring indigenous knowledge, spiritual resources, and creative expression as legitimate pathways to healing.',
    label: 'Arts, Faith & Cultural Systems',
    icon: Photo,
    accent_color: 'accent',
    overview_paras: [
      'Mental health is not only treated in clinics — it is expressed, shaped, and often healed within culture. Across African contexts, communities have long relied on arts, spirituality, storytelling, music, ritual, and collective practices to process distress, restore meaning, and rebuild connection.',
      'This theme recognizes that effective mental health systems must go beyond biomedical models to include indigenous knowledge, spiritual resources, and creative expression as legitimate and powerful components of healing.',
      'By broadening the scope of mental health systems, this theme highlights the importance of identity, meaning, connection, and shared experience in promoting mental wellbeing.',
    ],
    why_items: [
      'Enhances cultural relevance: people are more likely to engage with services that reflect their beliefs and lived experiences.',
      'Expands access: arts and faith-based spaces often reach individuals who may not seek formal care.',
      'Reduces stigma: cultural narratives and creative expression can normalize conversations about mental health.',
      'Supports collective healing: many African communities emphasize shared, communal approaches to wellbeing.',
      'Bridges systems: integrating cultural and clinical approaches strengthens holistic care models.',
    ],
    focus_blocks: [
      {
        title: 'Creative Arts as Pathways to Healing',
        items: [
          'Music, dance, theatre, poetry, and visual arts in mental health promotion',
          'Storytelling as a tool for expression, identity, and recovery',
          'Arts-based interventions for trauma, grief, and community healing',
          'Role of artists as mental health advocates and change agents',
        ],
      },
      {
        title: 'Faith and Spirituality in Mental Health',
        items: [
          'Role of religious beliefs and practices in coping and resilience',
          'Faith leaders as frontline mental health supporters',
          'Integration of mental health into faith-based programs and spaces',
          'Building partnerships between mental health systems and faith institutions',
        ],
      },
      {
        title: 'Indigenous Knowledge and Traditional Healing',
        items: [
          'Traditional understandings of mental health and distress',
          'Role of traditional healers and community elders',
          'Cultural rituals and practices for healing and restoration',
          'Opportunities and challenges in integrating traditional and biomedical approaches',
        ],
      },
      {
        title: 'Community Narratives and Meaning-Making',
        items: [
          'Cultural storytelling as a mechanism for processing adversity',
          'Reframing narratives around mental illness and recovery',
          'Collective memory and healing in post-conflict communities',
          'Language and its role in shaping mental health discourse',
        ],
      },
      {
        title: 'Cultural Identity, Belonging, and Wellbeing',
        items: [
          'Role of identity and belonging in mental health',
          'Impact of cultural disconnection and urbanization',
          'Strengthening community cohesion through cultural engagement',
          'Cultural pride as a protective factor for mental well-being',
        ],
      },
      {
        title: 'Integrating Culture into Formal Systems',
        items: [
          'Designing culturally responsive mental health programs',
          'Collaborating with artists, faith leaders, and cultural institutions',
          'Training mental health providers in cultural competence',
          'Policy implications for integrating cultural approaches nationally',
        ],
      },
    ],
    questions: [
      'How can arts and cultural practices be systematically integrated into mental health promotion?',
      'What role can faith leaders play in expanding access to care and reducing stigma?',
      'How can traditional healing systems and biomedical approaches work together effectively?',
      'What are the risks and ethical considerations in integrating cultural practices into mental health care?',
      'How can storytelling and creative expression support individual and collective healing?',
      'How can cultural identity and belonging be leveraged as protective factors for mental well-being?',
    ],
    contributions: [
      'Research on arts-based and culturally grounded mental health interventions',
      'Case studies of faith-based mental health programs',
      'Analyses of traditional healing practices and integration models',
      'Community-led approaches to mental health promotion',
      'Innovations in storytelling, media, and cultural engagement',
      'Interdisciplinary work bridging mental health, arts, and social sciences',
    ],
    strategic_text:
      'This theme broadens the scope of mental health systems to include community-rooted and culturally meaningful pathways to healing. It challenges narrow definitions of care and highlights the importance of identity, meaning, connection, and shared experience in promoting mental wellbeing.',
    cross_items: [
      {
        label: 'Respect and Ethics',
        text: 'Ensuring cultural practices are engaged respectfully and safely',
      },
      {
        label: 'Inclusion',
        text: 'Recognizing diversity within cultures and avoiding homogenization',
      },
      {
        label: 'Collaboration',
        text: 'Building partnerships between formal systems and cultural actors',
      },
      {
        label: 'Evidence Generation',
        text: 'Strengthening research on the effectiveness of cultural approaches',
      },
      {
        label: 'Safeguarding',
        text: 'Ensuring that all interventions protect vulnerable individuals',
      },
    ],
  },
  {
    slug: 'social-connection-belonging-community-cohesion',
    num: 9,
    page_title:
      'Social Connection, Belonging, and Community Cohesion as Foundations of Mental Health',
    subtitle:
      'Reframing social connection not merely as a desirable outcome but as a core mental health intervention — highlighting how relationships, belonging, and community cohesion prevent distress and support recovery.',
    label: 'Social Cohesion & Belonging',
    icon: UserGroup,
    accent_color: 'secondary',
    overview_paras: [
      'Mental health is fundamentally relational. Across cultures, well-being is deeply tied to connection, belonging, and social cohesion. Yet modern pressures — urbanization, displacement, conflict, digital fragmentation, and economic stress — are increasingly eroding these social bonds.',
      'Loneliness, isolation, and social disconnection are now recognized as major risk factors for poor mental health, comparable in impact to many traditional clinical determinants.',
      'By strengthening social ties and rebuilding trust within communities, mental health systems can move from individual-focused care toward collective, community-driven wellbeing.',
    ],
    why_items: [
      'Connection protects mental health: strong social ties reduce the risk of depression, anxiety, and suicide.',
      'Isolation increases vulnerability: loneliness is a growing public health concern globally and within African contexts.',
      'Community-based care relies on relationships: peer support and collective healing are central to scalable interventions.',
      'Social cohesion strengthens resilience: connected communities recover faster from crisis and adversity.',
      'Reframes mental health care: moves beyond individual treatment toward relational and community-level solutions.',
    ],
    focus_blocks: [
      {
        title: 'Measuring Social Connection in LMICs',
        items: [
          'Development and validation of tools to measure social connection and isolation',
          'Cultural variations in how connection is experienced and expressed',
          'Linking social connection metrics to mental health outcomes',
          'Incorporating social indicators into program evaluation and policy',
        ],
      },
      {
        title: 'Peer Support and Befriending Interventions',
        items: [
          'Role of peer supporters in mental health care delivery',
          'Group-based models that foster connection (e.g., IPT-G)',
          'Community-based befriending and companionship programs',
          'Safeguarding and supervision within peer support systems',
        ],
      },
      {
        title: 'Social Prescribing Models',
        items: [
          'Linking individuals to non-clinical community resources',
          'Integration of social prescribing into primary health care systems',
          'Evidence and adaptation of social prescribing in African contexts',
          'Addressing social determinants through relational interventions',
        ],
      },
      {
        title: 'Digital Connection and Its Risks',
        items: [
          'Opportunities for connection through social media and digital platforms',
          'Risks of digital isolation, misinformation, and cyberbullying',
          'Online peer support and digital communities',
          'Designing safe and inclusive digital spaces for mental well-being',
        ],
      },
      {
        title: 'Post-Conflict Cohesion and Reconciliation',
        items: [
          'Rebuilding trust and relationships in post-conflict settings',
          'Community healing and reconciliation processes',
          'Addressing collective trauma and social fragmentation',
          'Mental health implications of social division and recovery',
        ],
      },
      {
        title: 'Urbanization, Migration, and Belonging',
        items: [
          'Impact of rapid urbanization on social networks and identity',
          'Experiences of displacement and migration',
          'Building new forms of community in urban and peri-urban settings',
          'Social integration and inclusion strategies',
        ],
      },
      {
        title: 'Faith and Arts for Collective Healing',
        items: [
          'Role of religious institutions in fostering belonging and support',
          'Storytelling as a tool for shared experience and meaning-making',
          'Community theatre, music, and art as platforms for connection',
          'Cultural expression in rebuilding social bonds',
        ],
      },
    ],
    questions: [
      'How can social connection be intentionally designed as a mental health intervention?',
      'What are the most effective models for strengthening community cohesion?',
      'How can peer support systems be scaled safely and sustainably?',
      'What role should digital platforms play in fostering or undermining connection?',
      'How can mental health systems address loneliness and isolation at the population level?',
      'How can communities rebuild trust and cohesion after conflict or disruption?',
    ],
    contributions: [
      'Research on social connection and mental health outcomes',
      'Evaluations of peer support and group-based interventions',
      'Studies on social prescribing and community-based approaches',
      'Innovations in measuring and strengthening social cohesion',
      'Case studies from post-conflict and rapidly urbanizing settings',
      'Interdisciplinary work linking mental health, sociology, and community development',
    ],
    strategic_text:
      'This theme shifts the lens of mental health from individual pathology to relational wellbeing. It recognizes that connection is protective, belonging is therapeutic, and community is foundational. Mental health systems that ignore social connection risk addressing symptoms without addressing root causes.',
    cross_items: [
      {
        label: 'Equity and Inclusion',
        text: 'Ensuring marginalized groups are not excluded from social networks',
      },
      {
        label: 'Cultural Relevance',
        text: 'Recognizing diverse forms of connection across contexts',
      },
      {
        label: 'Safeguarding',
        text: 'Protecting individuals within group and peer-based interventions',
      },
      {
        label: 'Scalability',
        text: 'Expanding relational interventions within existing systems',
      },
      {
        label: 'Integration',
        text: 'Linking social connection approaches with health and social services',
      },
    ],
  },
  {
    slug: 'suicide-prevention-crisis-response',
    num: 10,
    page_title: 'Suicide Prevention and Crisis Response Systems',
    subtitle:
      'Strengthening comprehensive, community-based suicide prevention and crisis response systems — shifting from reactive crisis management to proactive, preventive, and system-wide approaches that save lives.',
    label: 'Suicide Prevention & Crisis Response',
    icon: ExclamationTriangle,
    accent_color: 'secondary',
    overview_paras: [
      'Suicide is an urgent and often under-recognized public health challenge across Africa, with growing concern particularly among young men and adolescents. Despite its profound human, social, and economic consequences, suicide remains surrounded by stigma, silence, and limited system-wide response capacity.',
      'This theme focuses on coordinated, multi-level strategies emphasizing early identification, timely intervention, and effective referral pathways, while addressing the structural, cultural, and gendered factors that shape suicide risk.',
      'Suicide prevention is not only a mental health issue — it is a public health, social, and human rights priority that requires a whole-of-society response.',
    ],
    why_items: [
      'Rising concern: suicide rates are increasing in many contexts, particularly among young people.',
      'High preventability: with the right systems in place, many suicides can be prevented.',
      'Gender disparities: men often have higher suicide completion rates due to social norms and help-seeking barriers.',
      'System gaps: many communities lack structured crisis response and referral systems.',
      'Stigma and silence: cultural and social barriers prevent open discussion and timely intervention.',
    ],
    focus_blocks: [
      {
        title: 'Community-Based Prevention Models',
        items: [
          'Prevention strategies rooted in community systems',
          'Role of community health workers, volunteers, and peer supporters',
          'Integrating suicide prevention into primary health care',
          'Community awareness and stigma reduction initiatives',
        ],
      },
      {
        title: 'Crisis Identification and Referral Systems',
        items: [
          'Early detection of suicide risk in community and institutional settings',
          'Screening tools and protocols for identifying high-risk individuals',
          'Building clear and functional referral pathways',
          'Ensuring timely escalation and follow-up care',
        ],
      },
      {
        title: 'Gendered Patterns of Suicide',
        items: [
          'Understanding why suicide disproportionately affects men in many contexts',
          'Role of masculinity norms and emotional suppression',
          'Gender-specific risk and protective factors',
          'Designing gender-responsive prevention strategies',
        ],
      },
      {
        title: 'Economic and Societal Implications',
        items: [
          'Impact of suicide on families, communities, and national development',
          'Link between unemployment, poverty, and suicide risk',
          'Cost-effectiveness of prevention strategies',
          'Framing suicide prevention as a development and policy priority',
        ],
      },
      {
        title: 'Gatekeeper Models',
        items: [
          'Training teachers, community leaders, and peers to identify warning signs',
          'Building confidence to respond to individuals in distress',
          'Creating safe spaces for disclosure and support',
          'Linking gatekeepers to formal referral and support systems',
        ],
      },
      {
        title: 'Postvention and Survivor Support',
        items: [
          'Supporting families and communities after suicide or attempted suicide',
          'Reducing stigma and preventing further risk (contagion effect)',
          'Bereavement support and community healing',
          'Ethical considerations in communication and response',
        ],
      },
      {
        title: 'Media, Communication, and Awareness',
        items: [
          'Responsible reporting of suicide in the media',
          'Public education campaigns to reduce stigma and encourage help-seeking',
          'Role of digital platforms in shaping narratives around suicide',
          'Using communication as a tool for prevention',
        ],
      },
    ],
    questions: [
      'How can suicide prevention be effectively integrated into community and primary care systems?',
      'What are the most effective models for identifying and responding to suicide risk?',
      'How can gender-sensitive approaches improve prevention outcomes?',
      'What role can schools and communities play as frontline responders?',
      'How can stigma and silence around suicide be addressed?',
      'What systems are needed to ensure continuity of care after crisis intervention?',
    ],
    contributions: [
      'Research on suicide trends and risk factors in African contexts',
      'Evaluations of community-based prevention programs',
      'Studies on crisis response and referral systems',
      'Analyses of gendered patterns and interventions',
      'Innovations in gatekeeper training and community engagement',
      'Policy and systems approaches to suicide prevention',
    ],
    strategic_text:
      'This theme addresses one of the most urgent and preventable causes of death. It calls for coordinated systems, early intervention, community engagement, and sustained policy attention. Suicide prevention requires action at every level — from individual support to system-wide reform.',
    cross_items: [
      {
        label: 'Safeguarding',
        text: 'Protecting individuals at risk through ethical and structured systems',
      },
      {
        label: 'Integration',
        text: 'Linking suicide prevention with broader mental health and social systems',
      },
      {
        label: 'Cultural Sensitivity',
        text: 'Addressing beliefs and norms that influence suicide and help-seeking',
      },
      {
        label: 'Equity',
        text: 'Ensuring access to prevention and care for vulnerable populations',
      },
      {
        label: 'Data and Surveillance',
        text: 'Improving data collection and monitoring of suicide trends',
      },
    ],
  },
  {
    slug: 'substance-use-addictive-behaviors',
    num: 11,
    page_title: 'Substance Use and Addictive Behaviors in Community Contexts',
    subtitle:
      'Addressing substance use and addiction as part of a broader ecosystem involving mental health, social conditions, and structural vulnerabilities — emphasizing integrated, community-based prevention, treatment, and recovery.',
    label: 'Substance Use & Dual Diagnosis',
    icon: Beaker,
    accent_color: 'secondary',
    overview_paras: [
      'Across many African contexts, rising levels of alcohol and drug use — particularly among young people — are contributing to increased rates of depression, anxiety, violence, school dropout, and economic instability.',
      'This theme emphasizes the need for integrated, community-based approaches that combine prevention, early intervention, treatment, and recovery support, while addressing stigma and systemic barriers to care.',
      'Without addressing substance use, mental health interventions may be less effective, community well-being remains compromised, and cycles of vulnerability continue.',
    ],
    why_items: [
      'Growing public health concern: substance use is increasing, particularly among youth and urban populations.',
      'Strong link to mental health: substance use both contributes to and results from mental health challenges.',
      'High social impact: substance use affects families, communities, safety, and economic productivity.',
      'Limited access to care: treatment services are often centralized, stigmatized, or unavailable.',
      'Opportunity for prevention: community systems can play a powerful role in reducing risk and supporting recovery.',
    ],
    focus_blocks: [
      {
        title: 'Alcohol and Drug Use in Youth',
        items: [
          'Patterns and drivers of substance use among adolescents and young adults',
          'Influence of peer pressure, unemployment, urbanization, and social stressors',
          'Community norms and cultural attitudes toward substance use',
          'School and community-based prevention strategies',
        ],
      },
      {
        title: 'Dual Diagnosis: Mental Health and Substance Use',
        items: [
          'Co-occurring mental health conditions and substance use disorders',
          'Bidirectional relationships between distress and substance use',
          'Integrated treatment approaches addressing both conditions simultaneously',
          'Training providers to recognize and manage dual diagnosis',
        ],
      },
      {
        title: 'Prevention and Harm Reduction',
        items: [
          'Community-based prevention programs targeting high-risk populations',
          'Public awareness and education campaigns',
          'Harm reduction approaches: safer use and reducing risk behaviors',
          'Role of policy and regulation (e.g., alcohol control measures)',
        ],
      },
      {
        title: 'Community-Based Rehabilitation Models',
        items: [
          'Decentralized and accessible rehabilitation services',
          'Peer-led recovery and support groups',
          'Integration of substance use treatment into primary health care',
          'Reintegration into community life, education, and employment',
        ],
      },
      {
        title: 'Stigma and Barriers to Care',
        items: [
          'Social stigma associated with substance use disorders',
          'Impact of stigma on help-seeking and recovery',
          'Criminalization versus health-based approaches to care',
          'Creating supportive and non-judgmental care environments',
        ],
      },
      {
        title: 'Gender and Substance Use',
        items: [
          'Differences in substance use patterns among men and women',
          'Substance use in relation to gender-based violence and trauma',
          'Barriers faced by women in accessing treatment',
          'Designing gender-responsive interventions',
        ],
      },
      {
        title: 'Policy, Systems, and Integration',
        items: [
          'National policies on substance use and mental health',
          'Integration of substance use services into PHC and community systems',
          'Coordination between health, social services, and justice systems',
          'Monitoring and evaluation of substance use interventions',
        ],
      },
    ],
    questions: [
      'What are the main drivers of substance use in different community contexts?',
      'How can mental health and substance use services be effectively integrated?',
      'What prevention strategies are most effective for young populations?',
      'How can community-based rehabilitation models be scaled sustainably?',
      'What role should policy play in addressing substance use as a public health issue?',
      'How can stigma and discrimination be reduced to improve access to care?',
    ],
    contributions: [
      'Research on substance use patterns and determinants',
      'Studies on dual diagnosis and integrated care models',
      'Evaluations of prevention and harm reduction programs',
      'Case studies of community-based rehabilitation approaches',
      'Policy analyses and system-level interventions',
      'Innovations in youth-focused substance use prevention',
    ],
    strategic_text:
      'This theme addresses a critical intersection between mental health, public health, and social development. Integrated approaches to substance use and mental health are essential for meaningful and sustained impact on individual and community well-being.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Ensuring access to prevention and treatment for marginalized populations',
      },
      {
        label: 'Human Rights',
        text: 'Promoting dignity and non-punitive approaches to care',
      },
      {
        label: 'Integration',
        text: 'Linking substance use services with mental health and social systems',
      },
      {
        label: 'Cultural Relevance',
        text: 'Adapting interventions to local contexts and norms',
      },
      {
        label: 'Sustainability',
        text: 'Building long-term, community-based support systems',
      },
    ],
  },
  {
    slug: 'trauma-violence-human-rights',
    num: 12,
    page_title: 'Trauma, Violence, and Human Rights in Mental Health',
    subtitle:
      'Centering the relationship between trauma, violence, and human rights — calling for trauma-informed systems of care that respond to psychological distress while addressing the underlying conditions that perpetuate harm.',
    label: 'Trauma, Violence & Human Rights',
    icon: Bolt,
    accent_color: 'secondary',
    overview_paras: [
      'Experiences of violence — whether interpersonal or structural — are among the most powerful determinants of mental health. Individuals and communities are affected by sexual and gender-based violence, domestic violence, and broader human rights violations that leave deep psychological, social, and intergenerational impacts.',
      'This theme emphasizes that mental health cannot be separated from issues of safety, justice, and dignity. It calls for trauma-informed systems of care that not only respond to psychological distress but also address the underlying conditions that perpetuate harm.',
      'Mental health care must be both clinical and protective. Systems must respond not only to symptoms, but to causes — ensuring that access to safety, protection, and mental health care is upheld as a fundamental human right.',
    ],
    why_items: [
      'High prevalence of violence: many individuals, particularly women and children, experience violence that significantly impacts mental health.',
      'Severe psychological consequences: trauma is linked to depression, anxiety, PTSD, substance use, and suicidal behavior.',
      'Intergenerational effects: trauma can affect families and communities across generations.',
      'Human rights imperative: access to safety, protection, and mental health care is a fundamental human right.',
      'System gaps: many health and social systems are not adequately equipped to respond to trauma and violence.',
    ],
    focus_blocks: [
      {
        title: 'Sexual and Gender-Based Violence (SGBV)',
        items: [
          'Psychological impact of sexual violence, exploitation, and abuse',
          'Gendered patterns of violence and vulnerability',
          "Survivors' access to care, protection, and justice",
          'Integration of mental health support within SGBV services',
        ],
      },
      {
        title: 'Domestic and Intimate Partner Violence',
        items: [
          'Mental health consequences of ongoing violence within households',
          'Impact on children exposed to domestic violence',
          'Barriers to disclosure and help-seeking',
          'Strengthening support services for survivors',
        ],
      },
      {
        title: 'Human Rights Violations and Mental Health',
        items: [
          'Effects of structural violence, discrimination, and marginalization',
          'Mental health implications of poverty, exclusion, and injustice',
          'Rights-based approaches to mental health care',
          'Advocacy for policy and legal reforms',
        ],
      },
      {
        title: 'Trauma-Informed Systems of Care',
        items: [
          'Principles: safety, trust, empowerment, and choice',
          'Adapting health and community systems to respond to trauma',
          'Avoiding re-traumatization in service delivery',
          'Training providers in trauma-informed practices',
        ],
      },
      {
        title: 'Legal and Policy Responses',
        items: [
          'National laws and policies addressing violence and mental health',
          'Coordination between health, legal, and social protection systems',
          'Strengthening reporting and referral mechanisms',
          'Access to justice for survivors',
        ],
      },
      {
        title: 'Child Protection and Vulnerable Populations',
        items: [
          'Impact of violence on children and adolescents',
          'Child protection systems and mental health integration',
          'Safeguarding frameworks in community-based programs',
          'Supporting recovery and resilience among vulnerable groups',
        ],
      },
      {
        title: 'Community Healing and Recovery',
        items: [
          'Collective trauma and its impact on communities',
          'Community-based healing approaches and support networks',
          'Integrating cultural and traditional practices into healing processes',
          'Building resilience and restoring trust',
        ],
      },
    ],
    questions: [
      'How can mental health systems effectively respond to trauma and violence?',
      'What are the best models for integrating mental health into SGBV and protection services?',
      'How can trauma-informed care be scaled across health and community systems?',
      'What role do legal and policy frameworks play in protecting mental health?',
      'How can communities be engaged in preventing violence and supporting recovery?',
      'How can services avoid re-traumatization while providing effective care?',
    ],
    contributions: [
      'Research on trauma and violence-related mental health outcomes',
      'Evaluations of trauma-informed care models',
      'Studies on SGBV and domestic violence interventions',
      'Policy analyses on human rights and mental health',
      'Community-based approaches to healing and recovery',
      'Interdisciplinary work linking mental health, law, and social protection',
    ],
    strategic_text:
      'This theme places human dignity, safety, and justice at the center of mental health systems. It reinforces that mental health cannot be addressed without addressing violence, care must be both clinical and protective, and systems must respond not only to symptoms but to root causes.',
    cross_items: [
      {
        label: 'Safeguarding',
        text: 'Ensuring the safety and protection of all individuals receiving services',
      },
      {
        label: 'Gender Sensitivity',
        text: 'Addressing the unique experiences of women, men, and gender-diverse populations',
      },
      { label: 'Equity', text: 'Reaching marginalized and high-risk groups' },
      {
        label: 'Integration',
        text: 'Linking mental health with protection, legal, and social services',
      },
      {
        label: 'Ethics',
        text: 'Ensuring confidentiality, informed consent, and respectful care',
      },
    ],
  },
  {
    slug: 'armed-conflict-displacement-humanitarian',
    num: 13,
    page_title: 'Armed Conflict, Displacement, and Humanitarian Mental Health',
    subtitle:
      'Examining the mental health and psychosocial impact of conflict and displacement — highlighting the need for integrated, scalable, and culturally responsive MHPSS systems that support resilience, reintegration, and rebuilding.',
    label: 'Humanitarian MHPSS',
    icon: ShieldExclamation,
    accent_color: 'accent',
    overview_paras: [
      'Armed conflict, forced displacement, and humanitarian crises profoundly disrupt lives, social structures, and mental well-being. Across Africa, millions of people are affected by conflict-related violence, displacement, and prolonged instability — resulting in complex and layered mental health needs that extend far beyond the immediate crisis.',
      'This theme highlights the need for integrated, scalable, and culturally responsive Mental Health and Psychosocial Support (MHPSS) systems that operate effectively in humanitarian settings while supporting resilience, reintegration, and community rebuilding.',
      'Mental health in these contexts is not optional — it is essential for survival, recovery, and the long-term rebuilding of individuals, families, and societies.',
    ],
    why_items: [
      'High burden of trauma: exposure to violence, loss, and displacement significantly increases the risk of mental health conditions.',
      'Prolonged instability: many affected populations live in chronic humanitarian contexts rather than short-term emergencies.',
      'Vulnerable populations: refugees, IDPs, women, and children face heightened and compounding risks.',
      'System disruption: health and social systems are often weakened or fragmented in conflict settings.',
      'Opportunity for resilience: communities demonstrate a remarkable capacity for recovery when effectively supported.',
    ],
    focus_blocks: [
      {
        title: 'Refugee and Internally Displaced Populations',
        items: [
          'Mental health needs across different phases of displacement',
          'Barriers to accessing care in camps, settlements, and host communities',
          'Integration of mental health services within humanitarian response systems',
          'Inclusion of host communities in mental health programming',
        ],
      },
      {
        title: 'War Trauma and Intergenerational Impact',
        items: [
          'Psychological effects of exposure to violence, conflict, and loss',
          'Post-traumatic stress, grief, and complex trauma',
          'Impact on children growing up in conflict settings',
          'Intergenerational transmission of trauma and adversity',
        ],
      },
      {
        title: 'Humanitarian MHPSS Systems',
        items: [
          'Design and delivery of MHPSS in emergency and protracted crises',
          'Coordination between humanitarian actors (health, protection, education)',
          'Use of scalable interventions: PFA, group-based therapies, task-sharing',
          'Challenges in maintaining quality and continuity of care',
        ],
      },
      {
        title: 'Reintegration and Recovery',
        items: [
          'Supporting returnees and reintegration into communities',
          'Addressing stigma and social exclusion of displaced populations',
          'Restoring livelihoods, social roles, and identity',
          'Linking humanitarian response to long-term development systems',
        ],
      },
      {
        title: 'Protection, Safeguarding, and Vulnerable Groups',
        items: [
          'Addressing risks of exploitation, abuse, and violence in humanitarian settings',
          'Child protection and safeguarding frameworks',
          'Gender and age-specific vulnerabilities in humanitarian contexts',
          'Ensuring safe and ethical service delivery',
        ],
      },
      {
        title: 'Community Resilience and Collective Healing',
        items: [
          'Role of community networks in supporting recovery',
          'Collective coping strategies and cultural practices',
          'Community-led approaches to mental health and wellbeing',
          'Building resilience in the face of ongoing adversity',
        ],
      },
      {
        title: 'Policy, Coordination, and Systems',
        items: [
          'National and regional policies on refugee and humanitarian mental health',
          'Coordination between governments, NGOs, and international agencies',
          'Transition from emergency response to sustainable systems',
          'Capacity building of local actors and institutions',
        ],
      },
    ],
    questions: [
      'How can mental health systems effectively respond to the needs of displaced populations?',
      'What models of MHPSS work best in humanitarian and conflict-affected settings?',
      'How can services transition from emergency response to sustainable systems?',
      'What strategies support long-term recovery and reintegration?',
      'How can communities be supported to rebuild cohesion and resilience?',
      'What role should governments and local actors play in humanitarian mental health systems?',
    ],
    contributions: [
      'Research on mental health in conflict and displacement settings',
      'Evaluations of humanitarian MHPSS interventions',
      'Case studies of refugee and IDP support programs',
      'Analyses of trauma and resilience in affected populations',
      'Policy and coordination frameworks for humanitarian mental health',
      'Innovations in scalable and culturally responsive interventions',
    ],
    strategic_text:
      'This theme highlights one of the most complex and urgent areas of global mental health — underscoring the need for integrated humanitarian and development approaches, strong coordination across sectors, and systems that are both responsive and sustainable.',
    cross_items: [
      {
        label: 'Human Rights',
        text: 'Ensuring dignity, protection, and access to care for all affected populations',
      },
      {
        label: 'Equity',
        text: 'Reaching the most vulnerable, including women, children, and persons with disabilities',
      },
      {
        label: 'Localization',
        text: 'Empowering local actors and communities in response efforts',
      },
      {
        label: 'Integration',
        text: 'Linking MHPSS with health, education, and protection systems',
      },
      {
        label: 'Sustainability',
        text: 'Moving from short-term response to long-term recovery and resilience',
      },
    ],
  },
  {
    slug: 'moral-injury-occupational-stress-mobbing',
    num: 14,
    page_title:
      'Moral Injury, Occupational Stress, and Wellbeing in the Workplace',
    subtitle:
      'Bringing attention to the psychological impact of working in high-pressure, ethically complex, and under-resourced environments — emphasizing system-level solutions that promote healthier, more supportive workplaces.',
    label: 'Occupational Mental Health',
    icon: Briefcase,
    accent_color: 'secondary',
    overview_paras: [
      'Beyond clinical disorders, many individuals — particularly those working in high-pressure environments — experience profound psychological strain linked to ethical conflict, chronic stress, and harmful workplace dynamics. Concepts such as moral injury, burnout, and workplace mobbing are increasingly recognized as critical but under-explored dimensions of mental health.',
      'This theme explores how individuals are affected when they are unable to act in accordance with their values, are exposed to sustained stress, or are subjected to toxic organizational environments — and emphasizes the need to move beyond individual coping toward system-level solutions.',
      'Without addressing occupational stress and system-level harm, workforce capacity declines, service quality deteriorates, and systems become unsustainable.',
    ],
    why_items: [
      'Invisible burden: many professionals experience psychological harm that is not formally recognized or addressed.',
      'Impact on service delivery: burnout and moral injury reduce the quality of care and organizational effectiveness.',
      'High-risk sectors: health workers, humanitarian staff, and frontline providers are particularly vulnerable.',
      'System-driven stress: many challenges arise not from individuals, but from structural and organizational pressures.',
      'Retention and sustainability: workforce well-being is essential for maintaining strong, functional systems.',
    ],
    focus_blocks: [
      {
        title: 'Moral Injury in Professional Contexts',
        items: [
          'Understanding moral injury as a response to ethical conflict and value violation',
          'Experiences of health workers operating under constrained conditions',
          'Emotional and psychological consequences: guilt, shame, disillusionment',
          'Strategies for prevention and organizational support',
        ],
      },
      {
        title: 'Occupational Stress and Burnout',
        items: [
          'Chronic stress associated with high workload and emotional demands',
          'Burnout: exhaustion, detachment, and reduced effectiveness',
          'Risk factors across different sectors and roles',
          'Interventions to prevent and mitigate burnout',
        ],
      },
      {
        title: 'Workplace Mobbing and Psychological Harm',
        items: [
          'Understanding mobbing as systematic workplace bullying and exclusion',
          'Power dynamics, organizational culture, and enabling conditions',
          'Psychological consequences: anxiety, depression, loss of confidence',
          'Creating safe and respectful work environments',
        ],
      },
      {
        title: 'Ethical Distress and System Pressures',
        items: [
          'Navigating conflicting demands between professional values and institutional constraints',
          'Emotional toll of working in under-resourced systems',
          'Impact on identity, motivation, and job satisfaction',
          'Organizational responsibility in addressing ethical distress',
        ],
      },
      {
        title: 'Organizational Mental Health Systems',
        items: [
          'Designing workplaces that actively promote mental well-being',
          'Leadership roles in shaping organizational culture',
          'Policies for staff support, supervision, and protection',
          'Monitoring workforce wellbeing and organizational health',
        ],
      },
      {
        title: 'Support Systems for Frontline Workers',
        items: [
          'Supervision, mentorship, and peer support mechanisms',
          'Access to mental health services for staff',
          'Reflective practice and debriefing spaces',
          'Building resilience without shifting responsibility solely to individuals',
        ],
      },
      {
        title: 'Cross-Sector Perspectives',
        items: [
          'Mental health challenges in healthcare, humanitarian, education, and corporate sectors',
          'Comparative experiences across professional environments',
          'Lessons from global and regional best practices',
          'Interdisciplinary approaches to workforce wellbeing',
        ],
      },
    ],
    questions: [
      'How can organizations recognize and address moral injury among staff?',
      'What are the most effective strategies for preventing and managing burnout?',
      'How can workplace mobbing be identified, prevented, and addressed?',
      'What organizational changes are needed to reduce ethical distress?',
      'How can systems better support the mental health of frontline workers?',
      'What role does leadership play in fostering healthy workplace environments?',
    ],
    contributions: [
      'Research on moral injury, burnout, and workplace mental health',
      'Studies on organizational culture and its impact on wellbeing',
      'Evaluations of interventions to support staff mental health',
      'Case studies from health, humanitarian, and other sectors',
      'Policy and organizational frameworks for workforce protection',
      'Interdisciplinary approaches to occupational mental health',
    ],
    strategic_text:
      'This theme highlights a critical but often overlooked dimension of mental health systems — the well-being of those who deliver care and sustain institutions. Without addressing occupational stress, workforce capacity declines, service quality deteriorates, and systems become unsustainable.',
    cross_items: [
      {
        label: 'System Responsibility',
        text: 'Shifting focus from individual resilience to organizational accountability',
      },
      {
        label: 'Equity',
        text: 'Addressing disparities in working conditions across roles and settings',
      },
      {
        label: 'Ethics',
        text: 'Ensuring fair, safe, and supportive work environments',
      },
      {
        label: 'Sustainability',
        text: 'Retaining skilled professionals through supportive systems',
      },
      {
        label: 'Leadership',
        text: 'Role of leaders in shaping culture and addressing harm',
      },
    ],
  },
  {
    slug: 'mindfulness-wellbeing-preventive-mental-health',
    num: 15,
    page_title:
      'Mindfulness, Wellbeing, and Preventive Mental Health Approaches',
    subtitle:
      'Exploring how mindfulness and broader wellbeing approaches can be integrated into community, school, workplace, and health systems to promote resilience, emotional regulation, and mental balance before distress escalates.',
    label: 'Prevention & Wellbeing',
    icon: Sparkles,
    accent_color: 'accent',
    overview_paras: [
      'Mental health systems have historically focused on treatment — responding to illness after it emerges. However, there is a growing recognition that sustainable mental health requires a stronger emphasis on prevention, early intervention, and the active promotion of well-being.',
      'Practices such as mindfulness, stress regulation, and everyday coping strategies offer accessible and culturally adaptable pathways to support mental health before distress escalates into disorder.',
      'This theme represents a paradigm shift: from treatment to prevention, from illness to wellbeing, and from reactive systems to proactive systems — complementing all other conference themes by addressing mental health before crisis occurs.',
    ],
    why_items: [
      'Prevention is cost-effective: early and preventive approaches reduce the need for more intensive treatment later.',
      'Universal relevance: practices like mindfulness can be adapted across cultures and settings.',
      "Supports resilience by building individuals' capacity to manage stress and adversity.",
      'Reduces system burden: preventive strategies ease pressure on already strained mental health services.',
      'Promotes holistic wellbeing: goes beyond illness to support emotional, psychological, and social health.',
    ],
    focus_blocks: [
      {
        title: 'Mindfulness and Presence-Based Practices',
        items: [
          'Understanding mindfulness as awareness of the present moment',
          'Adaptation of mindfulness practices to African cultural contexts',
          'Integration into daily life, education, and work environments',
          'Evidence on effectiveness for stress, anxiety, and emotional regulation',
        ],
      },
      {
        title: 'Preventive Mental Health Strategies',
        items: [
          'Universal prevention approaches targeting entire populations',
          'Selective prevention for at-risk groups',
          'Early identification and intervention before escalation',
          'Linking prevention with broader health promotion strategies',
        ],
      },
      {
        title: 'Wellbeing Frameworks and Positive Mental Health',
        items: [
          'Conceptualizing wellbeing beyond the absence of illness',
          'Psychological, emotional, and social dimensions of well-being',
          'Measuring well-being in diverse cultural contexts',
          'Promoting life satisfaction, purpose, and meaning',
        ],
      },
      {
        title: 'Stress Management and Emotional Regulation',
        items: [
          'Techniques for managing everyday stress across the lifespan',
          'Building coping skills in schools and workplaces',
          'Addressing chronic stress in low-resource settings',
          'Role of relaxation, breathing, and body-based practices',
        ],
      },
      {
        title: 'Integration into Systems and Settings',
        items: [
          'Incorporating mindfulness and wellbeing into primary health care',
          'School-based wellbeing programs and life skills education',
          'Workplace mental health and stress reduction initiatives',
          'Policy support for preventive mental health approaches',
        ],
      },
      {
        title: 'Cultural Adaptation and Localization',
        items: [
          'Aligning mindfulness with local beliefs and practices',
          'Drawing from indigenous concepts of wellbeing and balance',
          'Engaging community leaders and cultural institutions',
          'Co-creating culturally meaningful interventions',
        ],
      },
      {
        title: 'Digital and Scalable Wellbeing Interventions',
        items: [
          'Use of mobile apps and digital platforms for mindfulness and stress management',
          'Opportunities for wide-scale dissemination',
          'Blended approaches combining digital and human support',
          'Ensuring accessibility and inclusion for all populations',
        ],
      },
    ],
    questions: [
      'How can mindfulness and wellbeing practices be adapted for African contexts?',
      'What are the most effective preventive mental health strategies at the community level?',
      'How can systems shift from reactive to preventive approaches?',
      'What role can schools and workplaces play in promoting mental well-being?',
      'How can well-being be measured and tracked meaningfully in diverse settings?',
      'What is the balance between individual and systemic approaches to prevention?',
    ],
    contributions: [
      'Research on mindfulness and wellbeing interventions',
      'Evaluations of preventive mental health programs',
      'Studies on stress management and resilience-building',
      'Innovations in school and workplace wellbeing initiatives',
      'Culturally grounded approaches to prevention',
      'Policy and systems perspectives on mental health promotion',
    ],
    strategic_text:
      'This theme represents a paradigm shift: from treatment to prevention, from illness to wellbeing, and from reactive to proactive systems. It complements all other conference themes by addressing mental health before crisis occurs, building resilient individuals and communities for the long term.',
    cross_items: [
      {
        label: 'Equity',
        text: 'Ensuring preventive approaches reach underserved populations',
      },
      {
        label: 'Cultural Sensitivity',
        text: 'Adapting practices to local contexts and values',
      },
      {
        label: 'Integration',
        text: 'Linking prevention with treatment and care systems',
      },
      {
        label: 'Sustainability',
        text: 'Embedding wellbeing approaches within existing structures',
      },
      {
        label: 'Evidence',
        text: 'Strengthening research on effectiveness and scalability',
      },
    ],
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug);
}

export function getAllThemeSlugs(): string[] {
  return themes.map((t) => t.slug);
}
