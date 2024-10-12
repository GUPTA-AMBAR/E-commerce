import React from 'react'
import { useLogin } from '../Store/store';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {

        const {  handleLogin } = useContext(useLogin);
        const navigate = useNavigate();
      
        const handleProfileClick = () => {
          handleLogin(); 
          navigate('/login'); 
        };

  return (
    <section className="vh-100" style={{background: "#9A616D"}}>
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Sign Up</span>
                  </div>


                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example17">Enter your Email address</label>
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" for="form2Example27">Enter the Password</label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form2Example27">Enter the confirm Password</label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    
                  </div>

                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Have an account? <a href="#!"
                      style={{color: "#393f81"}} onClick={handleProfileClick}>Login here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register;