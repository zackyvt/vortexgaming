import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Page from "../components/Page";
import "react-toastify/dist/ReactToastify.min.css";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login: NextPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/dashboard";
      }
    });
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(!(password && email)) return;
    signInWithEmailAndPassword(auth, email, password).then((credential) => {
      const user = credential.user;
      window.location.href = "/dashboard";
    }).catch((error) => {
      let message = "";
      switch(error.code) {
        case "auth/invalid-email":
          message = "Invalid email address";
          break;
        case "auth/user-not-found":
          message = "User not found";
          break;
        case "auth/wrong-password":
          message = "Incorrect password";
          break;
        case "auth/too-many-requests":
          message = "Too many login attempts";
          break;
        default:
          message = error.code;
      }
      toast.error(message);
    });
  };
  return (
    <Page page="Login">
      <ToastContainer theme="dark" />
      <div className="m-resp flex flex-col justify-center items-center mt-24 mb-24">
        <form
          onSubmit={login}
          className="sm:bg-gray rounded-lg w-full sm:max-w-lg p-0 sm:p-12 flex flex-col text-white"
        >
          <header className="mb-12">
            <h1 className="text-white font-bold text-3xl">Sign In</h1>
            <p className="text-sm mt-3.5">
              Not a member?{" "}
              <span className="transition-all opacity-70 hover:opacity-100 font-semibold">
                <Link href="/signup">Sign up</Link>
              </span>
            </p>
          </header>
          <label htmlFor="email" className="text-sm mb-1.5">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-black rounded-md p-3 text-sm"
            type="email"
            name="email"
            placeholder="Enter your email..."
          />
          <label htmlFor="email" className="mt-6 text-sm mb-1.5">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="text-black rounded-md p-3 text-sm"
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <p className="text-xs mt-3.5 opacity-70 hover:opacity-100 cursor-pointer transition-all">
            Forgot password?
          </p>
          <button className="p-3 text-white bg-gold font-bold rounded-md mt-10 hover:scale-105 transition-all">
            Sign In
          </button>
        </form>
      </div>
    </Page>
  );
};

export default Login;
