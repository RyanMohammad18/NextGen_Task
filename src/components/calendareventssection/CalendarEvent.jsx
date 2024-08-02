import React from "react";
import style from "./calendarstyle.module.css";
import calendarimg from "../../Images/Herosection/heroimage.png";
import { FlexContainer } from "../../atoms/common";
import { MoreButton, SectionHeader } from "../../molecules/Common";

const CalendarEvent = () => {
  return (
    <div>
      <SectionHeader />

      <FlexContainer gap="70px">
        <div className={style.calendarcontainer}>
          <div className={style.imageWrapper}>
            <img src={calendarimg} alt="calendarimg" />
            <div className={style.calendarContent}>
              <FlexContainer
                flexFlow="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div className={style.maindate}>
                  <p>OCT</p>
                  <h1>31</h1>
                </div>
                <div className={style.sidedate}>
                  <p>LOREM IPSUM US</p>
                  <p>Oct 31, 2024</p>
                </div>
              </FlexContainer>
            </div>
          </div>
        </div>
        <FlexContainer
          flexFlow="column"
          gap="1rem"
          className={style.secondcontainer}
        >
          <FlexContainer gap="1rem">
            <div className={style.maindate}>
              <p>OCT</p>
              <h1>31</h1>
            </div>
            <FlexContainer
              flexFlow="column"
              alignItems="flex-start"
              className={style.subevents}
              gap="12px"
            >
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis.
              </p>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer gap="1rem">
            <div className={style.maindate}>
              <p>OCT</p>
              <h1>31</h1>
            </div>
            <FlexContainer
              flexFlow="column"
              alignItems="flex-start"
              className={style.subevents}
              gap="12px"
            >
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis.
              </p>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer gap="1rem">
            <div className={style.maindate}>
              <p>OCT</p>
              <h1>31</h1>
            </div>
            <FlexContainer
              flexFlow="column"
              alignItems="flex-start"
              className={style.subevents}
              gap="12px"
            >
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis.
              </p>
            </FlexContainer>
          </FlexContainer>
      
            <MoreButton text="Learn More"/>
          
        </FlexContainer>
      </FlexContainer>
      
    </div>
  );
};

export default CalendarEvent;
