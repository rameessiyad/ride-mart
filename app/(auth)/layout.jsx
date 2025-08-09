import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <header>
      <nav>
        <Link>
          <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        </Link>
      </nav>
    </header>
  );
};

export default AuthLayout;
