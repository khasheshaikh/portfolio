import React from "react";
import { Button } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {SiCodechef,SiCodeforces} from "react-icons/si"
import "./Header.css";
export const Header = () => {
  function sendEmail() {
    window.location = "mailto:khasheshaikh@gmail.com";
  }

  return (
    <div>
      <div className="card">
        <div className="first-line">
          <p>khasheshaikh@gmail.com</p>
          <div className="loader">
            <h1>Aloha!</h1>
          </div>
        </div>

        <h2>I'm KHASHE, </h2>
        <p>
          I am a passionate frontend developer based in Mumbai. who focuses on
          writing clean, elegant and efficient code{" "}
        </p>

        <button class="button-30" role="button" onClick={sendEmail}>
          Get in touch
        </button>
        <div className="icons">
          <a href="https://www.linkedin.com/in/khashe-shaikh-87ba071aa/?originalSubdomain=in">
            <BsLinkedin className="icon" />
          </a>
          <a href="https://github.com/khasheshaikh">
            <BsGithub className="icon" /></a>
          <a href="https://www.codechef.com/users/khashe"><SiCodechef className="icon"/></a>
          <a href="https://codeforces.com/profile/khashe"><SiCodeforces className="icon"/></a>
        </div>
      </div>
    </div>
  );
};
