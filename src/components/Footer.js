import React from "react";

function Footer() {
  return (
    <footer id="footer">
      {/* ====== FOOTER TOP ====== */}
      <div id="footer-top" className="container">
        <div className="row">
          {/* About / Logo / Description */}
          <div className="block col-sm-3">
            <a href="#">
              <img src="images/logo.png" alt="One Ring Rentals" />
            </a>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
              volutpat quam dignissim, convallis elit id, efficitur sem. Vivamus
              ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
              pellentesque nec at metus.
            </p>
          </div>

          {/* Helpful Links */}
          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              <li><a href="#">All rentals</a></li>
              <li><a href="#">List your rental</a></li>
              <li><a href="#">Read our FAQs</a></li>
            </ul>
          </div>

          {/* Popular Regions */}
          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              {/* Left column */}
              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-1.jpeg" alt="Rhovanion" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Rhovanion</a></p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-2.jpeg" alt="Eriador" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Eriador</a></p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-3.jpeg" alt="Bay of Belfalas" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Bay of Belfalas</a></p>
                  </li>
                </ul>
              </div>

              {/* Right column */}
              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-4.jpeg" alt="Mordor" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Mordor</a></p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-5.jpeg" alt="Arnor" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Arnor</a></p>
                  </li>
                  <li>
                    <div className="image">
                      <a href="properties-detail.html">
                        <img src="/images/home/region-6.jpeg" alt="Forlindon" />
                      </a>
                    </div>
                    <p><a href="properties-detail.html">Forlindon</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== COPYRIGHT SECTION ====== */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              &copy; 2014 One Ring Rentals
              <ul className="social-networks">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export Footer
export default Footer;
