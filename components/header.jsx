import {} from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div>
     <div className="p-3">
      <img src="/logo.png" alt="logo" className="w-32 object-contain" />
     </div>
    </div>
  );
};

export default Header;
