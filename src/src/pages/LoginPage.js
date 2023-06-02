import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import db from "../firebase";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const auth = getAuth();



function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const [errorText, setErrorText] = useState(null);

  const [isSending, setIsSending] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    setErrorText(null)
    console.clear();
    setIsSending(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setErrorText("");
      // Signed in
      const user = userCredential.user;

      navigate("/home")
    })
    .catch((error) => {
      // console.log(error.code, error.message);
      setErrorText(error.message.slice(10,error.message.length));
    });
    setIsSending(false);
  };

  return (
    <div
      className="container-xxl p-0"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container-fluid  mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container bg-primary p-3" style={{ width: "420px" }}>
          <div className="row g-2 mt-2">
            <div className="col">
              <h2>Login</h2>
            </div>
          </div>

          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-0 py-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="mt-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                />{" "}
                <span className="text-white">Show Password</span>
              </div>
            </div>
          </div>

          <div className="row g-2 mt-1">
            <div className="col">
            
                <p className="text-white text-center">{errorText}</p>
            
              <button
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
                className="btn btn-dark border-0 w-100 py-3"
              >
                {isSending ? "Logging In !" : "Login"}
              </button>
            </div>

            
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
                <p style={{
                    textAlign:"center"
                }} className="text-white">
                    Create new account  <Link to="/" className="text-white fw-bolder">SignUp</Link>
                </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
