import React, { Fragment } from "react";
import Layout, { HeadCard } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import useData from "../hooks/useData";
import { Item, PageConfig } from "../content";

const GROUP = 10; // cards between dividers

const ContentPage: React.FC<PageConfig> = ({ json, title, tagline, intro, img, icon, links, divider }) => {
  const { data } = useData<Item>(json);

  return (
    <Layout
      className="content-page"
      title={title}
      style={divider ? ({ "--divider": divider } as React.CSSProperties) : undefined}
    >
      <section className="frame wide head" aria-labelledby="page-title">
        <HeadCard title={title}>
          {tagline && <p className="subtitle is-3">{tagline}</p>}
          <p className="subtitle intro">{intro}</p>
          {links && (
            <div className="buttons is-centered">
              {links.map(([label, href, color]) => (
                <a key={label} className={`button ${color}`} href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </div>
          )}
        </HeadCard>
        <div className="head-image">
          <img src={img} alt="" />
        </div>
      </section>

      {data.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && i % GROUP === 0 && <div className="frame wide divider" />}
          <article className="frame item">
            <ProjectCard {...item} icon={icon} />
          </article>
        </Fragment>
      ))}
    </Layout>
  );
};

export default ContentPage;
