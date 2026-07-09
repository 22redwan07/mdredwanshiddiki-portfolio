export const profile = {
  name: "Md. Redwan Shiddiki",
  shortName: "Redwan Shiddiki",
  title: "AI & Machine Learning Researcher",
  subtitle: "Computer Vision · Deep Learning · Intelligent Software Systems",
  location: "Dhaka, Bangladesh",
  email: "seyam07redwan@gmail.com",
  phone: "+880 1977 672707",
  photo: "/profile.jpg",
  cv: "/redwan-shiddiki-cv.pdf",
  summary:
    "Final-year Computer Science and Engineering student with research experience across Artificial Intelligence, Machine Learning, Computer Vision, Deep Learning, and Intelligent Software Systems. Co-author of an IEEE conference publication and presenter at an international research conference, focused on building intelligent solutions for real-world challenges.",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Large Language Models",
    "Generative AI",
    "AI for Healthcare",
  ],
} as const

export const socials = {
  email: "mailto:seyam07redwan@gmail.com",
  github: "https://github.com/22redwan07",
  linkedin: "https://www.linkedin.com/in/md-redwan-shiddiki",
  scholar: "https://scholar.google.com/citations?user=TYgvMHUAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Redwan-S?ev=hdr_xprf",
  orcid: "https://orcid.org/0009-0004-0447-3750",
}

export const aboutStats = [
  { value: "1", label: "IEEE Publication" },
  { value: "2", label: "Intl. Conferences" },
  { value: "6+", label: "Research Projects" },
  { value: "3+", label: "Years Building" },
]

export const aboutParagraphs = [
  "I am a final-year Bachelor of Science student in Computer Science and Engineering at Manarat International University, Dhaka. My work sits at the intersection of applied artificial intelligence and thoughtful software engineering, with a particular focus on computer vision and deep learning for real-world impact.",
  "Through my research contributions I co-authored an IEEE conference paper and presented at the 28th International Conference on Computer and Information Technology. Alongside research, I design and ship cross-platform applications with Flutter, Firebase, and modern web technologies.",
  "I am seeking opportunities in graduate research, AI engineering, and international research collaboration — driven by a commitment to conducting impactful work and building intelligent systems that solve meaningful problems.",
]

export type Research = {
  title: string
  description: string
  tech: string[]
  area: string
  status: string
}

export const research: Research[] = [
  {
    title: "Cattle Disease Detection using Deep Learning",
    description:
      "Undergraduate thesis developing an automated cattle disease classification system, covering dataset collection, preprocessing, augmentation, and comparative model evaluation for AI-assisted livestock diagnosis.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2", "Custom CNN"],
    area: "Computer Vision · AI for Agriculture",
    status: "Thesis",
  },
  {
    title: "Bird Species Classification using MobileNetV2",
    description:
      "Image classification model for bird species recognition built with transfer learning, image preprocessing, and data augmentation, evaluated using standard classification metrics.",
    tech: ["Python", "TensorFlow", "MobileNetV2"],
    area: "Computer Vision · Transfer Learning",
    status: "Completed",
  },
  {
    title: "Olive Leaf Disease Classification",
    description:
      "Deep learning model for automated olive leaf disease classification with a custom CNN, including image preprocessing, model training, and performance evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Custom CNN"],
    area: "Computer Vision · Plant Pathology",
    status: "Completed",
  },
  {
    title: "Tomato Disease Detection",
    description:
      "AI-based tomato leaf disease classification system applying transfer learning techniques for reliable disease recognition across image datasets.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    area: "Computer Vision · Transfer Learning",
    status: "Completed",
  },
  {
    title: "Fake News Detection",
    description:
      "Machine learning system for detecting fake news using natural language processing, including text preprocessing, feature extraction, and model evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    area: "Natural Language Processing",
    status: "Completed",
  },
  {
    title: "Bangladesh 2.0 Research Framework",
    description:
      "Conceptual research on democratic transition and institutional reform, proposing a framework on governance, youth participation, digital transformation, and sustainable national development.",
    tech: ["Policy Research", "Data Analysis", "Survey Design"],
    area: "Governance · Public Policy · AI",
    status: "Presented",
  },
]

export type Publication = {
  title: string
  type: string
  venue: string
  publisher?: string
  authors: string
  date: string
  abstract: string
  role: string
  links: { label: string; href: string }[]
}

