import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year}</p>
      <p>By Chetna Batra🔥</p>
    </footer>
  );
}

export default Footer;
