"use client";
import React from "react";

interface Props {
  error: Error;
  rest: () => void;
}

const ErrorPage = ({ error, rest }: Props) => {
  return (
    <>
      <div className="font-bold">{error.message}</div>
      <button className="btn" onClick={() => rest()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
