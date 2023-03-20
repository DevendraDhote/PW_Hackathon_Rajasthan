import React, { useState } from "react";
import style from "./style.module.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    courses: "",
  });

  const inputEvent = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, dob, password, courses } = user;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        dob,
        password,
        courses,
      }),
    });
    const data = await response.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Success");
    }
  };

  console.log(user);

  return (
    <>
      <div className="container">
        <div className={style.main}>
          <div className={style.lft}></div>
          <div className={style.rgt}>
            <h2>Register Here</h2>
            <form method="POST" className={style.form}>
              <div className="mt-5">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  style={{ width: "430px" }}
                  placeholder="Name"
                  type="email"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={user.name}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label mt-2">
                  Email
                </label>
                <input
                  style={{ width: "430px" }}
                  placeholder="@xyz"
                  type="Email"
                  className="form-control"
                  name="email"
                  id="exampleInputPassword1"
                  value={user.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="d-flex">
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label mt-2"
                  >
                    Mobile No.
                  </label>
                  <input
                    placeholder="+91-"
                    type="Email"
                    className="form-control"
                    name="mobile"
                    id="exampleInputPassword1"
                    value={user.mobile}
                    onChange={inputEvent}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label mt-2"
                  >
                    Date of birth
                  </label>{" "}
                  <br />
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="dob"
                    value={user.dob}
                    onChange={inputEvent}
                  ></input>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label mt-2">
                  Password
                </label>
                <input
                  style={{ width: "430px" }}
                  placeholder="@xyz"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label mt-2">
                  Courses
                </label>
                <input
                  style={{ width: "430px" }}
                  placeholder="HTML, CSS, JS"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="courses"
                  value={user.courses}
                  onChange={inputEvent}
                />
              </div>
              <button
                onClick={formSubmit}
                type="submit"
                className="btn btn-success"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
