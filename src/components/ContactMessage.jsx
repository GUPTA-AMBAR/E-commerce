import React from 'react'

function ContactMessage() {
  return (
    
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-4 col-md-5 col-lg-2 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase" style={{color:"green",textAlign:"center"}}>Leave Us A message</h2>
              <br />
              <br />
              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="text" id="typeEmailX" className="form-control form-control-lg" placeholder='First name'/>
              </div>
              <br />
              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="text" id="typeEmailX" className="form-control form-control-lg" placeholder='First name'/>
              </div>

              <div data-mdb-input-init className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX"> Enter your Email Address</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <div data-mdb-input-init className="form-outline form-white mb-4">
              <textarea rows="4" cols="68" placeholder='Give Us The Reviews'></textarea>
              </div>


              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Sumbit</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
 
  )
}

export default ContactMessage