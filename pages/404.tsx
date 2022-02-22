import { NextPage } from "next";
import Page from "../components/Page";

const Error404: NextPage = () => {
  return (
    <Page page="404 Not Found">
        <div className="m-resp mt-24 mb-24 flex flex-col text-white justify-center items-center">
          <h2 className="text-6xl md:text-7xl font-bold">404</h2>
          <h1 className="text-center text-3xl md:text-4xl mt-12 font-bold">This page doesn&apos;t exist :/</h1>
          <p className="font-sm md:font-base mt-3 leading-7 text-center opacity-50">
            You reached a page that does not exist! You may return back to the Home page.
          </p>
          <button onClick={() => window.location.href="/"} className="font-sm md:font-base mt-12 hover:scale-105 transition-all font-bold bg-gold p-3 rounded-md pl-8 pr-8">Return to Home</button>
        </div>
    </Page>
  )
}

export default Error404;