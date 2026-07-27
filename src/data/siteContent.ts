export type NavigationItem = {
  label: string;
  href: string;
};

export type ThemeId =
  | "embodiment"
  | "classification-gender-reading"
  | "identity-non-recognition"
  | "queer-affect"
  | "measurement"
  | "intimacy"
  | "communities-institutions"
  | "computational-methods"
  | "trans-health";

export type ResearchProject = {
  id?: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  status?: string;
  themes?: readonly ThemeId[];
};

export type ResearchAgenda = {
  id?: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  themes?: readonly ThemeId[];
};

export type SelectedWritingItem = {
  id: string;
  order: number;
  titleZh: string;
  subtitleZh: string;
  titleEn: string;
  subtitleEn: string;
  date: string;
  url: string;
  themes: readonly ThemeId[];
};

export type DialogueItem = {
  author: string;
  year?: string;
  title: string;
  href?: string;
};

export const themeOptions = [
  { id: "embodiment", label: "Embodiment" },
  {
    id: "classification-gender-reading",
    label: "Classification & Gender Reading",
  },
  {
    id: "identity-non-recognition",
    label: "Identity & (Non-)Recognition",
  },
  {
    id: "queer-affect",
    label: "Queer Affect",
  },
  { id: "measurement", label: "Measurement" },
  { id: "intimacy", label: "Intimacy" },
  {
    id: "communities-institutions",
    label: "Communities & Institutions",
  },
  { id: "computational-methods", label: "Computational Methods" },
  { id: "trans-health", label: "Trans Health & Minority Stress" },
] satisfies ReadonlyArray<{ id: ThemeId; label: string }>;

export const researchThemeAnnotations = {
  "re-situating-gender-nonconformity": [
    "measurement",
    "classification-gender-reading",
    "trans-health",
  ],
  "uneven-diffusion-of-queer-identity": [
    "classification-gender-reading",
    "identity-non-recognition",
    "communities-institutions",
    "computational-methods",
  ],
  "minority-stress-pathways": [
    "communities-institutions",
    "trans-health",
  ],
  "transgender-height": [
    "embodiment",
    "classification-gender-reading",
    "trans-health",
  ],
  "contained-gender-transgression": [
    "embodiment",
    "classification-gender-reading",
    "communities-institutions",
    "queer-affect",
  ],
  "asexuality-and-qpr": [
    "intimacy",
    "identity-non-recognition",
    "communities-institutions",
  ],
} satisfies Record<string, readonly ThemeId[]>;

export const researchAgendaThemeAnnotations = {
  "sizing-gender": [
    "embodiment",
    "classification-gender-reading",
    "measurement",
    "communities-institutions",
    "computational-methods",
  ],
  "queer-shame-temporal-rupture": [
    "queer-affect",
    "classification-gender-reading",
    "identity-non-recognition",
  ],
} satisfies Record<string, readonly ThemeId[]>;

export const writingThemeAnnotations = {
  "masculinist-feminism": [
    "communities-institutions",
    "queer-affect",
    "identity-non-recognition",
  ],
  "layers-of-gender": [
    "embodiment",
    "classification-gender-reading",
    "identity-non-recognition",
  ],
  "xingzhi-translation": [
    "classification-gender-reading",
    "measurement",
    "communities-institutions",
  ],
  "body-theory-toolbox": [
    "embodiment",
    "classification-gender-reading",
  ],
  "nanniang-no-future": [
    "classification-gender-reading",
    "identity-non-recognition",
    "communities-institutions",
    "queer-affect",
  ],
  "dress-gender-reading": [
    "classification-gender-reading",
    "embodiment",
    "measurement",
    "computational-methods",
  ],
  "makeup-and-norms": [
    "embodiment",
    "queer-affect",
    "classification-gender-reading",
  ],
  "between-silence-and-silence": [
    "intimacy",
    "communities-institutions",
    "identity-non-recognition",
  ],
  "tefu-temple": [
    "communities-institutions",
    "identity-non-recognition",
    "queer-affect",
  ],
  "trans-disqualified": [
    "queer-affect",
    "identity-non-recognition",
    "communities-institutions",
  ],
  "imagined-bad-money": [
    "communities-institutions",
    "classification-gender-reading",
    "identity-non-recognition",
  ],
} satisfies Record<string, readonly ThemeId[]>;

