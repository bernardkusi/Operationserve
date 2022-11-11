import React from "react";
import Link from "next/link";
const Footer = ({togglenav}) => {
  return (
    <footer>
     <div>
     <p className="about">
        Operation serve is a mission agency that trains and equips Christians to
        serve as missionaries in wherever they find themselves. It offers a
        dynamic and relevant edge to rural, urban and international missions. It
        weaves evangelism, discipleship and community empowerment into a
        beautiful fabric which prompts transformation.
      </p>
      <ul>
            <Link  onClick={()=>togglenav(false)} href="/">Home</Link>
            <Link  onClick={()=>togglenav(false)} href="missions">Missions</Link>
            <Link  onClick={()=>togglenav(false)} href="/gallery">Gallery</Link>
            <Link  onClick={()=>togglenav(false)} href="/#contact">Contact</Link>
      </ul>
      <ul>
        <Link href="#">Home</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Missions</Link>
        <Link href="#">Gallery</Link>
        <Link href="#">Contact</Link>
      </ul>

      <form action="">
        <p className="label">Send Us A Message</p>
        <div className="control">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="control">
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="control">
          <textarea type="email" placeholder="Your Message"></textarea>
        </div>

        <button className="click">Send Message</button>
      </form>
     </div>
      <p className="copy">Website developed by <Link href="https://bernarddwumfour.vercel.app/">Bernard Dwumfour</Link> &copy;2022 </p>
    </footer>
  );
};

export default Footer;
