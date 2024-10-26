import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import styles from "./contact.module.css";
const ContactPage = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className="my-8">
          <form action="#">
            <div className={styles.field}>
              <label htmlFor="FullName" >
                Full Name
              </label>
              <input
                type="text"
                id="Full Name"
                placeholder="John Doe"
               
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="wWJ9T@example.com"
           
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                cols={30}
                rows={10}
                placeholder="Your Message"
              
              ></textarea>
            </div>
            <button className={styles.btn}>Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
