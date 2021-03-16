import React from 'react';
import {LogoIcon} from "../Utils/Icons";


const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <LogoIcon
          width="70px"
          height="70px"
          link={true}
          toLink="/"
        />
      </div>
      <div className="footer_discl">
        Manchester City 2021. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
