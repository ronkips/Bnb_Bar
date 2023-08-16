import React, { useEffect, useState } from "react";
import { BodyContainer } from "@/styles/Landing";
import { NavbarContainer } from "@/styles/Navbar";

const Navbar = () => {
  return (
    <BodyContainer>
      <NavbarContainer>
        <h1>BNB BAR</h1>
        <h3>Call/Whatsapp</h3>
        <h3>+254794701568</h3>
      </NavbarContainer>
    </BodyContainer>
  );
};

export default Navbar;
