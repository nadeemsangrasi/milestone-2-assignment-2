import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import styles from "./contact.module.css";
const ContactPage = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className="my-8">
          <form action="#" className="space-y-3">
            <div className={styles.field}>
              <label htmlFor="FullName" className="block text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="Full Name"
                placeholder="John Doe"
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="wWJ9T@example.com"
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
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
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
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
