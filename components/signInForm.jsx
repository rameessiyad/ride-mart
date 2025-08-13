'use client';

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SignInForm = () => {
  return (
    <div className="h-auto bg-white border-2 shadow-md rounded-md w-80 md:w-96">
      <div className="p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-center">Sign in to Ride Mart</h1>
        <form action="">
          <Input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mt-4 border-2 rounded-md"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full p-2 mt-4 border-2 rounded-md"
            required
          />
          <Button variant="" className="w-full my-4">Sign In</Button>
        </form>
        <p className="text-sm font-light text-center">
          Don&apos;t have an account ? <Link href={"/sign-up"} className="text-blue-600 font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
