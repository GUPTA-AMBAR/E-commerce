import React from 'react'
import styles from "./BlogReview.module.css";
import image from './images/image2.jpg';
function BlogReview() {
  return (
    <>
    <div>
    <h1 style={{color:"red" , textAlign : "center"}}>Explore more in our library</h1>
    <br />
    <p style={{textAlign : "center"}}>Why we have trending Outfits Everywhere</p>
    </div>

    <div className={`${styles.products}`}>
        <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>Rohit sharma</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 3 mins ago</i>
        </div>
    </div>

    <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>Rishab Gupta</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 10 days ago</i>
        </div>
    </div>

    <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>Isha Singh</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 5 days ago</i>
        </div>
    </div>

    <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>Rocky</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 10 hour ago</i>
        </div>
    </div>

    <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>Aliya sharma</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 2 days ago</i>
        </div>
    </div>

    <div className={`card ${styles.card1}` } style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h4>MS Dhoni</h4>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <br />
            <i>Last updated 2 days ago</i>
        </div>
    </div>
    </div>
    </>
  )
}

export default BlogReview;