export const selectedWriting = [
  {
    id: "masculinist-feminism",
    order: 1,
    titleZh: "我们为何警惕“阳刚女性主义”",
    subtitleZh: "兼论 bottom shame 与厌跨女症",
    titleEn: "Why We Should Be Wary of “Masculinist Feminism”",
    subtitleEn: "On Bottom Shame and Transmisogyny",
    date: "2026-02-23",
    url: "https://mp.weixin.qq.com/s/efeeKpUxsxD24Ets5wddSQ",
    themes: writingThemeAnnotations["masculinist-feminism"],
  },
  {
    id: "layers-of-gender",
    order: 2,
    titleZh: "“性别”究竟有多少层？",
    subtitleZh: "一份关于自我性别理解的概念清单",
    titleEn: "How Many Layers Does “Gender” Have?",
    subtitleEn: "A Conceptual Map of How We Understand Our Own Gender",
    date: "2026-04-24",
    url: "https://mp.weixin.qq.com/s/0mUAvZp9hxnL3nmmcJagMQ",
    themes: writingThemeAnnotations["layers-of-gender"],
  },
  {
    id: "xingzhi-translation",
    order: 3,
    titleZh: "一指定终身",
    subtitleZh: "将 sex 翻译为“性指”的提案",
    titleEn: "Pointed Once, Fixed for Life",
    subtitleEn: "A Proposal to Translate Sex as 性指 (Xingzhi)",
    date: "2026-03-26",
    url: "https://mp.weixin.qq.com/s/wq1N3huaRgBDR4NwkSzpNQ",
    themes: writingThemeAnnotations["xingzhi-translation"],
  },
  {
    id: "body-theory-toolbox",
    order: 4,
    titleZh: "身体理论工具箱·导言",
    subtitleZh: "重绘跨儿身体的感受地图",
    titleEn: "The Body Theory Toolbox: An Introduction",
    subtitleEn: "Remapping the Felt Topography of Trans Bodies",
    date: "2026-04-16",
    url: "https://mp.weixin.qq.com/s/JLCvxTjsw97JGnNL2D1RXw",
    themes: writingThemeAnnotations["body-theory-toolbox"],
  },
  {
    id: "nanniang-no-future",
    order: 5,
    titleZh: "生活在别处？",
    subtitleZh: "“男娘”、无未来与人类学",
    titleEn: "Living Elsewhere?",
    subtitleEn: "Nanniang / Femboy, No Future, and Anthropology",
    date: "2026-05-01",
    url: "https://mp.weixin.qq.com/s/jUZKmnDM1LbA8XDARwvSJQ",
    themes: writingThemeAnnotations["nanniang-no-future"],
  },
  {
    id: "dress-gender-reading",
    order: 6,
    titleZh: "一条裙子改变了什么？",
    subtitleZh: "我们用机器学习拆解了“性别读取”的黑盒",
    titleEn: "What Difference Can a Dress Make?",
    subtitleEn:
      "Unfolding the Black Box of “Gender Reading” with Machine Learning",
    date: "2026-05-14",
    url: "https://mp.weixin.qq.com/s/m2A8eVORHzrPogIxtQDSXA",
    themes: writingThemeAnnotations["dress-gender-reading"],
  },
  {
    id: "makeup-and-norms",
    order: 7,
    titleZh: "我想化妆，但这不够“进步”",
    subtitleZh: "欲望为何会朝向规范",
    titleEn: "I Want to Wear Makeup, but That Isn’t “Progressive” Enough",
    subtitleEn: "Why Desire Turns Toward Norms",
    date: "2026-07-04",
    url: "https://mp.weixin.qq.com/s/-npogEdhqp4Mkzccl-Qabg",
    themes: writingThemeAnnotations["makeup-and-norms"],
  },
  {
    id: "between-silence-and-silence",
    order: 8,
    titleZh: "在沉默与沉默之间",
    subtitleZh: "《上海拉拉》中的女性同志主体与微观抵抗",
    titleEn: "Between Silence and Silence",
    subtitleEn: "Lesbian Subjectivity and Micro-Resistance in Shanghai Lalas",
    date: "2026-04-26",
    url: "https://mp.weixin.qq.com/s/gIy7TLuqWu5-vKh0g8wsZg",
    themes: writingThemeAnnotations["between-silence-and-silence"],
  },
  {
    id: "tefu-temple",
    order: 9,
    titleZh: "“纯虚构”文学",
    subtitleZh: "一位跨女来到特福（TERF）殿前",
    titleEn: "“Pure Fiction”",
    subtitleEn: "A Trans Woman Before the TEFU(TERF) Temple",
    date: "2026-04-21",
    url: "https://mp.weixin.qq.com/s/lJuIK8ucnhH9rDa0pik7bg",
    themes: writingThemeAnnotations["tefu-temple"],
  },
  {
    id: "trans-disqualified",
    order: 10,
    titleZh: "跨儿“失格”",
    subtitleZh: "身为跨儿，我很抱歉",
    titleEn: "Trans, Disqualified",
    subtitleEn: "As a Trans Person, I’m Sorry",
    date: "2025-12-28",
    url: "https://mp.weixin.qq.com/s/sK1HsZ5JItgEWGuRiF8AWA",
    themes: writingThemeAnnotations["trans-disqualified"],
  },
  {
    id: "imagined-bad-money",
    order: 11,
    titleZh: "想象中的“劣币”",
    subtitleZh: "排跨话语、“过度女性化”指控与柠檬市场逻辑",
    titleEn: "The Imagined “Bad Money”",
    subtitleEn:
      "Trans-Exclusionary Discourse, Accusations of “Excessive Femininity,” and the Logic of the Market for Lemons",
    date: "2026-01-23",
    url: "https://mp.weixin.qq.com/s/Y0_Z-XT-DYUoDGj_EvdBVA",
    themes: writingThemeAnnotations["imagined-bad-money"],
  },
] satisfies SelectedWritingItem[];

