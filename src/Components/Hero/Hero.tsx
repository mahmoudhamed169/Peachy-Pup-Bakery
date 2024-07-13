import React from "react";
import styles from "./hero.module.css";
import img from "../../assets/Place Your Image Here (Double Click to Edit)_ 1.png";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className="row w-100 h-100">
        <div className={`${styles.heroInfo} col-md-7 h-100`}>
          <div className="w-75 m-auto d-flex justify-content-between flex-column h-75 ps-5 pb-3">
            <div className="title mb-5">
              <h6 className="text-uppercase text-white mt-3">
                Peachy Pup <br /> Bakery
              </h6>
            </div>
            <div className="caption pt-5 mt-5">
              <h1 className="text-uppercase text-white fw-bold display-2">
                Tasty pastries
              </h1>
              <p className={`${styles.p} ms-3 py-3`}>
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been the industry's <br />
                standard dummy text ever since the
              </p>
              <button className={`${styles.button} m-3`}>SEE MORE</button>
            </div>
          </div>
          <div className="h-25 row">
            <div className={`${styles.icons} col-md-6 p-3`}>
              <i className="fa-brands fa-vk"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="col-md-6 d-flex align-items-end">
              <div className={`d-flex text-white  ${styles.phone}`}>
                <h6>Telephone:</h6>
                <p className="ms-2">+7 700 000 00 00</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.heroImgContainer} col-md-5`}>
          <img src={img} className={`${styles.img}`} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
