import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <div>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  
    <section>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <b className="fas fa-gem me-3">Description</b>
            </h6>
            <p>
            Shoptrove’s product catalog is constantly updated, featuring both popular brands and unique items across multiple categories. With customer reviews, detailed product descriptions, and responsive customer service, Shoptrove aims to provide shoppers with an informative and satisfying online shopping journey.
            </p>
          </div>
  
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              About
            </h6>
            <p>
              <a href="#!" className="text-reset">About Us</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Delivery</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Privacy Policy</a>
            </p>
            <p>
              <a href="#!" className="text-reset"></a>
            </p>
          </div>
          {/* Grid column */}
  
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">
              Accounts
            </h6>
            <p>
              <a href="#!" className="text-reset">Profile</a>
            </p>
            <p>
              <a href="#!" className="text-reset">View Cart</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Help</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Payments</a>
            </p>
            <p>
              <a href="#!" className="text-reset">My Whislist</a>
            </p>
          </div>
          {/* Grid column */}
  
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p className="fas fa-home me-3"><b>Address : </b> Muradnagar Near Kiet college,Ghaziabad,201206</p>
            
            <p><a href="tel:+" className="fas fa-phone me-3"></a>Call us at +91-8534004080</p>
            <p><a href="tel:+" className="fas fa-print me-3"></a>Call us at +91-9149066047</p>
            <p className="fas fa-print me-3"><b>Gamil : </b>ambargupta1290@gamil.com</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links */}
  
    {/* Copyright */}
    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      © Developed by Ambar Gupta -
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Privacy PolicyTerms of UseContact Us</a>
    </div>
    {/* Copyright */}
  </footer>
  
  )
}

export default Footer;