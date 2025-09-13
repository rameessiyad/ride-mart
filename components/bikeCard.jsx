"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Bike, Heart } from "lucide-react";
import { Button } from "./ui/button";

const BikeCard = ({ bike }) => {
  const [isSaved, setIsSaved] = useState(bike.wishlisted);

  const handleToggleSaved = async (e) => {};
  return (
    <Card className="overflow-hidden hover:shadow-lg transition group">
      <div className="relative h-48">
        {bike.images && bike.images.length > 0 ? (
          <div>
            <Image
              src={bike.images[0]}
              alt={`${bike.make} ${bike.model}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Bike className="h-12 w-12 text-gray-400" />
          </div>
        )}

        <Button
          varant="ghost"
          className={`absolute top-2  right-2 bg-white/90 rounded-full p-1.5 ${
            isSaved
              ? "text-red-500 hover:text-red-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={handleToggleSaved}
        >
          <Heart className={isSaved ? "fill-current" : ""} size={20} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col mb-2">
          <h3 className="text-lg font-bold line-clamp-1">
            {bike.make} {bike.model}
          </h3>
          <span className="text-xl text-blue-600">{bike.price.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BikeCard;
