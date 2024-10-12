// import React from 'react'
// import contactbanner from '../components/images/contactbanner.jpg';
// import styles from "./Contact.module.css";
// function Contact() {
//     return (
//     <>
//     <div className="jumbotron jumbotron-fluid" >
//       <div className="container">
//       <img classNameName="d-block w-100" src={contactbanner} alt="First slide" />
//       </div>
//     </div>
//     <br />
//     <br />
//     <div className={`container ${styles.products}`}>
//     <div  className="container" style={{border:"3px solid red"}}>
//     <iframe  src='https://shorturl.at/hdwJM'/>
//     </div>

//     <div  className="container" style={{border:"3px solid red"}}>
//       <img classNameName="d-block w-100" src={contactbanner} alt="First slide" />
//     </div>
//     </div>
//     </>
//   )
// }

// export default Contact











import React from 'react'
import contactbanner from '../components/images/contactbanner.jpg';
import styles from "./Contact.module.css";
import ContactMessage from '../components/ContactMessage';
function Contact() {
    return (
      <>
    <div className="jumbotron jumbotron-fluid" >
      <div className="container">
      <img classNameName="d-block w-100" src={contactbanner} alt="First slide" />
      </div>
    </div>
    <br />
    <br />

    <div className="row w-100">
  <div className="col-lg-6 my-4">
    <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
      className="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div className="col-lg-6 my-4 d-flex align-items-center">
    <div>
      <h3 >Contact Us</h3>
      <br />

      <h5>Address:</h5><p>Muradnagar,Ghaziabad,Uttar-Pradesh,Kiet-College</p>

      <h5>Phone:</h5><a href="tel:+918534004080">Call us at +91-8534004080</a>

      <h5>Hours:</h5><p>From 8 a.m To 11 p.m</p>
      <br />
      <p>Muradnagar is a town located in the Ghaziabad district of Uttar Pradesh, India. It lies approximately 25 kilometers from the main city of Ghaziabad and about 40 kilometers from Delhi. Muradnagar is known for its proximity to the Upper Ganga Canal, which runs through the town, making it agriculturally significant.</p>
      <br />
      <br />
      
    </div>
  </div>
</div>
<br />
<br />
      <ContactMessage/>
</>
  )
}

export default Contact


