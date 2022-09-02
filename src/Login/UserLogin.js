import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import styles from "./UserLogin.module.css";

const UserLogin = ({ userDetails }) => {
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
    userDetails({
      username: username,
      password: password,
    });
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit} className={styles["form-body"]}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={updateUsername}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="username"
            type="number"
            value={password}
            onChange={updatePassword}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

export default UserLogin;
