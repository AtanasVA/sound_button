import React, { useState } from "react";
import WrapperLogin from "../Helpers/WrapperLogin";
import styles from "./UserLogin.module.css";

const UserLogin = ({ userDetails, verifyUser, whenLogout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    verifyUser(username, password);
    userDetails({
      username: username,
      password: password,
    });
  };
  return (
    <WrapperLogin>
      <form onSubmit={onSubmit} className={styles["form-body"]}>
        <div>
          <label htmlFor="username" className={styles.text}>
            Username
          </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={updateUsername}
          ></input>
        </div>
        <div>
          <label htmlFor="password" className={styles.text}>
            Password
          </label>
          <input
            name="username"
            type="number"
            value={password}
            onChange={updatePassword}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </WrapperLogin>
  );
};

export default UserLogin;
