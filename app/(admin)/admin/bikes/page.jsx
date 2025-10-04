import React from "react";
import BikesList from "./_components/bike-list";

export const metadata = {
  title: "Bikes | Ride Mart Admin",
  description: "Manage Bikes in your marketplace",
};

const BikesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bikes Management</h1>
      <BikesList />
    </div>
  );
};

export default BikesPage;
