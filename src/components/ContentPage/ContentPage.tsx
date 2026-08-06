import React, { CSSProperties, ReactNode } from "react";
import CollectionPage from "../CollectionPage/CollectionPage";
import useData from "../../hooks/useData";
import { buildSections, buildPagedSections, SectionConfig, PagedSectionConfig } from "../../utils/contentPageHelpers";

type ContentPageProps<T> = {
  jsonPath: string;
  pageClassName: string;
  menuClassName?: string;
  header: ReactNode;
  sectionsConfig?: SectionConfig<T>[];
  pagedSectionsConfig?: PagedSectionConfig<T>;
  renderItem: (item: T, index: number) => ReactNode;
  footer?: ReactNode;
  footerClassName?: string;
  footerStyle?: CSSProperties;
};

const ContentPage = <T,>({
  jsonPath,
  pageClassName,
  menuClassName,
  header,
  sectionsConfig,
  pagedSectionsConfig,
  renderItem,
  footer,
  footerClassName,
  footerStyle,
}: ContentPageProps<T>) => {
  const { data } = useData<T>(jsonPath);
  const sections = pagedSectionsConfig
    ? buildPagedSections(data, 10, renderItem, pagedSectionsConfig)
    : buildSections(data, sectionsConfig ?? [], renderItem);

  return (
    <div>
      <CollectionPage
        pageClassName={pageClassName}
        menuClassName={menuClassName}
        header={header}
        sections={sections}
        footer={footer}
        footerClassName={footerClassName}
        footerStyle={footerStyle}
      />
    </div>
  );
};

export default ContentPage;
