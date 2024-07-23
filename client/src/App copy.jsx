
function App() {


  return (
    <>
       
      
        {/* end banner */}
        {/* perfect */}
       
        {/* end perfect */}
        {/* combined */}
  
  
        {/* end combined */}
        {/* contact */}
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="titlepage text_align_center">
                  <h2>Contact Us</h2>
                </div>
              </div>
              <div className="col-md-12">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <input
                        className="form_control"
                        placeholder="Name"
                        type="type"
                        name=" Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form_control"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form_control"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="textarea"
                        placeholder="Message"
                        type="type"
                        name="message"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end contact */}
        {/*  footer */}
        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="hedingh3  text_align_left">
                    <h3>Contact Us</h3>
                    <ul className="top_infomation">
                      <li>
                        <img src="images/loc.png" alt="#" />
                        Locations
                      </li>
                      <li>
                        <img src="images/call.png" alt="#" />
                        +71 89078493
                      </li>
                      <li>
                        <img src="images/mail.png" alt="#" />
                        <a href="">demo@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hedingh3 text_align_left">
                    <h3>Useful Link</h3>
                    <ul className="menu_footer">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hedingh3  text_align_left">
                    <h3>Newsletter</h3>
                    <form id="colof" className="form_subscri">
                      <input
                        className="newsl"
                        placeholder="Your email"
                        type="text"
                        name="Email"
                      />
                      <button className="subsci_btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      © 2022 All Rights Reserved. Design by{" "}
                      <a href="https://html.design/"> Free html Templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
}

export default App;
