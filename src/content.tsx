import { ReactNode } from "react";

export type Item = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  url?: string;
  group?: string; // section heading on pages that define `groups`
  year?: string;
  hidden?: boolean; // kept in the JSON but not shown
};

export type PageConfig = {
  path: string;
  json: string;
  title: string;
  tagline?: string;
  intro: ReactNode;
  img: string;
  color: string; // section colour: menu dot, labels and accents
  onColor?: string; // text colour on the section colour, when white is needed
  layout?: "list" | "cards"; // list suits text-heavy entries (papers, courses, talks)
  thumbs?: false; // hide entry images (e.g. papers, which have no real image)
  links?: [label: string, href: string][];
  groups?: [name: string, description: string][]; // entries are shown under these headings, in this order
  newestFirst?: true; // the JSON lists entries oldest first
  groupByYear?: true; // one group per `year`, newest first; entries without a year go last
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1600&auto=format&fit=crop&q=70`;

export const LINKEDIN = "https://www.linkedin.com/in/mark-patrick-mccormack/";
export const profiles: [label: string, href: string][] = [
  ["Google Scholar", "https://scholar.google.com/citations?view_op=list_works&hl=en&user=sgOfPUsAAAAJ"],
  ["ORCID", "https://orcid.org/0009-0000-0281-3011"],
  ["ACM", "https://dl.acm.org/profile/99660948439"],
  ["ResearchGate", "https://www.researchgate.net/profile/Mark-Mccormack-7"],
  ["Academia.edu", "https://independent.academia.edu/MarkMcCormack16"],
];

const universities: [abbr: string, name: string, href: string][] = [
  ["MU", "Maynooth University", "https://www.maynoothuniversity.ie/"],
  ["DCU", "Dublin City University", "https://www.dcu.ie"],
  ["TTU", "Texas Technology University", "https://www.ttu.edu"],
  ["FU", "Fuzhou University", "https://en.fzu.edu.cn/"],
  ["UTV", "University of Rome Tor Vergata", "https://web.uniroma2.it/"],
];
const uni = (i: number) => (
  <a href={universities[i][2]}>
    <b>{universities[i][1]}</b>
  </a>
);

const teachingIntro = (
  <>
    Throughout the past several years, I have had the opportunity to work with several leading institutions in leading
    their teaching. I have taught courses globally within the realm of Computer Science Education and always strive to
    incorporate the theory into the practice such that students come away more knowledgable and with tangeble skills.
    <br />
    <br />I have taught at both {uni(0)} and {uni(1)} on undergraduate and postgraduate courses, and I am now a Research
    Fellow at the {uni(4)}. Below are some shorthand acronyms for institutions I've been fortunate to teach alongside.
    <br />
    <br />
    {universities.map(([abbr], i) => (
      <span key={abbr}>
        <b>{abbr}</b> - {uni(i)}
        <br />
      </span>
    ))}
  </>
);

export const pages: PageConfig[] = [
  {
    path: "teaching-statement",
    color: "#48c78e",
    json: "teaching-statement",
    layout: "list",
    thumbs: false, // text entries; a list reads better than stock-photo cards
    title: "Teaching Statement",
    tagline: "My Principles for an Excellent Learning Experience!",
    intro: teachingIntro,
    img: unsplash("1594122230689-45899d9e6f69"),
    groups: [
      ["About me", "Who I am, how I teach and where my research is going."],
      ["Teaching", "Roles, modules, supervision and invited talks."],
      ["Research", "Publications, conferences, collaborators and placements."],
      ["Funding", "Scholarships and grants that support my work."],
      ["Service & development", "Memberships, service roles, volunteering and ongoing learning."],
      ["Recommendations", "What colleagues have said about my teaching (from LinkedIn)."],
    ],
  },
  {
    path: "research",
    color: "#00d1b2",
    layout: "list",
    thumbs: false,
    json: "research",
    title: "Research Projects",
    tagline: "Pushing the Boundary of AIEd and CSE!",
    intro: (
      <>
        This page features a collection of my research papers, where I explore the intersection of AI, education, and
        collaborative technologies. My work focuses on how AI can enhance learning experiences, improve educational
        outcomes, and foster collaboration between humans and intelligent systems.
        <br />
        <br />
        Whether it's examining AI's role in personalized learning, studying how collaborative AI can support teamwork
        and problem-solving, or looking at the impact of educational technology (EdTech) on transforming traditional
        teaching methods, my research seeks to expand our understanding of education in the digital age.
        <br />
        <br />
        Each paper represents my passion for discovering how emerging technologies can make learning more accessible,
        engaging, and effective.
      </>
    ),
    links: profiles,
    img: unsplash("1623631633177-7fbb2d3ae94d"),
  },
  {
    path: "students",
    color: "#d23d5a",
    onColor: "#fff",
    json: "students",
    title: "Student Projects",
    tagline: "Amazing Projects from Past Students!",
    intro: (
      <>
        As a teacher, it's been incredible watching my students explore the world of computer science and AI, taking on
        projects that really push their creativity and problem-solving skills. This page is a showcase of their
        work—each project is unique and reflects the individual talents, ideas, and dedication they've put into learning
        these challenging concepts.
        <br />
        <br />
        Some have built fun AI experiments, while others have come up with creative coding solutions to real-world
        problems. It's inspiring to see how they’ve grown not only in their technical skills but also in their ability
        to think critically and work collaboratively.
        <br />
        <br />
        These projects aren't just about writing code; they're about solving problems, experimenting with new
        technologies, and imagining the future. I’m so proud of what they’ve accomplished, and I’m excited to share
        their work with you.
      </>
    ),
    img: unsplash("1503676382389-4809596d5290"),
    groupByYear: true,
  },
  {
    path: "teaching",
    color: "#ffe08a",
    layout: "list",
    json: "teaching",
    title: "Teaching",
    tagline: "Classes, Demonstrations, Tutoring and Teaching!",
    intro: teachingIntro,
    img: unsplash("1594122230689-45899d9e6f69"),
  },
  {
    path: "academia",
    color: "#009fff",
    layout: "list",
    json: "conferences",
    title: "Academia",
    tagline: "Conferences, Journals, Funding and More!",
    intro: (
      <>
        Within my doctoral studies, I have presented, attended and chaired several noteworthy conferences across the
        globe. My contributions range from papers to research sessions to keynotes and doctoral consortiums. With these
        conferences, I always look to connect with others in the field to produce new and novel ideas and increase my
        undesratnding of the field.
        <br />
        <br />
        These conferences and journals range in topic, from pure education to Computer Science focused, Collaborative
        Learning and many falling somewhere in the middle given the interdisciplinary nature of my research,
        <br />
        <br />
        For further information regarding publications and events, please find links to several profiles (Google
        Scholar, ACM, ORCiD etc.) on the "Research" section of my portfolio.
      </>
    ),
    img: unsplash("1505664194779-8beaceb93744"),
    groups: [
      ["Conferences", "Papers, symposia and sessions at international education and computing conferences."],
      [
        "Keynotes & invited talks",
        "Keynotes and invited talks for universities, summer schools and professional groups.",
      ],
      ["Workshops & seminars", "Hands-on sessions, seminars and webinars I have run, chaired or taken part in."],
      ["Posters & showcases", "Posters and showcase presentations of my research."],
    ],
    newestFirst: true,
  },
  {
    path: "skills",
    color: "#e0a526",
    json: "skills",
    title: "Skills",
    tagline: "Always Learning, Always Improving!",
    intro: (
      <>
        As someone who's always eager to grow and challenge myself, this page highlights a range of skills I've
        developed across different fields, from neurocomputing to languages. Each area has given me a unique
        perspective, and I'm constantly pushing to combine these disciplines in ways that help me solve complex problems
        more creatively.
        <br />
        <br />
        Whether it's exploring neural networks and AI, exploring the intricacies of human language, or improving my
        ability to communicate across different mediums, I'm always learning and expanding my toolkit.
        <br />
        <br />
        This portfolio is a reflection of that journey—a mix of technical expertise, curiosity, and a drive to keep
        getting better. I'm excited to share this collection with you, and I hope it offers a glimpse into the passion
        and effort I bring to everything I take on!
      </>
    ),
    img: unsplash("1557149769-d376acfba1f1"),
    groups: [
      ["Neuroscience", "Courses on the brain and computational neuroscience."],
      ["AI & computing", "Courses in AI, large language models and game theory."],
      ["Languages", "Languages I am learning."],
    ],
  },
  {
    path: "projects",
    color: "#0b3e77",
    onColor: "#fff",
    json: "projects",
    title: "Personal Projects",
    tagline: "Some Fun Comp. Sci. Projects!",
    intro: (
      <>
        This page showcases a variety of my personal computer science projects, where I’ve applied my skills and
        creativity to tackle interesting challenges. From building AI-driven tools to developing software solutions,
        each project reflects my curiosity and passion for problem-solving.
        <br />
        <br />
        Whether I’m experimenting with new algorithms, creating applications to address real-world needs, or exploring
        the latest advancements in technology, these projects are a way for me to put theory into practice.
        <br />
        <br />
        I’m always looking for new ways to grow as a developer, and these projects are a testament to that journey. I
        hope you enjoy checking them out as much as I enjoyed building them!
      </>
    ),
    img: unsplash("1455894127589-22f75500213a"),
    groups: [
      ["VR & AR", "Virtual and augmented reality experiences."],
      ["AI & machine learning", "Projects that learn from data."],
      ["Games & simulations", "Games and interactive simulations."],
      ["Tools & apps", "Small tools for everyday use."],
    ],
  },
  {
    path: "blogs",
    color: "#ff82aa",
    json: "blog",
    title: "Blogs",
    intro: (
      <>
        During the weekly research, once I get the time, I like to engage in some writing on one of my several blogs.
        The aim for most of these is to provide an outlet for ideas and knowledge in a more conversational/less formal
        manner.
        <br />
        <br />
        I look into subject such as the daily academic life, interesting breakthroughts in Computer Science and a
        handful of theories I have in the area, which may not be fit for a paper (just yet!).
        <br />
        <br />
        Within the blogs, I hope to facilitate a glimpse into the life of academics in the realm of computer scientists.
        So, for those of you considering this as an area in the future, be sure to keep up to date! And for those
        others, I hope you gain some food for thought on new CS areas and what this may mean.
      </>
    ),
    img: unsplash("1457369804613-52c61a468e7d"),
  },
  {
    path: "business",
    color: "#e0a526",
    json: "business",
    title: "Businesses",
    tagline: "Projects Designed to Help Others!",
    intro: (
      <>
        This page highlights a selection of my business projects, each designed to tackle complex challenges and create
        meaningful solutions. Some of the projects I have worked on over the years have expanded, grown, and developed
        in scope, and it would be a shame to leave them lying somewhere on a USB.
        <br />
        <br />
        For these more advanced initiatives, which provide users with valuable services, I’ve converted them into Free
        and Open Source Software (FOSS) businesses. The aim of these projects is not to gain capital but to offer useful
        tools to those who truly need them.
        <br />
        <br />I focus on identifying problems and finding ways to address them that not only make a difference but also
        drive positive outcomes for individuals and organizations. Through these initiatives, I've honed my skills in
        project management, strategic thinking, and collaboration.
      </>
    ),
    img: unsplash("1431540015161-0bf868a2d407"),
  },
];

export const pageOf = (path: string) => pages.find((p) => p.path === path)!;

// Pages listed here are kept but not linked or routed. The menu follows the order of `pages` above.
export const hidden = ["blogs", "business"];
