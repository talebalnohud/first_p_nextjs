"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
