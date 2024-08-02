import React from "react";
import style from "./sectionstyle.module.css";
import sectionimg from "../../Images/sectionbanner/sectionbannerimg.png";
import SectionCard from "./common/SectionCard";

const SectionBanner = () => {
  return (
    <div>
      <div className={style.sectionbannercontainer}>
        <div className={style.container}>
          <img src={sectionimg} alt="" />
          <div className={style.firstcard}>
            <SectionCard title="Title of the section text h2" />
          </div>
          <div className={style.secondcard}>
            <SectionCard title="One liner title h2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
