import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const holder=links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}

    </a>

  ));


  return <nav>{holder}</nav>;
}

export default NavBar;
