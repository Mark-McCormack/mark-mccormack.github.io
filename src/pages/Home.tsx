import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout, { Chip, Collapsible, sectionStyle } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import useData from "../hooks/useData";
import { Item, LINKEDIN, pageOf, profiles } from "../content";
import photo from "../assets/images/profile-real.jpg";

const palette = { teal: "#00d1b2", yellow: "#ffe08a", navy: "#0b3e77", red: "#d23d5a", green: "#48c78e" };

const highlights: [color: keyof typeof palette, title: string, body: string][] = [
  [
    "teal",
    "Expertise",
    "First Class Honours degree in Computer Science and Software Engineering, and a Ph.D. in AI in Education with collaborative technologies at Maynooth University.",
  ],
  [
    "yellow",
    "Teaching Experience",
    "I've lectured at Maynooth, DCU, Fuzhou and Tor Vergata, and tutored and demonstrated on many computer science modules.",
  ],
  [
    "navy",
    "Research",
    "My main focus is AI in collaborative education. I'm also interested in large language models and computational neuroscience.",
  ],
  [
    "red",
    "Software Engineer",
    "Over ten years of programming, from the SAP Fiori toolkit to LLM tools, genetic algorithms and web development.",
  ],
  ["red", "Industry Experience", "I've worked in industry as a UI/UX and DevOps engineer at SAP Technologies."],
  [
    "navy",
    "Student Projects",
    "I supervise capstone projects in AI in Education, web development and natural language processing.",
  ],
  [
    "yellow",
    "Pedagogical Approach",
    "I teach through projects: real problems, lots of collaboration and hands-on practice, in a class where everyone can take part.",
  ],
  [
    "teal",
    "Affiliations",
    "I've taught sessions for Maynooth, Fuzhou, Texas Tech and DCU, and helped out at CoderDojo in Portarlington and Maynooth.",
  ],
];

const focusAreas: typeof highlights = [
  [
    "yellow",
    "AI in Education Research",
    "Showcasing student-led innovation in AI for learning, from RAG systems to pedagogical tools that support teaching, assessment, and personalised study experiences.",
  ],
  [
    "navy",
    "Student Mentorship",
    "Mentoring undergraduates and postgraduates through capstone projects, research theses, and collaborative development work that blends academic inquiry with practical impact.",
  ],
  [
    "red",
    "Curriculum Innovation",
    "Designing experiential modules in software engineering, AI, and EdTech that challenge students to build real-world systems and think critically about digital learning.",
  ],
  [
    "green",
    "Academic & Industry Reach",
    "Connecting teaching, research, and industry through partnerships, collaborative projects and community outreach that extend learning beyond the classroom.",
  ],
];

const Blurbs = ({ items }: { items: typeof highlights }) => (
  <div className="blurbs">
    {items.map(([color, title, body]) => (
      <article key={title} className="blurb" style={sectionStyle(palette[color])}>
        <Collapsible className="blurb-inner" label={title} heading={<h3 className="blurb-title">{title}</h3>}>
          <p>{body}</p>
        </Collapsible>
      </article>
    ))}
  </div>
);

// A home-page preview of one section, in that section's colour, linking to the full page.
const Preview = ({ path, heading, children }: { path: string; heading: string; children: ReactNode }) => {
  const page = pageOf(path);
  return (
    <section className="wrap home-section" style={sectionStyle(page.color, page.onColor)} aria-labelledby={`h-${path}`}>
      <div className="section-head">
        <h2 id={`h-${path}`} className="section-title">
          <Chip>{path.replace("-", " ")}</Chip>
          {heading}
        </h2>
        <Link className="text-link" to={`/${path}`}>
          View all<span className="is-sr-only"> {page.title.toLowerCase()}</span> →
        </Link>
      </div>
      {children}
    </section>
  );
};

const Home: React.FC = () => {
  const research = useData<Item>("research").data;
  const teaching = useData<Item>("teaching").data;
  const students = useData<Item>("students").data;

  return (
    <Layout className="home" title="Portfolio">
      <section className="hero-ed wrap" aria-labelledby="page-title">
        <div className="hero-text">
          <p className="kicker">Computer Science Education · AI in Education</p>
          <h1 id="page-title" className="display name">
            Mark P. McCormack, <em>Ph.D.</em>
          </h1>
          <p className="lede">
            Lecturer and researcher in Computer Science Education, with a Ph.D. in AI in Education and over a decade of
            software engineering.
          </p>
          <p className="now">
            Currently a Research Fellow (postdoctoral researcher) at the University of Rome Tor Vergata. Previously a
            lecturer at Maynooth University and Dublin City University.
          </p>
          <div className="actions">
            <a className="btn-ed" href={LINKEDIN}>
              Get in touch
            </a>
            <a className="text-link" href={profiles[0][1]} target="_blank" rel="noopener noreferrer">
              Google Scholar →<span className="is-sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={photo} alt="Mark P. McCormack" />
        </figure>
      </section>

      <section className="wrap" aria-label="Key facts">
        <dl className="facts">
          {[
            ["10+", "years teaching", palette.teal],
            ["5", "universities", palette.yellow],
            [research.length || 7, "peer-reviewed papers", palette.red],
            [students.length || 40, "student projects supervised", "#009fff"],
          ].map(([n, label, color]) => (
            <div key={label} style={{ borderTopColor: String(color) }}>
              <dt>{label}</dt>
              <dd>{n}</dd>
            </div>
          ))}
        </dl>
      </section>

      <figure className="wrap quote">
        <blockquote>
          “Anyone can become great at anything with the right teacher, and that's what I aim to be!”
        </blockquote>
      </figure>

      <section className="wrap home-section" aria-labelledby="h-about">
        <Collapsible
          className="about"
          label="About me"
          heading={
            <h2 id="h-about" className="section-title">
              About me
            </h2>
          }
        >
          <div className="prose columns-2">
            <p>
              I've been teaching computer science for over ten years, at Maynooth University, Dublin City University,
              Fuzhou University and Texas Tech, and I'm now a Research Fellow at the University of Rome Tor Vergata. I
              like teaching through real projects, so students leave with skills they can use, not just theory.
            </p>
            <p>
              My research looks at how AI can support learning, especially when students learn together: AI tutors,
              shared annotation, and what these tools change for students and teachers. I also supervise capstone
              projects, and it's been great to see many of those students go on to careers in tech.
            </p>
          </div>
        </Collapsible>
      </section>

      <section className="wrap home-section" aria-labelledby="h-glance">
        <h2 id="h-glance" className="section-title">
          At a glance
        </h2>
        <Blurbs items={highlights} />
      </section>

      <Preview path="research" heading="Selected publications">
        <div className="rows">
          {research.slice(0, 3).map((item) => (
            <ProjectCard key={item.title} {...item} variant="row" level="h3" thumb={false} />
          ))}
        </div>
      </Preview>

      <Preview path="teaching" heading="Current courses">
        <div className="rows">
          {teaching.slice(0, 2).map((item) => (
            <ProjectCard key={item.title} {...item} variant="row" level="h3" />
          ))}
        </div>
      </Preview>

      <Preview path="students" heading="Student projects">
        <div className="scroller" tabIndex={0} aria-label="Student projects, scrollable">
          {students.slice(0, 12).map((item) => (
            <ProjectCard key={item.title} {...item} level="h3" />
          ))}
        </div>
      </Preview>

      <section className="wrap home-section" aria-labelledby="h-focus">
        <h2 id="h-focus" className="section-title">
          Focus areas
        </h2>
        <Blurbs items={focusAreas} />
      </section>
    </Layout>
  );
};

export default Home;
