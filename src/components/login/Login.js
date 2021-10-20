import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { createUser, registerToggle, setUser, login, googleSignIn } =
    useAuth();
  const [toggle, setToggle] = useState(false);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    if (toggle) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          history.replace(from);
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      login(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          history.replace(from);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div class="w-50 mx-auto my-5 py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 class="text-center">{toggle ? "Create account" : "Login"}</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            {...register("email")}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            {...register("password")}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <div class="mt-3">
        <span onClick={() => setToggle(!toggle)} class="text-primary">
          {toggle ? "Create account" : "Dont have an account"}
        </span>
        <br />
      </div>
      <button onClick={googleSignIn} class="btn btn-outline-danger mt-2">
        Sign in With Google
      </button>
    </div>
  );
}

export default Login;
