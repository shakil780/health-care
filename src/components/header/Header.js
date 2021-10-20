import React from "react";
import hero from "../../assets/img/slide_new.png";
function Header() {
  return (
    <div style={{ height: "500px" }} className="mt-5 container row">
      <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
        <article className="">
          <h1 className="display-2">Total Health Care Solution</h1>
          <p className="lead">
            Health care (also health-care or healthcare) is the maintenance or
            improvement of health via the prevention, diagnosis, treatment,
            recovery, or cure of disease, illness, injury, and other physical
            and mental impairments in people
          </p>
        </article>
      </div>
      <div className="d-flex justify-content-end col-12 col-md-6 col-lg-6">
        <img style={{ height: "500px" }} src={hero} alt="" />
      </div>
    </div>
  );
}

export default Header;
