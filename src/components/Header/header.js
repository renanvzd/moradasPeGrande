import React from 'react';
import './header.css';
import Instagram from "../../assets/Instagram_new.svg";
import Facebook from "../../assets/Facebook.svg";
import Youtube from "../../assets/YouTube.svg";
import { Link } from "gatsby";


// export function Header({ action }) {
const Header = () => {
    return (
    <header>
      {/* <div className="action ? activeCor : header"> */}
      <div className="header">
        <div className="title">
        <Link to="/">
          <span>Moradas do Pé Grande</span>
        </Link>
        </div>

        <div className="socialMedia">
        <ul>
            <li>
              <a 
                href="https://www.facebook.com/pousadatramandai"
                target="_blank"
                title="Visite nosso facebook"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="mediaImg"/>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg"
                target="_blank"
                title="Visite nosso canal"
                rel="noreferrer"
              >
                <img src={Youtube} alt="YouTube" className="mediaImg"/>
              </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/moradas_do_pe_grande_tramandai/"
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="mediaImg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
