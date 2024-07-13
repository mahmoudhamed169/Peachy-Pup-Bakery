import Review from "../Review/Review";
import styles from "./testymonial.module.css";
export default function Testymonials() {
  return (
    <div className={`${styles.testymonial}  `}>
      <div className=" mt-5">
        <h2
          className={` ${styles.title} text-uppercase text-center pt-5   text-white`}
        >
          testymonials
        </h2>
      </div>
      <div className=" w-75  m-auto pb-4 mb-5">
        <div className="reviews   ">
          <div className="row">
            {Array.from({ length: 4 }, (v, k) => (
              <div className="col-md-6 my-3" key={k}>
                <Review />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
