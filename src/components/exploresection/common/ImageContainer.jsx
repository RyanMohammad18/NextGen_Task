import React from "react";
import exploreimg from "../../../Images/exploreimage/exploreimage.png";
import style from "./imagecontainerstyle.module.css";

const ImageContainer = ({explorestickertitle}) => {
  return (
    <div>
      <div>
        <div className={style.imageWrapper}>
          <div className={style.exploresticker}>
            {/* <p>Explore Product</p> */}
            <p>{explorestickertitle}</p>
          </div>

          <img src={exploreimg} alt="exploreimage" />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
