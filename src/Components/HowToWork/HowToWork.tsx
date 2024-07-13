import React from "react";
import styles from "./work.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img34.png";
import img4 from "../../assets/img4.png";

export default function HowToWork() {
  return (
    <div className={`${styles.howWork} `}>
      <div className={`${styles.layoutContainer} row w-100`}>
        <div className={`col-md-5 ${styles.workCaption}  `}>
          <div className={` ${styles.captionContainer}`}>
            <p
              className="w-50 fw-bold m-3"
              style={{ color: "#c98a40", fontSize: "18px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
        </div>
        <div
          className={`col-md-7 ${styles.title}`}
          style={{ backgroundColor: "#C98A40" }}
        >
          <h2 className="text-center  text-white py-3">
            How we <br /> work
          </h2>
        </div>
      </div>

      <div className={`${styles.images} text-center`}>
        <div className="row ">
          <div className="col-md-3">
            <img src={img1} className="img-fluid p-2" />
          </div>
          <div className="col-md-3">
            <img src={img2} className="img-fluid p-2" />
          </div>
          <div className="col-md-3">
            <img src={img3} className="img-fluid p-2 " />
          </div>
          <div className="col-md-3">
            <img src={img4} className="img-fluid p-2" />
          </div>
        </div>
        <div className="text-center m-2">
          <button className=" text-uppercase fw-bold">Contact us</button>
        </div>
      </div>
    </div>
  );
}
