import React from "react";

const WelcomePage = () => {
  return (
    <div className="body-content">
      <div className="title">
        <h4>Welcome to Saroj TODO LIST</h4>
      </div>
      <div className="connect">
        <div className="title">
          <h5>Connect Me Through</h5>
        </div>
        <div className="account">
          <div className="row">
            <div className="col-md-4">
              <div className="account-content">
                <a href="https://www.facebook.com/xaroz.tmng" target="_blank">
                  <span className="span-a">
                    <i class="fa-brands fa-facebook"></i>
                  </span>
                </a>
                <p>Facebook</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="account-content">
                <a
                  href="https://www.linkedin.com/in/saroj-ghalan-bab96a226/"
                  target="_blank"
                >
                  <span className="span-a">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                </a>
                <p>LinkedIn</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="account-content">
                <a href="mailto:jmestmnag@gmail.com">
                  <span className="span-a">
                    <i class="fa-brands fa-google"></i>
                  </span>
                </a>
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="click-here">
          <p>Click on Icon to connect</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
