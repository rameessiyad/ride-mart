"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Camera } from "lucide-react";
import { Button } from "./ui/button";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  const handleTextSubmit = (e) => {};
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
    </div>
  );
};

export default HomeSearch;
