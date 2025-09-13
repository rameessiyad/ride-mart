
import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

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
          <div>poda</div>
        )}
      </div>
    </Card>
  );
};

export default BikeCard;
