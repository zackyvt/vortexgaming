import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const NavItem: React.FC<{ name: string; href: string; active: boolean, mobile: boolean }> = (
  props
) => {
  return (
    <p className={(props.active ? "font-bold " : "hover:opacity-100 opacity-70 ") + (props.mobile ? "text-lg mt-3.5" : "mr-4 lg:mr-8 text-xs md:text-sm")}>
      <Link href={props.href}>{props.name}</Link>
    </p>
  );
};

const MobileNavbar: React.FC<{children: any}> = (props) => {
  let [visible, setVisible] = useState(false);
  return (
    <>
      <div className="scale-75 block sm:hidden" onClick={() => setVisible(prev => !prev)}>
        <div className="w-12 rounded-lg h-1.5 bg-white"/>
        <div className="mt-1.5 w-12 rounded-lg h-1.5 bg-white"/>
        <div className="mt-1.5 w-12 rounded-lg h-1.5 bg-white"/>
      </div>
      { visible ? <div className="flex h-full flex-col p-resp items-start pt-6 z-20 absolute w-screen bg-dark inset-0">
	<Image src="/icons/x.svg" width="50" height="50" alt="exit" onClick={() => setVisible(prev => !visible)}/>
	<div className="ml-2 mt-8">{props.children}</div>
      </div> : <div></div> }
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
  <>
    <nav className="flex-grow hidden sm:flex">
      {Object.keys(pages).map((key: string) => (
        <NavItem
          key={key}
          name={key}
          href={pages[key]}
          active={props.page == key}
	  mobile={false}
        />
      ))}
    </nav>
      <div className="flex-grow block sm:hidden"></div>
      <div className="hidden sm:block"><Profile mobile={false}/></div>
      <MobileNavbar>
      {Object.keys(pages).map((key: string) => 
        <NavItem
          key={key}
          name={key}
          href={pages[key]}
          active={props.page == key}
	  mobile={true}
        />
      )}
      <div className="mt-16"><Profile mobile={true}/></div>
      </MobileNavbar>
      </>
  );
};

const Profile: React.FC<{mobile: boolean}> = (props) => {
  const [profile, setProfile] = useState("");
  const [pfp, setPfp] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      	setPfp(user.photoURL ? user.photoURL! : "/images/pfp.jpg");
        setProfile(user.displayName ? user.displayName! : user.email!.split("@")[0]);
      } else {
        setProfile("");
      }
    });
  });
  return (
    <div>
      <div className={(profile ? "hidden" : "flex") + (props.mobile ? " flex-col text-md" : " flex-row text-xs md:text-sm")}>
        <button onClick={() => window.location.href="/login"} className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md border text-gold font-bold border-gold">Login</button>
	<div className={props.mobile ? "mb-4" : "mr-2"}/>
        <button onClick={() => window.location.href="/signup"} className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md bg-gold font-bold">Join Free</button>     
      </div>
      <div className={(!profile ? "hidden" : "flex") + " items-center " + (props.mobile ? "flex-row-reverse" : "flex-row")}>
        <header className={props.mobile ? "ml-4 text-left" : "mr-4 text-right"}>
          <h2 className={"text-white font-sans font-bold uppercase " + (props.mobile ? "text-lg" : "text-sm")}>{profile}</h2>
          <p onClick={() => getAuth().signOut()} className={"font-light cursor-pointer hover:font-normal " + (props.mobile ? "text-sm" : "text-xs")}>Sign Out</p>
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
    </header>
  );
};

export default Header;
