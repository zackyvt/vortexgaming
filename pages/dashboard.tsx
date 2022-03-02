import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next"
import { useEffect } from "react";
import Page from "../components/Page"
import { auth } from "../lib/firebase";

const Dashboard: NextPage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        window.location.href = "/login";
      }
    });
  });
  return (
    <Page page="Dashboard">

    </Page>
  )
}

export default Dashboard;