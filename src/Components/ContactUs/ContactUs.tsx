import React from "react";
import Form from "../Form/Form";
import styles from "./contact.module.css";

export default function ContactUs() {
  return (
    <div>
      <div className=" my-5">
        <h2
          className={`text-uppercase text-center ${styles.title}`}
          style={{ color: "#C98A40" }}
        >
          Contact Us
        </h2>
      </div>
      <div className=" m-auto " style={{ width: "60%" }}>
        <div className="row">
          <div className="col-md-7">
            <Form />
          </div>
          <div className="col-md-5 bg-sucess mt-5">
            <div className="d-flex mt-5">
              <i
                className="fa-solid fa-envelope my-2 ms-2"
                style={{ color: "#C98A40" }}
              ></i>
              <p className="ms-3 mt-1">upskilling.eg1@gmail.com</p>
            </div>
            <div className="d-flex">
              <i
                className="fa-solid fa-phone my-2 ms-2"
                style={{ color: "#C98A40" }}
              ></i>
              <p className="ms-3 mt-1">+20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