export const publications: Publication[] = [
  {
    title:
      "The Impact of Generative AI Interaction on Human Metacognition and Critical Thinking",
    type: "IEEE Conference Paper",
    venue: "28th International Conference on Computer and Information Technology (ICCIT 2025)",
    publisher: "IEEE",
    authors:
      "Arshad Al Galib, Md Anis Uddowla, Md Aminul Islam, Jakariya Abbas, Abdul Bashir, Redwan Seyam",
    date: "19 December 2025 · pp. 5793–5798",
    role: "Co-Author",
    abstract:
      "Investigates how sustained interaction with generative AI systems influences human metacognition and critical thinking, presenting empirical findings and implications for the responsible integration of AI into learning and reasoning workflows.",
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=TYgvMHUAAAAJ&hl=en" },
      { label: "IEEE Xplore", href: "#" },
      { label: "DOI", href: "#" },
    ],
  },
  {
    title:
      "Reimagining Bangladesh: The July Revolution of 2024 and the Foundations of Bangladesh 2.0",
    type: "Conference Abstract",
    venue: "3rd International Poster Competition for Young Researchers 2025 (UniV)",
    publisher: "Official Conference Abstract Book",
    authors: "Redwan Shiddiki Seyam, Fabiha Afaf Shauly, Jihad Hasan Naim",
    date: "4–5 October 2025",
    role: "First & Corresponding Author",
    abstract:
      "Presents a conceptual framework reimagining national development in the aftermath of the July Revolution of 2024, outlining foundations for governance reform, youth participation, and digital transformation.",
    links: [
      { label: "Abstract Book", href: "#" },
      { label: "PDF", href: "#" },
    ],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  features: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: "Patient Nest",
    description:
      "A healthcare management application connecting patients with healthcare services through a clean, responsive mobile experience.",
    image: "/projects/patient-nest.png",
    tech: ["Flutter", "Firebase", "Dart"],
    features: [
      "Secure user authentication",
      "Cloud database integration",
      "Responsive patient interface",
    ],
    github: "https://github.com/22redwan07",
    demo: "#",
  },
  {
    title: "Career Nest",
    description:
      "A career guidance and job management application designed around an intuitive user experience and responsive layouts.",
    image: "/projects/career-nest.png",
    tech: ["Flutter", "Firebase", "Dart"],
    features: [
      "Authentication & profiles",
      "Cloud database integration",
      "Intuitive job management",
    ],
    github: "https://github.com/22redwan07",
    demo: "#",
  },
  {
    title: "Ramadan Calendar",
    description:
      "A Ramadan calendar application featuring daily schedules and essential Islamic information within a clean, dynamic interface.",
    image: "/projects/ramadan-calendar.png",
    tech: ["Flutter", "Firebase", "Dart"],
    features: [
      "Daily prayer schedules",
      "Dynamic data management",
      "Clean responsive UI",
    ],
    github: "https://github.com/22redwan07",
    demo: "#",
  },
]

export type SkillGroup = {
  category: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 72 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      { name: "Deep Learning", level: 90 },
      { name: "Computer Vision", level: 88 },
      { name: "Transfer Learning", level: 85 },
      { name: "Natural Language Processing", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "PyTorch", level: 75 },
      { name: "OpenCV", level: 84 },
      { name: "Scikit-learn / Pandas / NumPy", level: 86 },
    ],
  },
  {
    category: "Software & Web",
    skills: [
      { name: "Flutter", level: 88 },
      { name: "React.js / Node.js", level: 76 },
      { name: "Firebase", level: 85 },
      { name: "Git & GitHub", level: 88 },
    ],
  },
]

export const toolBadges = [
  "MobileNetV2",
  "DenseNet",
  "VGG16",
  "Custom CNN",
  "Google Colab",
  "Kaggle",
  "Jupyter",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Express.js",
]

export type TimelineItem = {
  year: string
  title: string
  org: string
  description: string
  category: "Education" | "Research" | "Experience" | "Award" | "Presentation" | "Leadership"
}

export const timeline: TimelineItem[] = [
  {
    year: "Aug 2026",
    title: "B.Sc. in Computer Science & Engineering",
    org: "Manarat International University, Dhaka",
    description: "Expected graduation · Current CGPA 3.15 / 4.00.",
    category: "Education",
  },
  {
    year: "Dec 2025",
    title: "ICCIT 2025 — Paper Presentation",
    org: "IEEE · Cox's Bazar, Bangladesh",
    description:
      "Presented the IEEE paper on Generative AI, metacognition, and critical thinking at the 28th International Conference on Computer and Information Technology.",
    category: "Presentation",
  },
  {
    year: "Oct 2025",
    title: "Platinum Innovator Award — Top 25",
    org: "UniV · Intl. Poster Competition for Young Researchers",
    description:
      "Recognized among the top 25 participants for outstanding research innovation and poster presentation.",
    category: "Award",
  },
  {
    year: "2025 — Present",
    title: "Research Project Contributor",
    org: "Fusion of Research and Thoughts (FoRT)",
    description:
      "Contributed to AI and Generative AI research through literature review, data collection, experimental analysis, and scientific writing.",
    category: "Research",
  },
  {
    year: "2024 — Present",
    title: "Independent AI & ML Researcher",
    org: "Self-Employed · Remote",
    description:
      "Designing end-to-end AI workflows across computer vision and NLP, exploring LLMs, Edge AI, and intelligent automation.",
    category: "Research",
  },
  {
    year: "2023 — Present",
    title: "Flutter & Web Application Developer",
    org: "Self-Employed · Bangladesh",
    description:
      "Building cross-platform mobile and web applications with Flutter and Firebase, focused on performance and usability.",
    category: "Experience",
  },
  {
    year: "2022",
    title: "Data Collector",
    org: "Northern Electricity Supply Company Ltd. (NESCO)",
    description:
      "Collected and validated field data, maintaining data quality through systematic documentation.",
    category: "Experience",
  },
  {
    year: "2021 — 2022",
    title: "Private Tutor",
    org: "Rajshahi Tuition Media",
    description:
      "Provided personalized instruction in Mathematics, ICT, and Science, strengthening students' analytical thinking.",
    category: "Experience",
  },
  {
    year: "Ongoing",
    title: "General Secretary — MIU Sports Club",
    org: "Leadership & Community",
    description:
      "Coordinated club operations and organized sports, academic, and student engagement activities as team lead and organizer.",
    category: "Leadership",
  },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
]
