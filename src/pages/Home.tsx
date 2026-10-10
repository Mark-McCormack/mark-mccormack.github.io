import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Layout, { Collapsible, HeadCard } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Particles from "../components/Particles";
import useData from "../hooks/useData";
import { Item } from "../content";
import photo from "../assets/images/profile-real.jpg";

const roles = [
  "Lecturer of Computer Science",
  "Ph.D of Computer Science (AI in Education)",
  "Software Engineer",
  "Web Developer",
  "Full Stack Developer",
];

const highlights: [color: string, title: string, body: string][] = [
  [
    "primary",
    "Expertise",
    "Holding with a First Class Honours Bachelors Degree in Computer Science and Software Engineering, I'm currently immersed in a Ph.D. program focusing on AI in Education with Collaborative Technologies. For my studies, Maynooth University is my home institution!",
  ],
  [
    "warning",
    "Teaching Experience",
    "I've enthusiastically immersed myself in lecturing at Maynooth University, Fuzhou University, and Dublin City University. I've also tutored and demonstrated for several Computer Science subjects. Let's explore the world of code together!",
  ],
  [
    "navy",
    "Research",
    "Focused on primary research in Applications of Artificial Intelligence in Collaborative Education. Additionally, my interests extend to Large Language Models and Computational Neuroscience, showcasing a comprehensive commitment to cutting-edge CS studies.",
  ],
  [
    "danger",
    "Software Engineer",
    "With over a decade of programming expertise, it has become second nature! Experienced in diverse software projects, including the SAP Fiori Toolkit, with expertise in AI (LLMs), Genetic Algorithms, and Web Development, demonstrating versatility across domains.",
  ],
  [
    "danger",
    "Industry Experience",
    "With a diverse professional background, I've excelled outside education as a UI/UX and DevOps Engineer at SAP Technologies. This experience has honed my skills in Software Engineering, showcasing adaptability and expertise in dynamic industry settings.",
  ],
  [
    "navy",
    "Student Projects",
    "As an experienced mentor, I have successfully guided students through their capstone projects, fostering research excellence in domains such as AI in Education, Web Development, and Natural Language Processing.",
  ],
  [
    "warning",
    "Pedagogical Approach",
    "Employing a project-based learning approach, I foster an inclusive environment, integrating technology to enhance learning experiences. My teaching emphasizes continuous collaboration and practical exercises, allowing students to work on real-world issues.",
  ],
  [
    "primary",
    "Affiliations",
    "I've conducted impactful educational sessions for Maynooth, Fuzhou, Texas Tech and Dublin City University showcasing a commitment to academic excellence. Also, I've contributed my expertise through demonstrations and work at CoderDojo in Portarlington and Maynooth.",
  ],
];

const focusAreas: typeof highlights = [
  [
    "warning",
    "AI in Education Research",
    "Showcasing student-led innovation in AI for learning, from RAG systems to pedagogical tools that support teaching, assessment, and personalised study experiences.",
  ],
  [
    "navy",
    "Student Mentorship",
    "Mentoring undergraduates and postgraduates through capstone projects, research theses, and collaborative development work that blends academic inquiry with practical impact.",
  ],
  [
    "danger",
    "Curriculum Innovation",
    "Designing experiential modules in software engineering, AI, and EdTech that challenge students to build real-world systems and think critically about digital learning.",
  ],
  [
    "success",
    "Academic & Industry Reach",
    "Connecting teaching, research, and industry through partnerships, collaborative projects and community outreach that extend learning beyond the classroom.",
  ],
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Card = ([color, title, body]: (typeof highlights)[number]) => (
  <article key={title} className="frame blurb">
    <Collapsible className={`notification is-${color}`} label={title} heading={<h2 className="title">{title}</h2>}>
      <p className="subtitle">{body}</p>
    </Collapsible>
  </article>
);

const Home: React.FC = () => {
  const { data, isLoading, error } = useData<Item>("students");
  const [paused, setPaused] = useState(reducedMotion);
  const students = data.slice(0, 15);

  return (
    <Layout className={`home ${paused ? "paused" : ""}`} title="Portfolio">
      <section className="frame wide head" aria-labelledby="page-title">
        {!paused && <Particles />}
        <HeadCard
          scroll
          title={
            <>
              Hello, I'm Mark P. McCormack!{" "}
              <span className="waving-emoji" aria-hidden="true">
                👋
              </span>
            </>
          }
        >
          <div className="subtitle is-3">
            <span className="is-sr-only">I'm a {roles.join(", ")}.</span>
            <span aria-hidden="true">
              {paused ? (
                `I'm a ${roles[0]}`
              ) : (
                <Typewriter
                  options={{ autoStart: true, loop: true, delay: 50 }}
                  onInit={(t) => {
                    roles.forEach((r, i) =>
                      t
                        .typeString(i ? r : `I'm a ${r}`)
                        .pauseFor(1000)
                        .deleteChars(r.length)
                    );
                    t.start();
                  }}
                />
              )}
            </span>
          </div>
          <p className="subtitle intro">
            <b>
              <i>Anyone can become great at anything with the right teacher, and that's what I aim to be!</i>
            </b>
            <br />
            <br />
            Get ready to explore Computer Science Education with Mark McCormack, a lecturer with over 10 years of
            experience in the field. McCormack has taught at several top universities, combining deep knowledge with a
            genuine passion for helping students become future tech leaders.
            <br />
            <br />
            Beyond teaching, McCormack focuses on AI in Education and is involved in exciting, hands-on research.
            McCormack makes sure students aren’t just learning theory but are also part of real-world projects and
            discoveries. As a capstone project supervisor, McCormack encourages students to think creatively and solve
            real problems.
            <br />
            <br />
            McCormacks's impact goes beyond the classroom, with many students going on to succeed in the tech world.
            It's not just about the coursework—it’s the practical skills and mindset McCormack helps develop that make a
            lasting difference. Learn from Mark McCormack and start building your future in technology!
          </p>
        </HeadCard>
        <div className="head-image">
          <img src={photo} alt="Mark P. McCormack" />
        </div>
      </section>

      {highlights.map(Card)}

      <section className="frame wide showcase" aria-label="Student project showcase">
        <button className="button is-small pause" onClick={() => setPaused(!paused)}>
          <span className="icon is-small">
            <i className={`fas fa-${paused ? "play" : "pause"}`} aria-hidden="true" />
          </span>
          <span>{paused ? "Play" : "Pause"} animations</span>
        </button>
        <div className="scroll">
          {isLoading && <div className="frame">Loading student showcase...</div>}
          {error && <div className="frame">Failed to load student showcase.</div>}
          {/* The list is rendered twice for a seamless loop; the copy is hidden from assistive tech and keyboard. */}
          {[0, 1].map((copy) =>
            students.map((s, i) => (
              <div
                key={`${copy}-${i}`}
                className={`frame ${copy ? "dupe" : ""}`}
                aria-hidden={copy ? true : undefined}
                {...(copy ? { inert: "" } : {})}
              >
                <ProjectCard {...s} icon="https://cdn-icons-png.freepik.com/512/5344/5344646.png" />
              </div>
            ))
          )}
        </div>
      </section>

      {focusAreas.map(Card)}
    </Layout>
  );
};

export default Home;
