import React from 'react'
import blogbanner from './images/blogbanner.jpg';

function BlogBanner() {
  return (
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
        <img className="card-img-top" src={blogbanner} alt="Card image cap"/>
  </div>
</div>
  )
}

export default BlogBanner;