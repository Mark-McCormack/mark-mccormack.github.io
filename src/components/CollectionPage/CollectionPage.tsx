import React, { Fragment, ReactNode, CSSProperties } from "react";
import Navbar from "../Navbar/navbar";

export type CollectionSection<T> = {
  items: T[];
  getItemClassName?: (index: number) => string;
  getItemStyle?: (index: number) => CSSProperties | undefined;
  renderItem: (item: T, index: number) => ReactNode;
  divider?: ReactNode;
};

type CollectionPageProps<T> = {
  pageClassName: string;
  menuClassName?: string;
  header: ReactNode;
  sections: CollectionSection<T>[];
  footer?: ReactNode;
  footerClassName?: string;
  footerStyle?: CSSProperties;
};

const CollectionPage = <T,>({
  pageClassName,
  menuClassName,
  header,
  sections,
  footer,
  footerClassName,
  footerStyle,
}: CollectionPageProps<T>) => {
  return (
    <div className={pageClassName}>
      {menuClassName ? (
        <div className={menuClassName} style={{ overflow: "visible" }}>
          <Navbar />
        </div>
      ) : (
        <Navbar />
      )}

      {header}

      {sections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          {section.items.map((item, itemIndex) => (
            <div
              key={`${sectionIndex}-${itemIndex}`}
              className={section.getItemClassName?.(itemIndex)}
              style={section.getItemStyle?.(itemIndex)}
            >
              {section.renderItem(item, itemIndex)}
            </div>
          ))}
          {section.divider}
        </Fragment>
      ))}

      {footer && (
        <div
          className={footerClassName}
          style={{ ...footerStyle, gridColumn: "1 / -1", width: "100%", marginTop: "auto" }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
