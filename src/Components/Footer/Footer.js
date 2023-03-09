import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Company Info</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-6">
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products"
                />
              </div>
              <button type="submit" className="btn btn-primary ml-2">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
