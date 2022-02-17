import { NextPage } from "next";
import Page from "../components/Page";
import Image from "next/image";

const Hero: React.FC<{}> = () => {
  return (
    <div className="w-full relative text-white">
      <Image
        className="z-0 opacity-5 inset-0"
        alt="background"
        src="/images/background.jpg"
        width="3840"
        height="2160"
      />
      <header className="absolute z-10 inset-0 ml-20 mt-36 w-1/2">
        <h2 className="font-light text-xl mb-2 uppercase">
          a new era of esports
        </h2>
        <h1 className="font-bold text-6xl">Play. Compete. Earn Money.</h1>
        <p className="leading-7 mt-10 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <button className="text-gold transition-all hover:scale-105 mt-16 bg-dark p-4 pl-7 pr-7 border-2 border-gold font-bold rounded-md">
          Start your Journey
        </button>
      </header>
    </div>
  );
};

const Banner: React.FC<{}> = () => {
  const banner_items = ["cod", "cs", "fortnite", "lol", "overwatch", "pubg"];
  return (
    <div className="justify-evenly flex border-t-2 border-b-2 border-gold w-full bg-dark p-5 items-center">
      {banner_items.map((item) => (
        <Image
          className="opacity-70 transition-all hover:opacity-100 cursor-pointer"
          src={"/icons/" + item + ".svg"}
          key={item}
          alt={item + " icon"}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

const FeaturedGame: React.FC<{
  image: string;
  name: string;
  competitions: number;
}> = (props) => {
  return (
    <div className="transition-all hover:scale-105 cursor-pointer w-80 rounded-xl bg-gray">
      <div className="opacity-70 -m-1 shadow-standard rounded-xl border-gold">
        <Image
          className="rounded-xl"
          src={"/images/" + props.image + ".jpg"}
          alt={props.name + " game"}
          width={1920}
          height={1080}
        />
      </div>
      <h3 className="font-bold text-lg text-center mt-7">{props.name}</h3>
      <p className="text-xs opacity-70 text-center mb-8">{props.competitions} competitions</p>
    </div>
  );
};

const FeaturedGames: React.FC<{}> = () => {
  const features_games = [
    {image: "game", name: "Call of Duty", competitions: 51},
    {image: "game", name: "Call of Duty", competitions: 51},
    {image: "game", name: "Call of Duty", competitions: 51}
  ];
  return (
    <div className="m-20 mt-24 mb-24 text-white">
      <h2 className="text-3xl font-bold">Featured Games</h2>
      <div className="flex w-full mt-16 justify-between">
        {
          features_games.map((game, iter) => <FeaturedGame key={iter} {...game}/>)
        }
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Page page="Home">
      <Hero />
      <Banner />
      <FeaturedGames />
      <div className="flex border-white border-t-2 border-b-2 w-full bg-gray mb-24">
        <div className="w-1/2 bg-white h-full">
          <Image
            src={"/images/game.jpg"}
            alt={"game"}
            width={1920}
            height={1080}
          />
        </div>
        <div className="text-white w-1/2 h-full pr-20 pl-20 pt-20">
          <h2 className="font-bold text-3xl">About</h2>
          <p className="leading-7 mt-10 text-sm opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        </div>
      </div>
    </Page>
  );
};

export default Home;
