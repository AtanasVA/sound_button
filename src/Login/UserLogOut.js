import React, { UseState } from "react";
import WrapperLogin from "../Helpers/WrapperLogin";
import styles from "./UserLogOut.module.css";

const UserLogOut = ({ onLogout }) => {
  return (
    <WrapperLogin>
      <button onClick={onLogout}>Logout</button>
    </WrapperLogin>
  );
};

export default UserLogOut;
