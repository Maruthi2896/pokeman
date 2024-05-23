import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="profile">
        <div className="pimage">
          <h2>Maruthi K J</h2>
          <h4>Fullstack web developer</h4>
          <p>
            Inventive Web developer creates site designs and innovative user
            interfaces. known for architecting customer-facing products that
            deliver unique experiences while complying with internal coding
            standards and technical requirements, Clever provider of fresh
            assets to grow usership.
          </p>
          <br />
          <a href="https://maruthi-kj-portfolio.netlify.app/">My Portfolio</a>
          <br />
          <p>Guvi-Zen Certified</p>
          <div className="icon">
            <li>
              <Link to="https://github.com/Maruthi2896">
                <BiLogoGithub />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/maruthi_kj_nayaka/?igshid=OGQ5ZDc2ODk2ZA==">
                <AiOutlineInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://join.skype.com/invite/ueaDYw0r3qvd">
                <BsSkype />
              </Link>
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
          </div>
          <h6>
            For More Projects visit my Git Profile in above icons, find Project
            Urls repository in git profile copy the links and check them in
            Crome
          </h6>
        </div>
      </div>
    </>
  );
};

export default About;
