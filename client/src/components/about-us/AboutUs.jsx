import React from 'react';
import ContactUs from '../ContactUs'; // Ensure this is used if needed

export default function AboutUs() {
  return (
    <div className='full_page'>
      <div className="about-us">
        <div className="container">
          <div className="col-md-9">
            <div className="text_align_center">
              <h1>About Us</h1>
            </div>
            <p>
              Welcome to Pet<span className='bold_text'>a</span>Cat! I'm Lili, and this is my first React JS project. PetaCat is a passion project born from my love for animals and my desire to create a warm, welcoming community for pet lovers to share and celebrate the stories of their beloved pets.
            </p>
          </div>
          <div className="col-4 col-6 offset-md-4">
            <h1>Our Mission</h1>
            <p>PetaCat is dedicated to bringing pet owners together through heartwarming and entertaining stories of their pets. Whether it's a funny anecdote, a touching moment, or an everyday tale that highlights the joy pets bring into our lives, our goal is to create a space where these stories can be shared and cherished by all.</p>
            <p>Join us in creating a vibrant, supportive community that celebrates the love and joy pets bring into our lives. Share your stories, connect with fellow pet owners, and let’s spread the happiness that our furry friends bring!</p>
          </div>
          <div className="col-4 col-6 offset-md-4">
            <h1>My Pets</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
