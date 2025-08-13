"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SignInForm = () => {
  const { signIn, isLoaded, error } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  return (
    <div className="h-auto bg-white border-2 shadow-md rounded-md w-80 md:w-96">
      <div className="p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-center">
          Sign in to Ride Mart
        </h1>
        <form onSubmit={handleSubmit}>
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
          <Button variant="" className="w-full my-4">
            Sign In
          </Button>
        </form>
        <p className="text-sm font-light text-center">
          Don&apos;t have an account ?{" "}
          <Link href={"/sign-up"} className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
