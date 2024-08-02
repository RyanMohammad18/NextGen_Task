import React from "react";
import style from "./footerstyle.module.css";
import { FlexContainer } from "../../atoms/common";
import LocationSVG from "../../svgs/footer/LocationSVG";
import PhoneSVG from "../../svgs/footer/PhoneSVG";
import MessageSVG from "../../svgs/footer/MessageSVG";

const Footer = () => {
  return (
    <div>
      <div className={style.footercontainer}>
        <FlexContainer padding="60px 80px" justifyContent="space-between">
          <FlexContainer flexFlow="column" alignItems="flex-start" gap="30px">
            <div className={style.leftcontainer}></div>
            <h1 className={style.shopname}>SHOP NAME</h1>
            <FlexContainer flexFlow="column" alignItems="flex-start" gap="10px">
              <FlexContainer gap="10px">
                <LocationSVG />
                <p>Shop Location</p>
              </FlexContainer>
              <FlexContainer gap="10px">
                <PhoneSVG />
                <p>+XX XXX XXX XXXX (Shop Admin) </p>
              </FlexContainer>

              <FlexContainer gap="10px">
                <MessageSVG />
                <p>info@shop.com</p>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer alignItems="flex-end">
            <div className={style.footermap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096733!2d144.953736315318!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d9e0f8b1aa!2sShop%20Location!5e0!3m2!1sen!2sau!4v1629887634754!5m2!1sen!2sau"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </FlexContainer>
        
        </FlexContainer>
        <FlexContainer >
            <div className={style.allrightsfooter}>
              <p>© 2024 Shop. All rights reserved</p>
            </div>
          </FlexContainer>
      </div>
    </div>
  );
};

export default Footer;
