import React from "react";
import styles from "./about.module.css";
import person from "../../assets/person.png";

export default function AboutUs() {
  return (
    <div className={` w-100 ${styles.about}`}>
      <div className="row w-100 h-100">
        <div className={`col-md-7 h-100 ${styles.aboutCaption}`}>
          <div className={`${styles.captionContainer}`}>
            <h2 className=" text-white py-3 ">About us</h2>
            <p className="p-3 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <button className=" text-uppercase fw-bold m-3">Contact us</button>
          </div>
        </div>
        <div className="col-md-5">
          <div className={`${styles.imgContainer} `}>
            <img src={person} className={`${styles.img}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
