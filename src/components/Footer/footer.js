import React from 'react';
import './footer.css';
import Instagram from "../../assets/Instagram_new.svg";
import Facebook from "../../assets/Facebook.svg";
import Youtube from "../../assets/YouTube.svg";
import Whatsapp from "../../assets/Whats.svg";


const Footer = () => {
  return (
    <div className="footerContainer">
    <div className="footerWhats">

            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5551984395416&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Morada%3A%20(diga%20qual%20opcao%20do%20site)%20_____%2C%20no%20per%C3%ADodo%20dd%2Fmm%2Faa%20%C3%A0%20dd%2Fmm%2Faa%20para%20o%20n%C3%BAmero%20de%20pessoas%3A%20xx.%20Obrigado!%20(Por%20favor%2C%20complete%20a%20msg%20acima%20antes%20de%20enviar)%20"
              title="Chama no zap"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="Whatsapp" className="whatsImg"/>
            </a>

    </div>
      <div className="visit">
          <span>Visite nossas redes sociais:</span>
      </div>
      <div className="socialMediaFooter">
      <ul>
            <li>
              <a 
                href="https://www.facebook.com/pousadatramandai"
                target="_blank"
                title="Visite nosso facebook"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" className="mediaImgFooter"/>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg"
                target="_blank"
                title="Visite nosso canal"
                rel="noreferrer"
              >
                <img src={Youtube} alt="YouTube" className="mediaImgFooter"/>
              </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/moradas_do_pe_grande_tramandai/"
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" className="mediaImgFooter"/>
              </a>
            </li>
          </ul>
      </div>
      <span>&copy; 2020 - Moradas do Pé Grande</span>
      <span>Website by RVD. Contato: renanvz@outlook.com</span>
      
    </div>
  );
}

export default Footer;
