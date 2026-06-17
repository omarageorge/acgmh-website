export type MajorTheme = {
  id: string;
  number: string;
  theme: 'accent' | 'secondary';
  tagline: string;
  title: string;
  description: string[];
  africanPerspective: string;
  keyAreas: string[];
};

export const major_conference_themes: MajorTheme[] = [
  {
    id: 'community-based-systems',
    number: '01',
    theme: 'secondary',
    tagline: 'Equity · Access · Systems Strengthening',

    title:
      'Strengthening Equitable and Community-Based Mental Health Systems in Africa',

    description: [
      'This theme focuses on transforming mental health care from centralized, specialist-driven systems toward accessible, community-based, and people-centered approaches grounded in African realities. It highlights the urgent need to close the mental health treatment gap by integrating care into primary health care, schools, workplaces, humanitarian systems, and community structures.',

      'The theme further emphasizes inclusion, cultural responsiveness, workforce development, financing, and policy systems that ensure mental health care reaches underserved and marginalized populations across Africa.',
    ],

    africanPerspective:
      'This theme recognizes that African communities already possess strong social and communal systems that can be leveraged to strengthen mental health access, prevention, and recovery.',

    keyAreas: [
      'Integration of mental health into primary health care and community systems',
      'Workforce development, supervision, and task-sharing',
      'Mental health financing and sustainability',
      'Youth and school mental health systems',
      'Humanitarian mental health and psychosocial support',
      'Substance use and community rehabilitation',
      'Suicide prevention and crisis response systems',
      'Occupational and workplace mental health',
      'Monitoring, evaluation, and implementation science',
      'Universal Health Coverage (UHC) and mental health policy',
    ],
  },

  {
    id: 'innovation-technology',
    number: '02',
    theme: 'accent',

    tagline: 'Innovation · Research · Scalability',

    title:
      'Innovation, Technology, and African-Led Solutions for Mental Health',

    description: [
      'This theme explores emerging innovations reshaping the future of mental health care across Africa and other low-resource settings. It emphasizes African-led innovation, contextually grounded research, digital mental health, artificial intelligence, implementation science, and scalable models capable of reaching populations traditionally excluded from care.',

      'The theme positions Africa not merely as a recipient of global mental health ideas, but as a generator of innovative, culturally relevant, and scalable solutions for the world.',
    ],

    africanPerspective:
      'This theme emphasizes innovation emerging from African contexts, lived realities, indigenous knowledge systems, and community resilience—not simply imported models adapted to Africa.',

    keyAreas: [
      'Digital mental health and AI-driven approaches',
      'Tele-mental health and remote supervision',
      'Data systems, monitoring, and real-time analytics',
      'Implementation science and systems research',
      'Community-based innovations and scalable interventions',
      'Digital storytelling and communication for mental health',
      'Peer-led and youth-driven interventions',
      'Innovations in training and supervision systems',
      'Measurement tools and culturally grounded evidence generation',
      'Ethical and human-centered technology integration',
    ],
  },

  {
    id: 'culture-resilience',
    number: '03',
    theme: 'secondary',

    tagline: 'Resilience · Belonging · Cultural Identity',

    title: 'Culture, Resilience, and Social Healing in African Mental Health',

    description: [
      'This theme centers the social, cultural, spiritual, and relational foundations of mental health in African communities.',

      'The theme explores how communities respond to trauma, adversity, violence, displacement, and social change while building resilience, belonging, and hope.',
    ],

    africanPerspective:
      'This theme uplifts African philosophies of collective wellbeing, interconnectedness, cultural identity, and shared healing as central pillars of mental health systems.',

    keyAreas: [
      'Arts, storytelling, and mental health promotion',
      'Faith, spirituality, and traditional healing systems',
      'Social connection, belonging, and community cohesion',
      'Trauma, violence, and human rights',
      'Gender, culture, and social determinants of mental health',
      'Community resilience and collective healing',
      'Conflict, displacement, and recovery',
      'Mindfulness, wellbeing, and preventive mental health',
      'Masculinity, identity, and emotional wellbeing',
      'Stigma reduction and culturally responsive care',
    ],
  },
];
