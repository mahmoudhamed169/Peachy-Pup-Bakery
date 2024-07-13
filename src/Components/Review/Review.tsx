import React from "react";
import styles from "./review.module.css";

export default function Review() {
  return (
    <div className="reviow bg-white my-2 p-5 rounded-4">
      <h5 className="">Kathryn Murphy</h5>
      <p className={`${styles.p} my-3`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </p>
      <div className=" mt-4">
        {Array.from({ length: 5 }, (v, k) => (
          <i
            className="fa-solid fa-star p-1"
            key={k}
            style={{ color: "#C98A40" }}
          ></i>
        ))}
      </div>
    </div>
  );
}
