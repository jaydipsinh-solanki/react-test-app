import React from "react";
import "../../src/css/bannerMain.scss";
import floatRightImage from "../images/floating-image-right.png";
import floatLeftImage from "../images/floating-image-left.png";
import Searchbox from "./SearchBox";

const BannerMain = () => {
  return (
    <React.Fragment>
      <section className="banner-wrap">
        <div className="text-content">
          <div className="site-container">
            <p className="title-sm">choose your</p>
            <span className="title-radient">Acc<br />ess</span>
            <p className="para-lg">Expand your provider network anywhere in the country. Or lease just the network locations you need. With MagnaCare Access, <span className="text-bold">the choice is yours.</span></p>
          </div>
        </div>
        <div className="images-content">
          <img src={floatRightImage} alt="Floatingright" className="stick-right" />
          <img src={floatLeftImage} alt="Floatingleft" className="stick-left" />
        </div>
        <div className="site-container py-lg pb-0 bgimg-plus">
          <Searchbox />
          <p className="para-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BannerMain;
