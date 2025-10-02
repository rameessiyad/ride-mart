'use client';

import React from "react";
import { Input } from "./ui/input";

const HomeSearch = () => {
  const handleTextSubmit = (e) => {};
  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use AI Image Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
