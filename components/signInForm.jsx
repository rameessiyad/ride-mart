"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";

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

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    setLoading(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/",
      });
    } catch (err) {
      console.error("Google Sign In Error", err);
    }
    setLoading(false);
  };
  return (
    <div className="h-auto bg-white border-2 shadow-md rounded-md w-80 md:w-96">
      <div className="p-6 md:p-8">
        <div className="py-10">
          <h1 className="text-xl font-semibold text-center">
            Sign in to Ride Mart
          </h1>
          <p className="text-xs text-center text-gray-500 mt-1">
            Welcome back! Please sign in to continue
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-4 border-2 rounded-md"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-4 border-2 rounded-md"
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-4 cursor-pointer"
          >
            {loading ? "Signing In..." : "Continue"}
          </Button>

          {/* google signin button */}
          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={handleGoogleSignIn}
            className="w-full my-4 cursor-pointer"
          >
            <FcGoogle />
            <span> {loading ? "Redirecting..." : "Sign In with Google"}</span>
          </Button>

          {error && <p className="text-red-600 mt-4">{error.message}</p>}
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
