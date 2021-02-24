import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-5">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    MyFreshCart<span></span>
                  </h5>
                  <p>About the company, little discription will goes here.. </p>
                </div>
                <div className='social-icon'>
                <ul className="list-icon">
                    <li className="wrap-icon"><a href='https://www.facebook.com'><i className="fab fa-facebook-f"></i></a></li>
                    <li className="wrap-icon"><a href='https://www.twitter.com'><i className="fab fa-twitter"></i></a></li>
                    <li className="wrap-icon"><a href='https://www.youtube.com'><i className="fab fa-youtube"></i></a></li>
                 
                    <li className="wrap-icon"><a href='https://www.instagram.com'><i className="fab fa-instagram"></i></a></li>
             
       
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <a href="hm">Offers</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to='/aboutus'>About Us</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="hm">term & Conditions</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="hm">Privacy Policy</a>
                      </div>
                    </li>
                  
                    <li>
                      <div className="thumb-content">
                        <a href="hm">Faq</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p className='mail'>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      info@ MyFreshCart.in
                    </a>
                  </p>
                  <ul className="social-footer2"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright MyFreshCart © 2021. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
