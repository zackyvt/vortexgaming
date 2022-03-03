import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Page from "../components/Page";
import { auth } from "../lib/firebase";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

const SignUp: NextPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/dashboard";
      }
    });
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const signUp = (e: any) => {
    e.preventDefault();
    if(!(email && password && (password === cpassword))) return;
	createUserWithEmailAndPassword(auth, email, password).then((credential: any) => {
		const user = credential.user;
		console.log(user);
	}).catch((e: any) => {
		let msg = "";
	    switch(e.code) {
	    		case "auth/invalid-email":
				msg = "Invalid email";
				break;
	    		case "auth/email-already-in-use":
				msg = "Email already in use";
				break;
			case "auth/too-many-requests":
				msg = "Too many sign up attempts";
				break;
			case "auth/weak-password":
				msg = "Password has to be at least 8 characters containing a number and uppercase letters."
				break;
			default:
				msg = e.code;
		}
		toast.error(msg);
	});

  }
  return (
    <Page page="Sign Up">
      <ToastContainer theme="dark"/>
      <div className="m-resp flex flex-col justify-center items-center mt-24 mb-24">
        <form onSubmit={signUp} className="sm:bg-gray rounded-lg w-full sm:max-w-lg p-0 sm:p-12 flex flex-col text-white">
          <header className="mb-12">
            <h1 className="text-white font-bold text-3xl">Sign Up</h1>
            <p className="text-sm mt-3.5">
              Have an account?{" "}
              <span className="transition-all opacity-70 hover:opacity-100 font-semibold">
                <Link href="/login">Sign In</Link>
              </span>
            </p>
          </header>
          <label htmlFor="email" className="mt-6 text-sm mb-1.5">
            Email
          </label>
          <input
		    value={email}
			onChange={(e) => setEmail(e.target.value)}
            className="text-black rounded-md p-3 text-sm"
            type="text"
            name="email"
            placeholder="Enter your email..."
          />
          <label htmlFor="password" className="mt-6 text-sm mb-1.5">
            Password
          </label>
          <input
		    value={password}
			onChange={(e) => setPassword(e.target.value)}
            className="text-black rounded-md p-3 text-sm"
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <label htmlFor="confirmPassword" className="mt-6 text-sm mb-1.5">
            Confirm Password
          </label>
	  <div className="w-full relative">
          <input
		    value={cpassword}
			onChange={(e) => setCPassword(e.target.value)}
            className={(cpassword === password ? "" : "bg-red ") + "text-black w-full rounded-md p-3 text-sm"}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password..."
          />
	  </div>
          <div className="flex justify-start mt-10">
            <p className="text-xs ml-2.5 opacity-75 leading-5">By creating an account, you are agreeing to our <span className="underline cursor-pointer transition-all">Terms and Conditions</span> and <span className="underline cursor-pointer transition-all">Privacy Policy</span>.</p>
          </div>
          <button className={(email && password && (password === cpassword) ? "opacity-100 hover:scale-105" : "opacity-50") + " p-3 text-white bg-gold font-bold rounded-md mt-10 transition-all"}>
            Create Account
          </button>
        </form>
      </div>
    </Page>
  );
};

export default SignUp;
