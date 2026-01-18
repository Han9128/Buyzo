import React from "react";
import "./footer.css"

function Footer(){
    const currYear = new Date().getFullYear();
return (
<footer className="footer">
      <p> &copy; {currYear} ShopEase. All rights reserved.</p>
      <p>Made by Md Shahreyar Hannan</p>
    </footer>
)
}

export default Footer;