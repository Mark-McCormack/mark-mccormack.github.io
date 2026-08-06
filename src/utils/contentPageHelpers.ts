import { CSSProperties, ReactNode } from "react";
import { CollectionSection } from "../components/CollectionPage/CollectionPage";

export type SectionConfig<T> = {
  sliceStart: number;
  sliceEnd: number;
  getItemClassName?: (index: number) => string;
  getItemStyle?: (index: number) => CSSProperties | undefined;
  divider?: ReactNode;
};

export type PagedSectionConfig<T> = {
  getItemClassName?: (groupIndex: number, itemIndex: number) => string;
  getItemStyle?: (groupIndex: number, itemIndex: number) => CSSProperties | undefined;
  getDivider?: (groupIndex: number) => ReactNode;
};

export function buildSections<T>(
  items: T[],
  sections: SectionConfig<T>[],
  renderItem: (item: T, index: number) => ReactNode
): CollectionSection<T>[] {
  return sections.map((section) => ({
    items: items.slice(section.sliceStart, section.sliceEnd),
    getItemClassName: section.getItemClassName,
    getItemStyle: section.getItemStyle,
    renderItem,
    divider: section.divider,
  }));
}

export function buildPagedSections<T>(
  items: T[],
  groupSize: number,
  renderItem: (item: T, index: number) => ReactNode,
  config: PagedSectionConfig<T>
): CollectionSection<T>[] {
  const groups: CollectionSection<T>[] = [];
  const groupCount = Math.ceil(items.length / groupSize);

  for (let groupIndex = 0; groupIndex < groupCount; groupIndex++) {
    const start = groupIndex * groupSize;
    const end = start + groupSize;
    const section: CollectionSection<T> = {
      items: items.slice(start, end),
      renderItem,
      divider: groupIndex < groupCount - 1 ? config.getDivider?.(groupIndex) : undefined,
    };

    if (config.getItemClassName) {
      section.getItemClassName = (itemIndex: number) => config.getItemClassName!(groupIndex, itemIndex);
    }

    if (config.getItemStyle) {
      section.getItemStyle = (itemIndex: number) => config.getItemStyle!(groupIndex, itemIndex);
    }

    groups.push(section);
  }

  return groups;
}
