import React from "react";
import style from "./style.module.css";
import { FlexContainer } from "../atoms/common";

export const Navbutton = ({ text }) => {
  return (
    <div>
      <div>
        <button className={style.navbuttons}>{text}</button>
      </div>
    </div>
  );
};

export const SectionHeader = () => {
  return (
    <FlexContainer
      flexFlow="column"
      gap="18px"
      className={style.container}
      padding="110px"
    >
      <h1>h2 title one liner</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
        augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
        ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
        ante. Nullam egestas, nunc at rutrum tincid Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras interdum augue sed tellus accumsan,
        nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum
        sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at
        rutrum tincid
      </p>
    </FlexContainer>
  );
};

export const MoreButton = ({ text, width = "auto", padding = "10px 20px" }) => {
  return (
    <button
      className={style.learnmorebtn}
      style={{ width: width, padding: padding }}
    >
      {text}
    </button>
  );
};