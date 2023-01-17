import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Location</h5>
            <p>Fake eShop Website, United States</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fab fa-github"></i>
            </div>
            <h5>GitHub</h5>
            <p><center>A mock eShop web application for SB's Capstone #2. Please click <a href="https://github.com/codingwithjen/eshop" target="_blank" rel="noopener noreferrer"><u>here</u></a> for the source code.</center></p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-envelope"></i>
            </div>
            <h5>Email Me</h5>
            <p>jenpietramali@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
