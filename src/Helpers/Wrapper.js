import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <div className={`${styles.element} ${props.customStyle}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
