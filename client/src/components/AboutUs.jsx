import React from 'react';

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="about-us-font">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p>
              Welcome to Pet a Pet! Our community is dedicated to sharing heartwarming and entertaining stories of our beloved pets. From playful antics to touching moments, explore the joy that pets bring into our lives. Sign up now to share your own pet stories and connect with fellow animal lovers.
            </p>
          </div>
        </div>
        <div className="row mt-6 text-right">
          <div className="col-2 col-4 offset-md-4">
            <h2>Our Experts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vel ipsum quis saepe accusantium sunt, inventore doloremque laudantium reiciendis omnis nemo </p>
          </div>
        </div>
        <div className="image-container">
          <div className="image-item">
            <img src="images/banner.png" alt="Pet Image 1" className="img-fluid" />
          </div>
          <div className="image-item">
            <img src="images/banner.png" alt="Pet Image 2" className="img-fluid" />
          </div>
          <div className="image-item">
            <img src="images/banner.png" alt="Pet Image 3" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
