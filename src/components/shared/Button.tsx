import React from "react";
import styles from "./button.module.css";

const Button = ({ label }: { label: string }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
