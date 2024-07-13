import React from "react";

export default function Recipe({ recipe }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={recipe.strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{recipe.strMeal}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            excepturi eos quidem harum ullam sapiente?
          </p>
        </div>
      </div>
    </div>
  );
}
