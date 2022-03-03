import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Page from "../components/Page";
import "react-toastify/dist/ReactToastify.min.css";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

const Reset: NextPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/dashboard";
      }
    });
  });
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const reset = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(!email) return;
    sendPasswordResetEmail(auth, email).then(() => {
    	toast.success("Password reset email sent!");
	setCompleted(true);
    }).catch((error: any) => {
      let message = "";
      switch(error.code) {
        case "auth/invalid-email":
          message = "Invalid email address";
          break;
        case "auth/too-many-requests":
          message = "Too many login attempts";
          break;
	case "auth/user-not-found":
	  message = "User not found";
	  break;
        default:
          message = error.code;
      }
      toast.error(message);
    });
  };
  return (
    <Page page="Reset Password">
      <ToastContainer theme="dark" />
      <div className="m-resp flex flex-col justify-center items-center mt-24 mb-24">
        <form
          onSubmit={reset}
          className="sm:bg-gray rounded-lg w-full sm:max-w-lg p-0 sm:p-12 flex flex-col text-white"
        >
          <header>
            <h1 className="text-white font-bold text-3xl">Reset Password</h1>
            <p className="text-sm mt-3.5">
	    	{ completed ? "A password reset email has been sent to your email address." : "A password reset email will be sent to your inbox."}
            </p>
          </header>
	  <div className={completed ? "hidden" : "flex flex-col w-full mt-12"}>
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
                    <button className={(email ? "opacity-100 hover:scale-105 cursor-pointer" : "opacity-50") + " p-3 text-white bg-gold font-bold rounded-md mt-10 transition-all"}>
            Submit
          </button>
	  </div>
        </form>
      </div>
    </Page>
  );
};

export default Reset;
