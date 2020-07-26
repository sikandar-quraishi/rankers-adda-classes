import React from 'react';
import LOGO from '../../assets/images/logo.png';

import './index.scss';

export default function Footer() {
  return (

    <footer id="footer-2" className="footer division">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              <img src={LOGO} width="172" height="40" alt="footer-logo" />
              <p>Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor
              undo congue magna laoreet augue sapien
</p>

            </div>
          </div> */}

          {/* <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              <h5 className="h5-md">Quick Links</h5>

              <ul className="foo-links clearfix">
                <li><a href={NaN}>About eTreeks</a></li>
                <li><a href={NaN}>Courses Catalog</a></li>
                <li><a href={NaN}>Our Testimonials</a></li>
                <li><a href={NaN}>Premium Learning</a></li>
                <li><a href={NaN}>From the Blog</a></li>
              </ul>

            </div>
          </div> */}

          {/* <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links mb-40">

              <h5 className="h5-md">Popular Categories</h5>

              <ul className="clearfix">
                <li><a href={NaN}>Business English</a></li>
                <li><a href={NaN}>Software Development</a></li>
                <li><a href={NaN}>Finance & Accounting</a></li>
                <li><a href={NaN}>Health and Fitness</a></li>
                <li><a href={NaN}>Office Productivity</a></li>
              </ul>

            </div>
          </div> */}

          {/* <div className="col-md-7 col-xl-3">
            <div className="footer-form mb-20">

              <h5 className="h5-md">Stay in Touch</h5>

              <form className="newsletter-form">

                <div className="input-group">
                  <input type="email" autoComplete="off" className="form-control" placeholder="Your Email Address" required id="s-email" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-rose tra-rose-hover">Subscribe</button>
                  </span>
                </div>
                <label htmlFor="s-email" className="form-notification"></label>
              </form>
            </div>
          </div> */}
        </div>

        <div className="bottom-footer">
          <div className="row">

            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li><p>&copy; {(new Date()).getFullYear()} Tathagat. Brands are the property of their respective owners.</p></li>
                <li><p><a href="tel:123456789">987654321</a></p></li>
                <li><p className="last-li"><a href="mailto:yourdomain@mail.com">hello@domain.com</a></p></li>
              </ul>
            </div>

            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">

                <li><a href={NaN} className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href={NaN} className="ico-twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a href={NaN} className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href={NaN} className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>


    // <footer>
    //     <span className="fs-14">
    //       © {(new Date()).getFullYear()} Tathagat. Brands are the property of their respective owners.
    //     </span>
    // </footer>
  )
};