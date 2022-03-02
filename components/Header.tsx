import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const NavItem: React.FC<{ name: string; href: string; active: boolean }> = (
  props
) => {
  return (
    <p className={(props.active ? "font-bold" : "hover:opacity-100 opacity-70 ") + " mr-4 lg:mr-8 text-xs md:text-sm"}>
      <Link href={props.href}>{props.name}</Link>
    </p>
  );
};

const MobileNavbar: React.FC<{}> = () => {
  return (
    <>
      <div className="scale-75 block sm:hidden">
        <div className="w-12 rounded-lg h-1.5 bg-white"/>
        <div className="mt-1.5 w-12 rounded-lg h-1.5 bg-white"/>
        <div className="mt-1.5 w-12 rounded-lg h-1.5 bg-white"/>
      </div>
    </>
  )
};

const NavBar: React.FC<{ page: string }> = (props: { page: string }) => {
  const pages: { [key: string]: string } = {
    Home: "/",
    Games: "/games",
    Tournaments: "/tournaments",
    Support: "/support",
  };
  return (
    <nav className="flex-grow hidden sm:flex">
      {Object.keys(pages).map((key: string) => (
        <NavItem
          key={key}
          name={key}
          href={pages[key]}
          active={props.page == key}
        />
      ))}
    </nav>
  );
};

const Profile: React.FC<{}> = () => {
  const [profile, setProfile] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile(true);
      } else {
        setProfile(false);
      }
    });
  });
  return (
    <div className="hidden sm:block">
      <div className={profile ? "hidden" : "flex"}>
        <button onClick={() => window.location.href="/login"} className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md text-xs md:text-sm border text-gold font-bold border-gold mr-2">Login</button>
        <button onClick={() => window.location.href="/signup"} className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md text-xs md:text-sm bg-gold font-bold">Join Free</button>     
      </div>
      <div className={(!profile ? "hidden" : "flex") + " items-center"}>
        <header className="text-right mr-4">
          <h2 className="text-white font-sans text-sm font-bold uppercase">John Doe</h2>
          <p onClick={() => getAuth().signOut()} className="text-xs font-light cursor-pointer hover:font-normal">Sign Out</p>
        </header>
        <Image alt="pfp" src="/images/pfp.jpg" width="35" height="35" className="rounded-full"/>
      </div>
    </div>
  )
}

const Header: React.FC<{ page: string }> = (props) => {
  return (
    <header className="flex items-center border-b-2 border-gold bg-dark w-full text-white p-6 p-resp">
      <div onClick={() => window.location.href="/"} className="cursor-pointer w-10 mr-8 md:mr-12 pt-1">
        <Image
          src="/images/logo.png"
          alt="logo"
          width="1000"
          height="1000"
        />
      </div>
      <NavBar page={props.page} />
      <div className="flex-grow block sm:hidden"></div>
      <Profile/>
      <MobileNavbar />
    </header>
  );
};

export default Header;
