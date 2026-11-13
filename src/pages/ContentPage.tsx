import React from "react";
import Layout, { Chip, Collapsible, sectionStyle } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import useData from "../hooks/useData";
import { Item, PageConfig } from "../content";

const slug = (name: string) => "g-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ContentPage: React.FC<PageConfig> = ({
  path,
  json,
  title,
  tagline,
  intro,
  img,
  color,
  onColor,
  layout,
  thumbs,
  links,
  groups: configured,
  newestFirst,
  groupByYear,
}) => {
  const { data } = useData<Item>(json);
  const items = newestFirst ? [...data].reverse() : data;
  const label = path.replace("-", " ");

  const list = (entries: Item[], level: "h2" | "h3") => (
    <div className={layout === "list" ? "rows" : "cards"}>
      {entries.map((item, i) => (
        <ProjectCard
          key={i}
          {...item}
          year={groupByYear ? undefined : item.year} // the group heading already shows it
          variant={layout === "list" ? "row" : "card"}
          thumb={thumbs !== false}
          level={level}
        />
      ))}
    </div>
  );

  // Year grouping turns each distinct year into a group, newest first.
  const years = Array.from(new Set(items.map((i) => i.year).filter(Boolean) as string[]))
    .sort()
    .reverse();
  const groups: [string, string][] | undefined = groupByYear ? years.map((y) => [y, ""]) : configured;
  const groupOf = (i: Item) => (groupByYear ? i.year : i.group);

  // Pages with groups show a heading per group (in the configured order); anything ungrouped goes last under "Other".
  const sections =
    groups &&
    [
      ...groups.map(([name, description]) => ({
        name,
        description,
        entries: items.filter((i) => groupOf(i) === name),
      })),
      {
        name: groupByYear ? "More projects" : "Other",
        description: "",
        entries: items.filter((i) => !groups.some(([name]) => name === groupOf(i))),
      },
    ].filter((g) => g.entries.length);

  return (
    <Layout className="content-page" title={title} style={sectionStyle(color, onColor)}>
      <section className="page-head wrap" aria-labelledby="page-title">
        <Collapsible
          className="head-text"
          label="Page introduction"
          heading={
            <div>
              <Chip>{label}</Chip>
              <h1 id="page-title" className="display">
                {title}
              </h1>
            </div>
          }
        >
          {tagline && <p className="lede">{tagline}</p>}
          <div className="prose">{intro}</div>
          {links && (
            <ul className="link-list">
              {links.map(([text, href]) => (
                <li key={text}>
                  <a className="btn-ed ghost" href={href} target="_blank" rel="noopener noreferrer">
                    {text}
                    <span className="is-sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Collapsible>
        <figure className="head-photo">
          <img src={img} alt="" />
        </figure>
      </section>

      {sections ? (
        <>
          <nav className="wrap jump" aria-label={`${title} sections`}>
            <ul>
              {sections.map(({ name, entries }) => (
                <li key={name}>
                  <a
                    href={`#${slug(name)}`}
                    onClick={(e) => {
                      e.preventDefault(); // a plain #id link would be treated as a route by HashRouter
                      const target = document.getElementById(slug(name));
                      target?.scrollIntoView();
                      target?.focus({ preventScroll: true });
                    }}
                  >
                    {name} <span className="count">{entries.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {sections.map(({ name, description, entries }) => (
            <section
              key={name}
              id={slug(name)}
              tabIndex={-1}
              className="wrap group"
              aria-labelledby={`${slug(name)}-h`}
            >
              <div className="group-head">
                <h2 id={`${slug(name)}-h`} className="section-title">
                  {name} <span className="count">{entries.length}</span>
                </h2>
                {description && <p className="group-desc">{description}</p>}
              </div>
              {list(entries, "h3")}
            </section>
          ))}
        </>
      ) : (
        <section className="wrap entries-section" aria-label={`${title}: all entries`}>
          {list(items, "h2")}
        </section>
      )}
    </Layout>
  );
};

export default ContentPage;
