import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Page from "../components/Page";
import { auth } from "../lib/firebase";

const SignUp: NextPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/dashboard";
      }
    });
  });
  return (
    <Page page="Sign Up">
      <div className="m-resp flex flex-col justify-center items-center mt-24 mb-24">
        <form className="sm:bg-gray rounded-lg w-full sm:max-w-lg p-0 sm:p-12 flex flex-col text-white">
          <header className="mb-12">
            <h1 className="text-white font-bold text-3xl">Sign Up</h1>
            <p className="text-sm mt-3.5">
              Have an account?{" "}
              <span className="transition-all opacity-70 hover:opacity-100 font-semibold">
                <Link href="/login">Sign In</Link>
              </span>
            </p>
          </header>
          <label htmlFor="username" className="text-sm mb-1.5">
            Username
          </label>
          <input
            className="text-black rounded-md p-3 text-sm"
            type="text"
            name="username"
            placeholder="Enter a username..."
          />
          <label htmlFor="email" className="mt-6 text-sm mb-1.5">
            Email
          </label>
          <input
            className="text-black rounded-md p-3 text-sm"
            type="text"
            name="email"
            placeholder="Enter your email..."
          />
          <label htmlFor="password" className="mt-6 text-sm mb-1.5">
            Password
          </label>
          <input
            className="text-black rounded-md p-3 text-sm"
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <label htmlFor="confirmPassword" className="mt-6 text-sm mb-1.5">
            Confirm Password
          </label>
          <input
            className="text-black rounded-md p-3 text-sm"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password..."
          />
          <div className="flex justify-start mt-10">
            <input type="checkbox" name="accept"/>
            <p className="text-xs ml-2.5 opacity-75">Click to accept <span className="underline cursor-pointer transition-all">Terms and Conditions</span> and <span className="underline cursor-pointer transition-all">Privacy Policy</span>.</p>
          </div>
          <div className="flex justify-start mt-2.5">
            <input type="checkbox" name="accept"/>
            <p className="text-xs ml-2.5 opacity-75">I certify that I am at least 18 years of age and don&apos;t already have another Vortex Gaming account.</p>
          </div>
          <button className="p-3 text-white bg-gold font-bold rounded-md mt-10 hover:scale-105 transition-all">
            Create Account
          </button>
        </form>
      </div>
    </Page>
  );
};

export default SignUp;
