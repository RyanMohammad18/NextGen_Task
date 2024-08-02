import React from "react";
import style from "./bannerstyle.module.css";
import { FlexContainer } from "../../atoms/common";
import Arrowicon from "../../svgs/Herosection/Arrowicon";
import RightArrow from "../../svgs/firstbanner/RightArrow";

const Firstbanner = () => {
  return (
    <div>
      <div className={style.container}>
        <FlexContainer flexFlow="column" gap="30px" >
          <div className={style.profileimage}></div>
          <h1 className={style.titlelinetwo}>Title line h2</h1>
          <p className={style.titlelinetext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis
            bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus
            vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique
            purus,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis
            bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus
            vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique
            purus,
          </p>
          <button className={style.learnmorebtn}>Learn More <RightArrow/> </button>
        </FlexContainer>
      </div>
    </div>
  );
};

export default Firstbanner;
