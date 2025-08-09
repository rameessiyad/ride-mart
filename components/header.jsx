import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Bike } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop:blur-md z-50 border-b">
      <nav className="mx-auto p-4 flex items-center justify-between">
        <Link href={`${isAdminPage ? "/admin" : "/"}`}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={60}
            className="h-18 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>

        <div>
          <SignedIn>
            <Link href={"/saved-bikes"}>
              <Button>
                <Bike size={18} />
                <span className="hidden md:inline">Saved Bikes</span>
              </Button>
            </Link>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
