import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import aboutImg from "@/assets/images/about.jpg";
import styles from "./about.module.css";
const AboutSection = () => {
  return (
    <Wrapper>
      <div id="about" className={styles.about}>
        <div className={styles.right}>
          <Image src={aboutImg} alt="martImage" />
        </div>
        <div className={styles.left}>
          <h1 >
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            magnam eos officiis, quas quae dolores est odio distinctio a? Rem,
            sed sequi. Neque odio vitae sit dicta! Deserunt, deleniti explicabo?
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
