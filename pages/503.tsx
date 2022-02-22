import { NextPage } from "next";
import Page from "../components/Page";

const Error503: NextPage = () => {
  return (
    <Page page="503 Under Maintenance">
        <div className="m-resp mt-24 mb-24 flex flex-col text-white justify-center items-center">
          <h2 className="text-6xl md:text-7xl font-bold">503</h2>
          <h1 className="text-center text-3xl md:text-4xl mt-12 font-bold">Page under maintenance :/</h1>
          <p className="font-sm md:font-base mt-3 leading-7 text-center opacity-50">
          The page is currently under maintenance, this shouldn’t take too long. We are sorry for the inconvenience :(
          </p>
          <button onClick={() => window.location.href="/"} className="font-sm md:font-base mt-12 hover:scale-105 transition-all font-bold bg-gold p-3 rounded-md pl-8 pr-8">Try Again</button>
        </div>
    </Page>
  )
}

export default Error503;