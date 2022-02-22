import { NextPage } from "next";
import Page from "../components/Page";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero: React.FC<{}> = () => {
  return (
    <div className="w-auto h-min relative text-white p-resp">
      <header className="inset-0  mt-28 mb-28 w-full md:w-1/2">
        <h2 className="font-light text-lg md:text-xl mb-2 uppercase">
          a new era of esports
        </h2>
        <h1 className="font-bold text-5xl md:text-6xl">Play. Compete. Earn Money.</h1>
        <p className="!leading-7 mt-10 opacity-70 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <button className="text-sm md:text-base text-gold transition-all hover:scale-105 mt-16 bg-dark p-4 pl-7 pr-7 border-2 border-gold font-bold rounded-md">
          Start your Journey
        </button>
      </header>
    </div>
  );
};

const Banner: React.FC<{}> = () => {
  const banner_items = ["cod", "cs", "fortnite", "lol", "overwatch", "pubg"];
  return (
    <div className="flex-wrap justify-evenly flex border-t-2 border-b-2 border-gold w-full bg-dark p-5 items-center">
      {banner_items.map((item) => (
        <div key={item} className="ml-3.5 mr-3.5"><Image
          className="opacity-70 transition-all hover:opacity-100 cursor-pointer"
          src={"/icons/" + item + ".svg"}
          alt={item + " icon"}
          width={100}
          height={100}
        /></div>
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

const FeaturedGames: React.FC<{}> = () => {
  const features_games = [
    { image: "game", name: "Call of Duty", competitions: 51 },
    { image: "game", name: "Call of Duty", competitions: 51 },
    { image: "game", name: "Call of Duty", competitions: 51 },
  ];
  return (
    <div className="m-resp mt-24 mb-12 text-white">
      <header className="w-full flex flex-col sm:flex-row justify-start sm:justify-between sm:mt-0 sm:items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Games</h2>
        <p className="opacity-50 mt-2 sm:mt-0 text-sm md:text-base font-medium hover:opacity-100 transition-all">
          <Link href="/games">View More</Link>
        </p>
      </header>
      <div className="flex flex-wrap w-full mt-16 justify-around">
        {features_games.map((game, iter) => (
          <FeaturedGame key={iter} {...game} />
        ))}
      </div>
    </div>
  );
};

const TimelineNavigator: React.FC<{
  items: number;
  navChange: (count: number) => void;
}> = (props) => {
  let [count, setCount] = useState(0);
  const width = () => {
    return { width: (count / (props.items - 1)) * 100 + "%" };
  };
  const navChanged = (count: number) => {
    setCount(count);
    props.navChange(count);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let val = 0;
      setCount((prev) => (prev == props.items - 1 ? val : (val = prev + 1)));
      navChanged(val);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-1 bg-diminished flex justify-between relative">
      <div className="h-full bg-gold absolute" style={width()} />
      {[...Array(props.items)].map((_, iter) => (
        <div
          onClick={() => navChanged(iter)}
          key={iter}
          className={
            "z-10 cursor-pointer hover:scale-105 -mt-1 w-3 h-3 rounded-full " +
            (count >= iter ? "bg-gold" : "bg-white")
          }
        />
      ))}
    </div>
  );
};

const ArticleSection: React.FC<{}> = () => {
  const content = [
    {
      name: "About Us",
      text: "sample text",
      image: "game",
    },
    {
      name: "What to Do",
      text: "sample text",
      image: "game",
    },
    {
      name: "What to Play",
      text: "sample text",
      image: "game",
    },
    {
      name: "Community",
      text: "sample text",
      image: "game",
    },
  ];
  let [contentCount, setContentCount] = useState(0);
  return (
    <div className="mt-2 flex flex-col md:flex-row border-diminished border-t-2 border-b-2 w-full bg-gray">
      <div className="md:w-1/2 h-full -mb-1.5">
        <Image
          className="opacity-50"
          src={"/images/" + content[contentCount].image + ".jpg"}
          alt={"game"}
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col justify-between text-white md:w-1/2 p-resp pl-14 pt-12 pb-12 h-auto">
        <header>
          <h2 className="font-bold text-xl md:text-2xl">{content[contentCount].name}</h2>
          <p className="leading-7 mt-1.5 mb-16 text-sm opacity-70">
            {content[contentCount].text}
          </p>
        </header>
        <TimelineNavigator
          items={content.length}
          navChange={(count) => setContentCount(count)}
        />
      </div>
    </div>
  );
};

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

const FeaturedTournaments: React.FC<{}> = () => {
  return (
    <div className="m-resp mt-24 text-white">
      <header className="w-full flex flex-col sm:flex-row justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Discover Tournaments</h2>
        <p className="mt-2 sm:mt-0 hover:opacity-100 transition-all font-sm md:font-base opacity-50 font-medium">
          <Link href="/tournaments">Explore Tournaments</Link>
        </p>
      </header>
      <div className="mt-16 flex flex-wrap justify-around">
        <FeaturedTournament />
        <FeaturedTournament />
        <FeaturedTournament />
      </div>
    </div>
  );
};

const ActionBanner: React.FC<{}> = () => {
  return (
    <div className="mb-24 justify-between items-center flex text-white mt-10 w-auto bg-gray p-8  m-resp rounded-lg flex-col md:flex-row">
      <header className="flex-grow md:mr-10">
        <h2 className="font-bold text-lg md:text-xl">Start your ESports Journey</h2>
        <p className="text-sm mt-3 opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>
      <button className="whitespace-nowrap self-start md:self-center mt-8 md:mt-0 text-gold transition-all hover:scale-105 bg-transparent p-4 pl-7 pr-7 border-2 border-gold font-bold rounded-md text-sm">
          Start your Journey
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Page page="Home">
      <Hero />
      <Banner />
      <FeaturedGames />
      <ArticleSection />
      <FeaturedTournaments />
      <ActionBanner />
    </Page>
  );
};

export default Home;
