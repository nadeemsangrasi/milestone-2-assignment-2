import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import martImg from "@/assets/images/mart.jpg";
import styles from "./homeSection.module.css";
const HomeSection = () => {
  return (
    <Wrapper>
      <div className={styles.home}>
        <div className={styles.right}>
          <h4>Welcome to MART</h4>
          <h1>We provide best quality products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            magnam eos officiis, quas quae dolores est odio distinctio a? Rem,
            sed sequi. Neque odio vitae sit dicta! Deserunt, deleniti explicabo?
          </p>
        </div>
        <div className={styles.left}>
          <Image src={martImg} alt="martImage" className="w-full" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
