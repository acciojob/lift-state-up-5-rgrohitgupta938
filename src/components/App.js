import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
};

export default App;
