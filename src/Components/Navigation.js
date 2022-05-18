import React from "react";
import "../../src/css/navigation.scss";

const Navigation = ({ closeCart }) => {
  let navLinks = [
    {
      to: '/',
      title: 'Home'
    },
    {
      to: '/',
      title: 'About'
    },
    {
      to: '/',
      title: 'Contact'
    },
  ]
  return (
    <React.Fragment>
      <div className="menu-nav">
        <button onClick={closeCart}>X</button>
        <nav>
          <ul>
            {
              navLinks.map(function(link, index){
                return <li key={ index }>
                  <a href={ link.to }>
                    {link.title}
                  </a>
                </li>;
              })
            }
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
