import React, { useState } from "react";
import style from "./style.module.css";

const Signin = () => {
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  console.log("object", logUser);

  const inputEvent = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const logData = async (e) => {
    e.preventDefault();

    const { email, password } = logUser;

    const signData = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const SignInUser = await signData.json();
    console.log("gg", signData);

    if (SignInUser.status === 402 || !SignInUser) {
      window.alert("Failed");
    } else {
      window.alert("success");
    }
  };

  return (
    <>
      <div className="container">
        <div className={style.main}>
          <div className={style.lft}></div>
          <div className={style.rgt}>
            <h2>SignUp</h2>
            <form method="POST" className={style.form}>
              <div className="mb-3">
                <label className="form-label mt-5">Email</label>
                <input
                  style={{ width: "430px" }}
                  placeholder="@xyz"
                  type="Email"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  onChange={inputEvent}
                  value-={logUser.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label mt-2">Password</label>
                <input
                  style={{ width: "430px" }}
                  placeholder="********"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  onChange={inputEvent}
                  value-={logUser.password}
                />
              </div>

              <button
                onClick={logData}
                type="submit"
                className="btn btn-success"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
