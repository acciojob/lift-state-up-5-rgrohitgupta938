import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label
          for="name"
          style={{ padding: "5px", display: "flex", gap: "10px" }}
        >
          Username:
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label
          for="pass"
          style={{ padding: "6px", display: "flex", gap: "10px" }}
        >
          Password:
          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button type="submit" style={{ width: "50px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
