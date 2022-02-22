import { NextPage } from "next";
import Page from "../components/Page";

const Error500: NextPage = () => {
  return (
    <Page page="500 Error Occured">
        <div className="m-resp mt-24 mb-24 flex flex-col text-white justify-center items-center">
          <h2 className="text-6xl md:text-7xl font-bold">500</h2>
          <h1 className="text-center text-3xl md:text-4xl mt-12 font-bold">A server error occured :/</h1>
          <p className="font-sm md:font-base mt-3 leading-7 text-center opacity-50">
          An error has occured on the server, this shouldn’t have happened. If this persists, please contact us.
          </p>
          <button onClick={() => window.location.href="/"} className="font-sm md:font-base mt-12 hover:scale-105 transition-all font-bold bg-gold p-3 rounded-md pl-8 pr-8">Try Again</button>
        </div>
    </Page>
  )
}

export default Error500;