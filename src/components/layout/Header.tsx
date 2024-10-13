import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
