"use client";

import React, { useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Camera } from "lucide-react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isUploading, setisUploading] = useState(false);

  const handleTextSubmit = (e) => {};
  const handleImageSubmit = (e) => {};

  const onDrop = (acceptedFiles) => {
    // Do something with the files
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"],
      },
      maxFiles: 1,
    });
  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-32 md:pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-md"
          />

          <div className="absolute right-2 flex items-center gap-1">
            <Camera
              size={35}
              className="cursor-pointer rounded-xl p-1.5"
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
            <Button type="submit" className="rounded-full">
              Search
            </Button>
          </div>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSubmit}>
            <div>
              {imagePreview ? (
                <div></div>
              ) : (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive && !isDragReject
                    ? "Leave the file here to upload"
                    : "Drag & drop a bike image or click to select"}
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
