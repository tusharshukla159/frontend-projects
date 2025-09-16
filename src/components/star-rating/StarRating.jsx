import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
const StarRating = ({ number = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleMouseClick = (index) => {
    setRating(index);
  };
  const handleMouseMove = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="starRating">
      {[...Array(number)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
};

export default StarRating;
