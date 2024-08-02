import React, { useState, useRef, useEffect } from "react";
import style from "./sliderstyle.module.css";
import { MoreButton, SectionHeader } from "../../molecules/Common";
import sliderimg from "../../Images/sectionbanner/sectionbannerimg.png";
import { FlexContainer } from "../../atoms/common";

const SliderSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const sliderRef = useRef(null);
  const cardWidth = 446;
  const cardGap = 24;

  useEffect(() => {
    if (sliderRef.current) {
      const offset =
        (cardWidth + cardGap) * activeIndex -
        (sliderRef.current.clientWidth / 2 - cardWidth / 2);
      sliderRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [activeIndex]);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.addEventListener("mousemove", handleMouseMove);
    sliderRef.current.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    sliderRef.current.removeEventListener("mousemove", handleMouseMove);
    sliderRef.current.removeEventListener("mouseup", handleMouseUp);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <SectionHeader />
      <div
        className={style.sliderContainer}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <div className={style.sliderWrapper}>
          {[0, 1, 2, 3, 4].map((index) => {
            const isCenter = index === activeIndex;
            const isAdjacent =
              index === activeIndex - 1 || index === activeIndex + 1;
            const isEdge = !isCenter && !isAdjacent;

            return (
              <div
                key={index}
                className={`${style.sliderCard} ${
                  isCenter ? style.centerCard : ""
                } ${isEdge ? style.edgeCard : ""}`}
                onClick={() => handleCardClick(index)}
                style={{
                  width: isCenter
                    ? `${cardWidth}px`
                    : isAdjacent
                    ? "388px"
                    : "301px",
                  height: isCenter ? "685px" : isAdjacent ? "566px" : "440px",
                  opacity: isEdge ? 0.5 : 1,
                  filter: isEdge ? "blur(5px)" : "none",
                  transform: isCenter ? "scale(1)" : "scale(0.8)",
                }}
              >
                <div className={style.cardcontainer}>
                  <img src={sliderimg} alt="sliderimg" />
                  <button>Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FlexContainer margin="2.5rem 0 0 0">
        <MoreButton text="See More" />
      </FlexContainer>
    </>
  );
};

export default SliderSection;
