import React from "react";
import styles from "./WrapperLogin.module.css";

const WrapperLogin = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default WrapperLogin;
