import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Bike } from "lucide-react";

const BikeCard = ({ bike }) => {
  return (
    <Card>
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
      </div>
    </Card>
  );
};

export default BikeCard;
