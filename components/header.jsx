import {} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header>
      <nav>
        <Link href={`${isAdminPage ? "/admin" : "/"}`}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
