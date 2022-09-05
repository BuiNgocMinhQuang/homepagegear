import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import image1 from "../../../assets/images/image-home.jpeg";
import "./BannerBottom.scss";
function BannerBottom() {
  return (
    <div className="image-home">
      <img src={image1} alt="" />
      <div className="content">
        <h1>PLAY NOW, PAY LATER</h1>
        <p>
          Easy Pre-Approved Online Financing Available On All Systems For
          Qualifying Customers
        </p>
        <Button variant="outline-secondary" className="btn-shopnow">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default BannerBottom;
