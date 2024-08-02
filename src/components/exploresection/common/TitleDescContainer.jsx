import React from "react";
import { FlexContainer } from "../../../atoms/common";
import style from './titledescstyle.module.css'

const TitleDescContainer = ({ icon: Icon }) => {
  return (
    <div>
      <div>
        <FlexContainer gap="1rem">
          <Icon />
          <h1 className={style.titlefour}>Title h4</h1>
        </FlexContainer>

        <p className={style.titledesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada
          ante, at cursus massa turpis sit amet Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Cras interdum augue sed tellus accumsan,
          nec congue quam lacinia. Duis ornare congue ante a facilisis.
          Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam
          egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at
          cursus massa turpis sit amet.
        </p>
      </div>
    </div>
  );
};

export default TitleDescContainer;
