import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function Footer() {

  const siteInfo = [
    { name: 'Bulgaria, Plovdiv', img: 'loc.png' },
    { name: '+359 88 555 787', img: 'call.png' },
    { name: 'admin@petacat.biz', img: 'mail.png' }
  ]

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/catalog' },
    { name: 'About us', href: '/about' },
    { name: 'Mood Generator', href: '/mood' }
  ]

  const isSubscibed = localStorage.getItem('subscribed');
  const [subscribed, setSubscribed] = useState(isSubscibed);
  
  const [error, setError] = useState(false);

  const onSubscribe = (values) => {
    if (values) {
      setSubscribed(true);
      localStorage.setItem('subscribed', 'true' )

    } else {
      setError('Please enter vallid email address!')
    }
  }

  const { values, changeHandler, submitHandler } = useForm('', onSubscribe)


  return (

    <footer>
      {error && <div className='errorContainer'>
        <p>{error}</p>
      </div>
      }
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="hedingh3  text_align_left">
                <h3>Contact Us</h3>
                <ul className="top_infomation">
                  {siteInfo.map(info => (
                    <li key={info.name}>
                      <img src={`images/${info.img}`} alt="#" />
                      {info.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hedingh3 text_align_left">
                <h3>Useful Link</h3>
                <ul className="menu_footer">
                  {usefulLinks.map(info => (
                    <li key={info.name}>
                      <Link to={info.href}>{info.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {subscribed
              ? (<div className="logo col-md-4">

                <div className=" titlepage text_align_left">
                  <h1>Thank you for Subscribing! 💕</h1>
                </div>
              </div>)

              : (<div className="col-md-4">
                <div className="hedingh3  text_align_left">
                  <h3>Newsletter</h3>
                  <form id="colof" className="form_subscri" onSubmit={submitHandler}>
                    <input
                      className="newsl"
                      placeholder="Your email"
                      type="email"
                      name="Email"
                      value={values.email}
                      onChange={changeHandler}
                      required
                    />
                    <button className="subsci_btn">Subscribe</button>
                  </form>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  © 2024 All Rights Reserved. Design by {"petacat"} /ᐠ. .ᐟ\ฅ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}