import React from "react";

function Login() {
  return (
    <div className="conatiner mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Login</h2>
              <form>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter your password"/>
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