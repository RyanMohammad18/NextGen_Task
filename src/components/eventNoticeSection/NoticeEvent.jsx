import React from "react";
import style from "./eventstyle.module.css";
import { FlexContainer } from "../../atoms/common";
import noticeimg from "../../Images/Herosection/heroimage.png";
import { MoreButton } from "../../molecules/Common";

const NoticeEvent = () => {
  return (
    <div>
      <FlexContainer margin="100px 0 0 0">
        <h1 className={style.noticetitle}>H2 TITLE ONE LINER</h1>
      </FlexContainer>
      <FlexContainer
        padding="40px"
        alignItems="center"
        justifyContent="center"
        gap="30px"
      >
        <FlexContainer alignItems="flex-start" justifyContent="left">
          <div className={style.noticecontainer}>
            <img src={noticeimg} alt="noticeimg" />
            <p className={style.date}>January 06, 2024</p>
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <p className={style.date}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
              ligula. Aenean turpis sapien, efficitur quis placerat at,
              facilisis bibendum erat. Aliquam quis mattis leo, sed egestas
              augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean
              rutrum tristique purus,
            </p>
          </div>
        </FlexContainer>
        <FlexContainer flexFlow="column" gap="36px">
          <FlexContainer gap="17px">
            <img src={noticeimg} alt="eventimg" className={style.eventimg} />
            <FlexContainer flexFlow="column" alignItems="flex-start" gap="1rem">
              <p className={style.date}>January 06, 2024</p>
              <p className={style.eventtitle}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer gap="17px">
            <img src={noticeimg} alt="eventimg" className={style.eventimg} />
            <FlexContainer flexFlow="column" alignItems="flex-start" gap="1rem">
              <p className={style.date}>January 06, 2024</p>
              <p className={style.eventtitle}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer gap="17px">
            <img src={noticeimg} alt="eventimg" className={style.eventimg} />
            <FlexContainer
              flexFlow="column"
              alignItems="flex-start"
              justifyContent="left"
              gap="1rem"
            >
              <p className={style.date}>January 06, 2024</p>
              <p className={style.eventtitle}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer >
        <MoreButton text="View All Notice and Events" width="360px" margin="30px 0 0 0"/>
      </FlexContainer>
    </div>
  );
};

export default NoticeEvent;
