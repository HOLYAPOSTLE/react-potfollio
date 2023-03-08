import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col ">
            <h4>AP-Limited</h4>
            <h1 className="list-style">
              <li>antwip00@gmail.com</li>
              <li>KUMASI, GHANA</li>
              <li>BC17 Docia Ousu, AVE</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col-service">
            <h4>SERVICES</h4>
            <ui className="list-styled">
              <li>Graphic Designing</li>
              <li>Website development</li>
              <li>Web app development</li>
              <li>Coding Tutorials</li>
              <li>Computer repairs</li>
              <li>Microsoft Office Tutorials</li>
              <li></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-social">
            <h4>Connect-Us</h4>
            <ui className="list-styled">
              <li><h2><i class="fa-brands fa-linkedin"></i></h2></li>
              <li><h2><i class="fa-brands fa-facebook"></i></h2></li>
              <li><h2><i class="fa-brands fa-instagram"></i></h2></li>
              <li><h2><i class="fa-brands fa-whatsapp"></i></h2></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} AP LIMITED | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;