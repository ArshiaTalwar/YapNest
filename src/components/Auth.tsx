import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import styled from "styled-components";
import Navbar from "./Navbar";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Sign Up Function
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setErrorMessage("All fields are required");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
      setErrorMessage("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use. Please Login.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  // Sign In Function
  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMessage("Email and Password are required");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Sign Out Function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      setEmail("");
      setPassword("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
   < div>
  
      <Navbar/>
    <StyledWrapper>
      <div className=" container" style={{marginTop:"50px"}}>
        <div className="form_area">
          <p className="title">WELCOME!</p>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form onSubmit={handleSignUp}>
          
            <div className="form_group">
              <label className="sub_title">Email</label>
              <input
                placeholder="Enter your email"
                className="form_style"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title">Password</label>
              <input
                placeholder="Enter your password"
                className="form_style"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              SIGN UP
            </button>
          </form>

          <button type="button" className="btn" onClick={handleSignIn}>
            SIGN IN
          </button>

          <button type="button" className="btn signout" onClick={handleSignOut}>
            SIGN OUT
          </button>

          <p>Already have an account? <span className="link" onClick={handleSignIn}>Login Here!</span></p>
        </div>
      </div>
    </StyledWrapper>
    </div>
  );
};

export default Auth;

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background:rgb(248, 125, 232);
  }

  .form_area {
    background: #EDDCD9;
    padding: 30px;
    border: 2px solid #264143;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #E99F4C;
    text-align: center;
    max-width: 400px;
  }

  .title {
    font-size: 1.8em;
    font-weight: bold;
    color: #264143;
    margin-bottom: 20px;
  }

  .sub_title {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form_group {
    margin-bottom: 15px;
    text-align: left;
  }

  .form_style {
    width: 100%;
    padding: 10px;
    border: 2px solid #264143;
    border-radius: 10px;
    box-shadow: 3px 4px 0px 1px #E99F4C;
  }

  .btn {
    background: #DE5499;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 3px 3px 0px 0px #E99F4C;
    transition: 0.3s;
  }

  .btn:hover {
    background: #E99F4C;
    color: #264143;
  }

  .signout {
    background: #FF6F61;
  }

  .error {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .link {
    cursor: pointer;
    color: #264143;
    font-weight: bold;
    text-decoration: underline;
  }
`;
