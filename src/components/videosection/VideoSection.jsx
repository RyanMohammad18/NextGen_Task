import React from "react";
import { MoreButton, SectionHeader } from "../../molecules/Common";
import style from "./videostyle.module.css";
import { FlexContainer } from "../../atoms/common";

const VideoContainer = () => {
  return <div className={style.videoContainer}></div>;
};

const VideoSection = () => {
  return (
    <div>
      <FlexContainer flexFlow="column">
        <SectionHeader />
        <div className={style.videoSection}>
          {[...Array(12)].map((_, index) => (
            <VideoContainer key={index} />
          ))}
        </div>
      </FlexContainer>
      <FlexContainer margin="10rem">
        <MoreButton text="Learn More" />
      </FlexContainer>
    </div>
  );
};

export default VideoSection;
