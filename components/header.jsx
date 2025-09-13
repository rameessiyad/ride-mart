import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Bike, Heart, Layout } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto p-3 flex items-center justify-between">
        <Link href={`${isAdminPage ? "/admin" : "/"}`} className="flex">
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

        <div className="flex items-center space-x-2">
          {isAdminPage ? (
            <>
              <Link href={"/"}>
                <Button
                  variant="outline"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  <span className="hidden md:inline">Back to App</span>
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              <Link href={"/saved-bikes"}>
                <Button className="cursor-pointer">
                  <Bike size={18} />
                  <span className="hidden md:inline">Saved Bikes</span>
                </Button>
              </Link>
              {!isAdmin ? (
                <Link href={"/reservations"}>
                  <Button variant="outline" className="cursor-pointer">
                    <Heart size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button variant="outline">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="outline" className="cursor-pointer">
                Login
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
