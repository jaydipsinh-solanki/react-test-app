import React from "react";
import "../../src/css/twoColumn.scss";
import bottomFloatRight from "../images/floatingright-bottom.png"
import worldMap from "../images/map.png"
import circleBig from "../images/big-circle.png"

const TwoColumn = () => {
  return (
    <React.Fragment>
      <section className="two-col-wrap bgimg-dots py-lg">
        <img src={bottomFloatRight} alt="Bottom section" className="stick-left" />
        <div className="right-content">
          <h1>Need to offer <span className="f-italic">nationwide</span> access to health care providers?</h1>
          <div className="d-flex">
            <div className="content-left">
              <div className="mw-440">
                <p className="para-md">
                  MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico, with top-rated doctors and hospitals, as well as inpatient and outpatient services such as rehab centers, urgent care centers and ambulatory surgery centers.
                </p>
              </div>
              <a href="/">
                CONTACT US
              </a>
            </div>
            <div className="content-right">
              <img src={worldMap} alt="Map" />
              <img src={circleBig} alt="circleBig" className="circle-big" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TwoColumn;
