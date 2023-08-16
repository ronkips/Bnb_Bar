import React from "react";
import { FooterContainer } from "@/styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <h2>24 hr Service</h2>
      <p> Copyright @{new Date().getFullYear()} Trusted Homes</p>
    </FooterContainer>
  );
};

export default Footer;
