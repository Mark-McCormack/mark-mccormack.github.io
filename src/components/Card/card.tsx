import React from "react";

interface Props {
  notificationClass: string;
  title: string;
  body: string;
}

const Card: React.FC<Props> = ({ notificationClass, title, body }) => {
  return (
    <article className={`tile is-child notification ${notificationClass}`} style={{ height: "100%" }}>
      <p className="title">{title}</p>
      <p className="subtitle" style={{ textAlign: "justify" }}>
        {body}
      </p>
    </article>
  );
};

export default Card;
