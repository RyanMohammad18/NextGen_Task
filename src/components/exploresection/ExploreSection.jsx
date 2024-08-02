import React from "react";
import style from "./explorestyle.module.css";
import { FlexContainer } from "../../atoms/common";
import TitleDescContainer from "./common/TitleDescContainer";
import ImageContainer from "./common/ImageContainer";
import BookSVG from "../../svgs/explore/BookSVG";
import GunSVG from "../../svgs/explore/GunSVG";
import HeptagonSVG from "../../svgs/explore/HeptagonSVG";
import MultipleProfile from "../../svgs/explore/MultipleProfileSVG";
import { SectionHeader } from "../../molecules/Common";

const ExploreSection = () => {
  return (
    <div>
      <div className={style.explorecontainer}>
  
        <SectionHeader/>

        <FlexContainer gap="30px" flexFlow="column">
          <FlexContainer backgroundColor="#EDF1FF4F" padding="0 110px">
            <FlexContainer margin="40px 0 0 0" gap="135px" padding="62px 102px">
              <TitleDescContainer icon={BookSVG} />
              <ImageContainer explorestickertitle="Explore Products" />
            </FlexContainer>
          </FlexContainer>

          <FlexContainer backgroundColor="#EDF1FF4F" padding="0 110px">
            <FlexContainer margin="40px 0 0 0" gap="135px" padding="62px 102px">
              <ImageContainer explorestickertitle="Explore Cool Products" />
              <TitleDescContainer icon={GunSVG} />
            </FlexContainer>
          </FlexContainer>

          <FlexContainer backgroundColor="#EDF1FF4F" padding="0 110px">
            <FlexContainer margin="40px 0 0 0" gap="135px" padding="62px 102px">
              <TitleDescContainer icon={HeptagonSVG} />
              <ImageContainer explorestickertitle="Explore Products" />
            </FlexContainer>
          </FlexContainer>

          <FlexContainer backgroundColor="#EDF1FF4F" padding="0 110px">
            <FlexContainer margin="40px 0 0 0" gap="135px" padding="62px 102px">
              <ImageContainer explorestickertitle="Explore Customers" />
              <TitleDescContainer icon={MultipleProfile} />
            </FlexContainer>
          </FlexContainer>

          <button className={style.learnmorebtn}>Learn More</button>
        </FlexContainer>
      </div>
    </div>
  );
};

export default ExploreSection;
