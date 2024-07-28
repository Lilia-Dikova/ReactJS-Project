
import React from 'react';
import ContactUs from './ContactUs';


export default function AboutUs() {
  return (
    <div className='full_page'>
      <div className="about-us">
        <div className="container">
          <div className="col-md-8">
            <div className="text_align_center">
              <h1>About Us</h1>
            </div>
            <p>
              Welcome to Pet<span className='bold_text'>a</span>Cat! Our community is dedicated to sharing heartwarming and entertaining stories of our beloved pets. From playful antics to touching moments, explore the joy that pets bring into our lives. Sign up now to share your own pet stories and connect with fellow animal lovers.
            </p>
          </div>
          <div className="row mt-4 textright">
            <div className="col-2 col-4 offset-md-4">
              <h1>Our Experts</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vel ipsum quis saepe accusantium sunt, inventore doloremque laudantium reiciendis omnis nemo </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
