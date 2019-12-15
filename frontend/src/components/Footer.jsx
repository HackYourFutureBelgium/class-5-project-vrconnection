import React from 'react';

const Footer = () => (
  <footer className="page-footer font-small mdb-color pt-4 bg-dark text-white">
    <div className="container text-center text-md-left">
      <div className="row text-center text-md-left mt-3 pb-3">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">VRconnection</h6>
          <p>is aimed to connecct refugee and volunteers.</p>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <a href="/otherVolunteers">Other Volunteers</a>
          </p>
          <p>
            <a href="/services">Available Services</a>
          </p>
          <p>
            <a href="/faq">FAQ</a>
          </p>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p className="fas fa-home mr-3"> Brussels, Belguim</p>
          <p className="fas fa-envelope mr-3"> info@gmail.com</p>
          <p className="fas fa-phone mr-3">+ 01 234 567 88</p>
        </div>
      </div>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left">© 2019 Copyright:
            <a href="/">
              <strong> VRconnection.com</strong>
            </a>
          </p>
        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="/facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="/twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="/google">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="/linkedin">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
