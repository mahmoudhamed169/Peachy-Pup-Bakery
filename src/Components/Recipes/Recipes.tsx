import axios from "axios";
import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import styles from "./recipes.module.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const getAllRecipes = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
      );

      setRecipes(response.data.meals);
      console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecipes();
    return () => {};
  }, []);
  return (
    <div className="w-100">
      <h2
        className={` ${styles.title} text-center text-uppercase my-3 `}
        style={{ color: "#C98A40" }}
      >
        Recipes
      </h2>

      <div className={`${styles.recipes}  `}>
        <div className="row m-auto">
          {recipes.map((recipe, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <Recipe recipe={recipe} />
            </div>
          ))}
        </div>
        <div className="text-center m-2">
          <button className=" text-uppercase fw-bold">Contact us</button>
        </div>
      </div>
    </div>
  );
}
