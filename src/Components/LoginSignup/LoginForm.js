import React, { useState } from "react";
import "./LoginForm.css";
import { validatePassword } from "./validatePassword";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Username and Email are required fields!");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    const uname = "chinmayeepatankar270503@gmail.com";
    const pass = "123@456Abc";

    if (username === uname && password === pass) {
      setSubmitted(true);
      setError(null);

      navigate("/customer-home");
    } else {
      setSubmitted(false);
      setError("Incorrect username or password!");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Email Id/Phone No*"
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password*"
            />
          </label>
          <button type="submit">Login</button>
          {submitted && <p>Form submitted successfully!</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
          Haven't Registered Yet? <Link to="/register">Sign Up</Link>
        </p>
        <p>
          <span onClick={handleForgotPassword}>Forgot Password?</span>{" "}
          <Link to="/forgot-password">Click here!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
