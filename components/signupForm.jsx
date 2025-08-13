"use client";

import { useSignIn } from "@clerk/nextjs";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUpForm = () => {
  const { signIn, isLoaded, error } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-auto bg-white border-2 shadow-md rounded-md w-80 md:w-96">
      <div className="p-6 md:p-8">
        <div className="py-10">
          <h1 className="text-xl font-semibold text-center">
            Sign Up to Ride Mart
          </h1>
          <p className="text-xs text-center text-gray-500 mt-1">
            Welcome, Please fill the details to get started
          </p>
        </div>
        {/* google signup */}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 justify-between">
            <Input
              type="text"
              placeholder="First Name"
              className="w-full border-2 p-2 rounded-md"
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="w-full border-2 p-2 rounded-md"
              required
            />
          </div>
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

          <Button type="submit" disabled={loading} className="w-full mt-4">
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>

          <p className="flex items-center my-4 text-sm text-gray-500">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="px-2">or</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </p>

          {/* Google signup button */}
          <Button
            type="submit"
            variant="outline"
            disabled={loading}
            className="w-full my-4"
          >
            <FcGoogle />
            <span>{loading ? "Redirecting..." : "Sign Up with Google"}</span>
          </Button>
        </form>
        <p className="text-sm font-light text-center">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-blue-600 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
