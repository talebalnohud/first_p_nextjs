"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="y8kfb9pc">
      {({ open }) => (
        <button className="btn" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
