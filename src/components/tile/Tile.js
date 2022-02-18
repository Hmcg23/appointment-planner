import React from "react";

export const Tile = ({obj}) => {
  const objArr = Object.values(obj);

  return (
    <div className="tile-container">
      {objArr.map((value, index) => (
          <p key={index} clasName={`${index === 0 ? "tile-title" : ""} tile`}>{value}</p>
  ))}
    </div>
  );
};