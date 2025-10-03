import React from "react";

const BikePage = async ({ params }) => {
  const { id } = await params;
  console.log("id is : ", id);
  return <div>BikePage : {id}</div>;
};

export default BikePage;
