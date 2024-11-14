import React from "react";

export const Burger = ({ active, handleClick, showLogo }) => {
  return (
    <span
      onClick={handleClick}
      className={`${
        active ? "active" : ""
      } burger w-6 cursor-pointer items-center h-full flex flex-col justify-between relative`}
    >
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className={`line lineBurger lineBurger${i + 1} bg-primary`} />
      ))}
    </span>
  );
};