export const contact = {
  email: "xxa.xenia@gmail.com",
  orcid: "https://orcid.org/0009-0002-0618-451X",
  linkedin: "https://www.linkedin.com/in/xenia-jiang/",
  witchTideUrl: selectedWriting[0].url,
} as const;

export const siteContent = {
  site: {
    locale: "en",
    homeHref: "/",
    metadata: {
      defaultTitle: "Xenia Jiang — Academic Homepage",
      titleTemplate: "%s — Xenia Jiang",
      description: "The academic homepage of Xenia Jiang.",
    },
    homeMetadata: {
      title: "Xenia Jiang — Academic Homepage",
      description: "Xenia Jiang, Researcher at Peking University.",
    },
  },
  person: {
    englishName: "Xenia Jiang",
    chineseName: "姜浸月",
    nameSeparator: "/",
    role: "Sociology and Gender Researcher",
    institution: "Peking University",
    introduction: [
      "Xenia Jiang is a researcher in sociology and gender studies at Peking University. Her work focuses on middle-range mechanisms related to embodied gender expression, gender reading, classification, and minority stress. She is especially concerned with the social settings of identity adoption and (non-)recognition, tracing the gendered social processes and institutions through which identities are formed. Her current research concerns the lived experiences of transgender, gender-nonconforming, and asexual people.",
      "Trained in statistics, she often uses large-scale social surveys to investigate concrete problems of gender measurement. She challenges cisnormative assumptions built into survey questions and develops interactionist reconstructions of measurement. At the same time, she engages closely with the lived experiences of queer people and cross-dressers in China, examining how their encounters with classification systems are embedded in broader social mechanisms.",
      "Her research agenda places body sizing, queer shame, queer identity adoption, nonstandard intimacy, and gender nonconformity within the tension between classification and counter-classification. With an anthropological orientation, she observes possible forms of queer life in the Global South beyond identity recognition. She is currently exploring how computational social science methods, including agent-based modeling and natural language processing, can support the deeper unfolding of these questions.",
      "As a Chinese-language public writer, Xenia publishes independently on WeChat through *WitchTide* (巫语潮信). Her writing begins with experiences in transgender and queer life that remain poorly understood or lack stable names, moving between personal narrative, social theory, empirical research, and community politics. Her interlocutors include Hil Malatino, Elizabeth Grosz, Joan Acker, and Sara Ahmed, whose writings she translates and critically reinterprets in relation to embodied experience, shame and desire, identity formation, and practices of boundary-making and exclusion within Chinese queer communities. She also translates methodological questions in survey measurement, machine learning, and health research into terms that can enter public debate. Through this work, she develops new conceptual language, including her proposal to translate *sex* as “性指” and an embodied model of gender stratification, to examine how norms work through bodies, intimate relationships, and community life, and how queer subjects feel, negotiate, and act within these structures.",
    ],
    portrait: "/images/portrait.png",
    portraitAlt: "Portrait of Xenia Jiang",
  },
  navigation: [
    { label: "Research", href: "#research" },
    { label: "Writing", href: "#writing" },
    { label: "Education · Contact", href: "#background" },
  ] satisfies NavigationItem[],
  accessibility: {
    homeLabel: "Xenia Jiang home",
    primaryNavigationLabel: "Primary navigation",
    mobileNavigationLabel: "Mobile navigation",
  },
  interface: {
    menuOpenLabel: "Close",
    menuClosedLabel: "Menu",
    researchHeading: "Research",
    researchAgendasHeading: "Research Agendas",
    arrowSymbol: "→",
  },
  home: {
    introduction: [
      "Xenia Jiang is a researcher in sociology and gender studies at Peking University. Her work focuses on middle-range mechanisms related to embodied gender expression, gender reading, classification, and minority stress. She is especially concerned with the social settings of identity adoption and (non-)recognition, tracing the gendered social processes and institutions through which identities are formed. Her current research concerns the lived experiences of transgender, gender-nonconforming, and asexual people.",
      "Trained in statistics, she often uses large-scale social surveys to investigate concrete problems of gender measurement. She challenges cisnormative assumptions built into survey questions and develops interactionist reconstructions of measurement. At the same time, she engages closely with the lived experiences of queer people and cross-dressers in China, examining how their encounters with classification systems are embedded in broader social mechanisms.",
    ],
    publicWriterIntroduction:
      "As a Chinese-language public writer, Xenia publishes independently on WeChat through *WitchTide* (巫语潮信).",
  },
  research: [
    {
      id: "re-situating-gender-nonconformity",
      number: "01",
      title: "Re-situating Gender Nonconformity",
      subtitle:
        "Reference Points, Life Stage, and SOGIE Measurement in Health Disparities Research",
      description:
        "Situated GNC reframes gender nonconformity along two distinct dimensions: gender reference point and life stage. It challenges the routine use of assigned gender as the default reference for adult GNC measurement and advances perceived-reference GNC as an interactionally grounded alternative for transgender and nonbinary health research.",
      href: "#research-situated-gender-nonconformity",
      themes:
        researchThemeAnnotations["re-situating-gender-nonconformity"],
    },
    {
      id: "uneven-diffusion-of-queer-identity",
      number: "02",
      title: "The Uneven Diffusion of Queer Identity",
      subtitle:
        "Gendered Adoption and LGBTQ Organizational Discourse across Europe",
      description:
        "Who adopts queer as an identity, and under what social and institutional conditions does it spread? The project treats queer identification as a layered self-classification adopted unevenly across specific gender–sexuality positions, rather than as a uniform umbrella identity. Across 30 European countries, it traces durable gendered differences in adoption and investigates how queer language becomes embedded in the definitions and everyday functions of LGBTQ organizations.",
      href: "#research-queer-identification-across-europe",
      themes:
        researchThemeAnnotations["uneven-diffusion-of-queer-identity"],
    },
    {
      id: "minority-stress-pathways",
      number: "03",
      title: "Minority Stress Pathways and Transgender Mental Health Outcomes",
      subtitle:
        "A National Survey of Transgender and Gender-Diverse Individuals in China",
      description:
        "Based on the 2021 National Transgender Health Survey in China, covering 7,625 transgender and gender-diverse respondents nationwide, this study examines how the Minority Stress Model travels beyond the North American and European settings in which it was largely developed. Structural equation modeling, Bayesian causal network analysis, and outcome-specific regression models are combined to map the pathways linking minority stress, protective resources, and mental health within China’s sociocultural and institutional context.",
      href: "#research-china-trans-survey-2021",
      themes: researchThemeAnnotations["minority-stress-pathways"],
      status:
        "Accepted for presentation at the WPATH Scientific Symposium, 2026",
    },
    {
      id: "transgender-height",
      number: "04",
      title:
        "Height, Internalized Stigma, and Embodied Constraints in Transgender Lives",
      subtitle: "Evidence from a Large-Scale Survey in China",
      description:
        "Height is approached here as part of the social organization of embodiment, not as a neutral physical attribute. The study examines how it conditions gender expression, public appearance, and the ways transgender bodies are read and constrained in everyday interaction. It further traces how these embodied constraints become internalized and translated into patterned mental-health vulnerability among transgender women, transgender men, and nonbinary people.",
      href: "#research-trans-height",
      themes: researchThemeAnnotations["transgender-height"],
    },
    {
      id: "contained-gender-transgression",
      number: "05",
      title: "Contained Gender Transgression",
      subtitle:
        "Hanfu Cross-dressing and Queer Shame at Historical Sites of Luoyang",
      description:
        "How can a gender-transgressive body become temporarily legitimate without becoming socially livable? Drawing on ethnographic research in Luoyang’s Hanfu tourism economy, this study examines how cross-gender styling is contained within spatial, temporal, and aesthetic boundaries. Gender transgression becomes tolerable when it is framed as temporary, visual, and consumable, suspending queer shame within the scene while allowing it to return once the body re-enters everyday life.",
      href: "#research-contained-gender-transgression-in-luoyang",
      themes:
        researchThemeAnnotations["contained-gender-transgression"],
      status:
        "Accepted for presentation at the American Anthropological Association Annual Meeting, 2026",
    },
    {
      id: "asexuality-and-qpr",
      number: "06",
      title: "Asexuality and QPR in China",
      subtitle:
        "Community Vocabularies, Negotiation Tools, and Staircase-like Outward Naming",
      description:
        "How do asexual and QPR participants in China build relationships when available language does not quite fit? Based on in-depth interviews, this study traces how participants encounter QPR and asexual vocabularies through community networks, then test, reshape, or refuse the scripts these terms carry. Some turn these resources into relationship practices through tables and explicit negotiation. In a context where care, medical decision-making, property, and kinship rights remain organized around marriage and legal family, participants develop staircase-like outward naming practices to make their relationships differently legible across intimate, familial, communal, and institutional settings.",
      href: "#research-queerplatonic-relationships-and-asexual-intimacy",
      themes: researchThemeAnnotations["asexuality-and-qpr"],
    },
  ] satisfies ResearchProject[],
  researchAgendas: [
    {
      id: "sizing-gender",
      number: "01",
      title: "Sizing Gender",
      subtitle: "Bodily Classification and Discipline in Shoe Size Systems",
      description:
        "What happens when bodily measurements are translated into gendered numbers? This agenda examines shoe sizing as an infrastructure of classification that assigns different numerical meanings to comparable bodies and leaves some bodies between institutional categories. It connects the design of size charts and anthropometric knowledge to the everyday size labor through which transgender women and larger-bodied women search for wearable, intelligible, and socially acceptable forms.",
      href: "#agenda-sizing-gender",
      themes: researchAgendaThemeAnnotations["sizing-gender"],
    },
    {
      id: "queer-shame-temporal-rupture",
      number: "02",
      title: "Queer Shame and the Tyranny of Temporal Rupture",
      description:
        "Queer shame does more than diminish the present self. It can reorganize the past as evidence of failure and narrow the future into anticipation, correction, or escape. This agenda examines how classificatory power enters queer temporal experience, and how the resulting breaks in personal continuity are recoded as individual psychological vulnerability. It also asks how queer subjects rebuild limited forms of narrative continuity and temporal sovereignty without pretending that shame or structural pressure has disappeared.",
      href: "#agenda-queer-shame",
      themes:
        researchAgendaThemeAnnotations["queer-shame-temporal-rupture"],
    },
  ] satisfies ResearchAgenda[],
  themeOptions,
  selectedWriting,
  dialoguesAndTranslations: [
    {
      author: "Joan Acker",
      year: "1992",
      title: "性别研究的转向：从角色到制度",
    },
    {
      author: "Leslie McCall",
      year: "2005",
      title: "“交叉性”视角如何处理复杂议题？",
    },
    {
      author: "Sara Ahmed",
      title: "酷儿定向的现象学",
    },
  ] satisfies DialogueItem[],
  background: {
    heading: "Background",
    educationHeading: "Education",
    education: [
      {
        primary: "Peking University",
        details: [
          "Graduate Student · Trained in Sociology and Gender Studies",
        ],
      },
      {
        primary: "Fudan University",
        details: ["B.S. in Statistics"],
      },
      {
        primary: "University of California, Berkeley",
        details: ["Exchange Student"],
      },
    ],
    contactHeading: "Contact",
    contactItems: [
      {
        label: "Email",
        value: contact.email,
        href: `mailto:${contact.email}`,
      },
      { label: "ORCID", value: "0009-0002-0618-451X", href: contact.orcid },
      {
        label: "LinkedIn",
        value: "Xenia Jiang",
        href: contact.linkedin,
      },
      {
        label: "WeChat Platform",
        value: "WitchTide",
        detail: "巫语潮信",
        href: contact.witchTideUrl,
      },
    ],
  },
  cvPage: {
    kicker: "Curriculum Vitae",
    title: "CV to be provided",
    body: "[CV CONTENT OR FILE TO BE PROVIDED BY XENIA]",
    returnLabel: "Return home",
    returnHref: "/",
  },
  externalLinks: [],
} as const;

export type SiteContent = typeof siteContent;
