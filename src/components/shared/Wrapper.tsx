import styles from "./wrapper.module.css";
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
