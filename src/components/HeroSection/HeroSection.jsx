import React from "react";
import style from "./herostyle.module.css";
import Arrowicon from "../../svgs/Herosection/Arrowicon";
import { FlexContainer } from "../../atoms/common";

const HeroSection = () => {
  return (
    <div className={style.herocontainer}>
      <div>
        <div >
          <FlexContainer flexFlow="column" margin="150px">
            <div className={style.squareimage}></div>

            <div className={style.headingcontainer}>
              <h1>Welcome to Grand Shop</h1>
              <h5>A Single Line of Motto Text</h5>
            </div>

            <div>
              <button className={style.CTAButton}>
                Main CTA <Arrowicon />{" "}
              </button>
            </div>
          </FlexContainer>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
