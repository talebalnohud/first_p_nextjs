"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
//cloudinary is here
interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <CldUploadWidget
      uploadPreset="y8kfb9pc"
      options={{
        sources: ["local"],
        multiple: false,
        maxFiles: 5,
      }}
      onUpload={(result, widget) => {
        if (result.event !== "success") return;
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
      }}
    >
      {({ open }) => (
        <button className="btn" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
