import { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";
import Image from "next/image";

const FeaturedGame: React.FC<{
  image: string;
  name: string;
  competitions: number;
}> = (props) => {
  return (
    <div className="max-w-xs mb-10 mr-6 ml-6 transition-all hover:scale-105 cursor-pointer rounded-xl bg-gray">
      <div className="opacity-70 -m-1 shadow-standard rounded-xl border-gold">
        <Image
          className="rounded-xl"
          src={"/images/" + props.image + ".jpg"}
          alt={props.name + " game"}
          width={1920}
          height={1080}
        />
      </div>
      <h3 className="font-bold text-base md:text-lg text-center mt-7">{props.name}</h3>
      <p className="text-xs opacity-70 text-center mb-8">
        {props.competitions} competitions
      </p>
    </div>
  );
};

const Games: NextPage = () => {
  const features_games = [
    { image: "game", name: "Call of Duty", competitions: 51 },
    { image: "game", name: "Call of Duty", competitions: 51 },
    { image: "game", name: "Call of Duty", competitions: 51 },
  ];
  return (
    <Page page="Games">
      <header className="m-resp mt-20">
      <h1 className="text-white font-bold text-4xl md:text-5xl">Games</h1>
      </header>
      <div className="p-resp mb-24 text-white flex flex-wrap w-full mt-20 justify-around">
        {features_games.map((game, iter) => (
          <FeaturedGame key={iter} {...game} />
        ))}
      </div>
    </Page>
  );
};

export default Games;