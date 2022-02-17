import Link from "next/link";
import Image from "next/image";

const NavItem: React.FC<{ name: string; href: string; active: boolean }> = (
  props
) => {
  return (
    <p className={(props.active ? "font-bold" : "hover:opacity-100 opacity-70 ") + " mr-8 text-sm"}>
      <Link href={props.href}>{props.name}</Link>
    </p>
  );
};

const NavBar: React.FC<{ page: string }> = (props: { page: string }) => {
  const pages: { [key: string]: string } = {
    Home: "/",
    Games: "/games",
    Tournaments: "/tournaments",
    Support: "/support",
  };
  return (
    <nav className="flex flex-grow">
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

const Header: React.FC<{ page: string }> = (props) => {
  return (
    <header className="flex items-center border-b-2 border-gold bg-dark w-full text-white p-6 pl-20 pr-20">
      <div className="w-10 mr-20 pt-1">
        <Image
          src="/images/logo.png"
          alt="logo"
          width="1000"
          height="1000"
        />
      </div>
      <NavBar page={props.page} />
      <button className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md text-sm border text-gold font-bold border-gold mr-2">Login</button>
      <button className="transition-all hover:scale-105 p-2 pl-6 pr-6 rounded-md text-sm bg-gold font-bold">Join Free</button>
    </header>
  );
};

export default Header;
