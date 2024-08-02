import React from "react";
import style from "./aboutstyle.module.css";
import aboutimage from "../../Images/aaboutUS/aboutimage.png";

const AboutUS = () => {
  return (
    <div>
      <div className={style.aboutcontainer}>
        <div className={style.cardcontainer}>
          <h1>
            About The Quick <br />
            Shop this is H2
          </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
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
          <button>Learn More About Shop</button>
        </div>
        <div className={style.imagecontainer}>
          <img src={aboutimage} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
