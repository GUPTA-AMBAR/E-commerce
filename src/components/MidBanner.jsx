import React from 'react'
import midbanner from './images/midbanner.jpg';

function MidBanner() {
  return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <img className="d-block w-100" src={midbanner} alt="First slide" />
        </div>
    </div>
  )
}

export default MidBanner;