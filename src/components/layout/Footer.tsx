import { IconBrandGmail, IconLocation } from "@tabler/icons-react";
import { Phone } from "lucide-react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerCol} ${styles.spaceY4}`}>
          <div>
            <h1 className={styles.footerTitle}>Rich Mart</h1>
            <p className={styles.footerText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex illum
              perspiciatis ipsum nihil ducimus vero a eaque numquam accusamus,
            </p>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h1 className={styles.servicesTitle}>Our Services</h1>
          <ul>
            {["Home", "About", "Contact", "Products"].map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.listIcon}>&gt;</span>
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h1 className={styles.usefulLinksTitle}>Useful Links</h1>
          <ul>
            {["Home", "About", "Contact", "Products"].map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.listIcon}>&gt;</span>
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h1 className={styles.contactUsTitle}>Contact Us</h1>
          <ul className={styles.spaceY2}>
            <li className={`${styles.listItem} ${styles.mt2}`}>
              <span className={styles.icon}>
                <IconLocation />
              </span>
              123 Street, New York, USA
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <Phone />
              </span>
              +012 345 67890
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>
                <IconBrandGmail />
              </span>
              info@example.com
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={`${styles.footerBottomContainer} ${styles.smFlex}`}>
          <div className={`${styles.textCenter} ${styles.mb3}`}>
            <p className="m-0">
              Copyright &copy; <Link href="#">Domain</Link>. All Rights
              Reserved.
            </p>
          </div>
          <div className={styles.textRight}>
            <p className="m-0">
              Designed by{" "}
              <Link href="#" className={styles.textPrimaryGreen}>
                Nadeem Khan
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
