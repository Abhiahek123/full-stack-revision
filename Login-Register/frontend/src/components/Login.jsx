import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";



function Login() {


  const schema = yup.object().shape({
    email:yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

    password: yup
    .string()
    .required("Password is required")
    .min(6 , "Password must be at least 6 characters"),

  })
 
  const {
    register,
    handleSubmit,
    formState:{errors} , 
  }=useForm({
    resolver:yupResolver(schema),
  });


const handleLogin = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      data
    );

    Swal.fire({
      title: "Login Successful",
      text: "Welcome back!",
      icon: "success",
    });

  } catch (error) {
     
    Swal.fire({
      title: "Login Failed",
      text: error.response?.data?.message || "Something went wrong",
      icon: "error",
    });
  }
};
  return (
    <div className="conatiner mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit(handleLogin)}>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter your email" {...register("email")}/>
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter your password" {...register("password")}/>
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>


                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;