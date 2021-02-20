import React from "react";
import { ModifiedAt, ModifiedAtTitle, Li, Span, StyledLink } from "./style";
import { dateDifference } from "utils/date";

interface DateTitleSlug {
  title: string;
  slug: string;
  date: string;
}
interface Props {
  dateTitleSlug: DateTitleSlug[];
}

const ModifiedAtLayout = ({ dateTitleSlug }: Props) => {
  if (typeof window === "undefined" || !dateTitleSlug) {
    return null;
  }
  const currentDate = new Date(
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  );

  const toc = dateTitleSlug.map((item, index) => {
    return (
      <Li key={index}>
        <StyledLink to={item.slug}>{item.title}</StyledLink>
        <Span>
          {dateDifference(currentDate.getTime(), Date.parse(item.date))}
        </Span>
      </Li>
    );
  });

  return (
    <ModifiedAt>
      <ModifiedAtTitle>Recently updated</ModifiedAtTitle>
      {toc}
    </ModifiedAt>
  );
};

export default ModifiedAtLayout;