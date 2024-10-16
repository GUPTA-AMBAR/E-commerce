import React from 'react'

function ForgetPassword() {
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
                    <div >
                        <h2 style={{color:"gren",textAlign:"center"}}>Forget password</h2>
                        <br />
                        <p style={{color:"gren",textAlign:"center"}}>Enter your email address to receive a reset confirmation</p>
                    </div>
                    <br />
                    <br />

                  <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" for="form2Example17"><h3>Enter your Email address</h3></label>
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    
                  </div>
                  

                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Submit</button>
                  </div>
                      
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

export default ForgetPassword;