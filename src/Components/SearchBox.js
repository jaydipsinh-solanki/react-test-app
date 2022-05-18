import React from "react";
import "../../src/css/searchBox.scss";

const Searchbox = () => {
  return (
    <React.Fragment>
      <form>
        <div className="searchbox-wrap">
          <input type="email" placeholder="Email Address" required />
          <button className="btn-primary">
            Learn More
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Searchbox;
