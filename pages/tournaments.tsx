import { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";
import Image from "next/image";

const FeaturedTournament: React.FC<{}> = () => {
  return (
    <div className="mb-10 hover:scale-105 cursor-pointer transition-all rounded-lg bg-gray p-5 max-w-xs ml-2.5 mr-2.5">
      <div>
        <Image
          className="rounded-lg"
          src={"/images/game.jpg"}
          alt={"game"}
          width={1920}
          height={1080}
        />
      </div>
      <header className="flex flex-col md:flex-row mt-3 mb-2 justify-between">
        <div>
          <h2 className="font-bold text-md md:text-lg">Friday Platinum Series</h2>
          <p className="text-xs opacity-50">January 5 | 2pm PST</p>
        </div>
        <div className="text-right">
          <h3 className="font-medium text-gold">$25,000</h3>
          <p className="text-xs opacity-50">142 registered</p>
        </div>
      </header>
    </div>
  );
};

const Tournaments: NextPage = () => {
  return (
    <Page page="Tournaments">
      <header className="m-resp mt-20">
      <h1 className="text-white font-bold text-4xl md:text-5xl">Tournaments</h1>
      </header>
      <div className="p-resp mb-24 text-white flex flex-wrap w-full mt-20 justify-around">
        <FeaturedTournament/>
        <FeaturedTournament/>
        <FeaturedTournament/>
      </div>
    </Page>
  );
};

export default Tournaments;