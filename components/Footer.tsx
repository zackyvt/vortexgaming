import Image from "next/image";
import Link from "next/link";

const FooterNavItem: React.FC<{ name: string; href: string }> = (props) => {
  return (
    <p className="text-xs mb-1.5 opacity-70 hover:opacity-100">
      <Link href={props.href}>{props.name}</Link>
    </p>
  );
};

const FooterNavSection: React.FC<{
  name: string;
  items: { name: string; href: string }[];
}> = (props) => {
  return (
    <div className="mr-16">
      <h2 className="font-sm font-bold">{props.name}</h2>
      <div className="mt-3.5">
        {props.items.map((item) => (
          <FooterNavItem name={item.name} href={item.href} key={item.name} />
        ))}
      </div>
    </div>
  );
};

const FooterNav: React.FC<{}> = () => {
  const nav = [
    {
      name: "Resources",
      items: [
        { name: "Games", href: "/games" },
        { name: "Tournaments", href: "/tournaments" },
      ],
    },
    {
      name: "Contact",
      items: [
        { name: "Support", href: "/support" },
        { name: "Email", href: "mailto:support@vortexgaming.us" }
      ],
    },
    {
      name: "Social",
      items: [
        { name: "Discord", href: "/discord" },
        { name: "Youtube", href: "/youtube" },
        { name: "Twitter", href: "/discord" },
        { name: "Instagram", href: "/youtube" }
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Terms of Service", href: "/tos" },
        { name: "Privacy Policy", href: "/privacypolicy" },
        { name: "Cookie Policy", href: "/cookiepolicy" }
      ],
    },
  ];
  return (
    <nav className="flex ml-28">
      {nav.map((section) => (
        <FooterNavSection
          key={section.name}
          name={section.name}
          items={section.items}
        />
      ))}
    </nav>
  );
};

const FooterHeader: React.FC<{}> = () => {
  return (
    <header className="flex">
      <div className="w-8 mr-4 pt-0.5">
        <Image src="/images/logo.png" alt="logo" width="1000" height="1000" />
      </div>
      <div>
        <h2 className="font-bold text-sm">VortexGaming</h2>
        <p className="text-xs italic">a new era of sports</p>
      </div>
    </header>
  );
};

const Footer: React.FC<{}> = () => {
  return (
    <footer className="flex border-t-2 border-gold pl-20 pr-20 p-8 text-white font-sans">
      <div>
        <FooterHeader />
        <p className="text-xs mt-10">© 2022 Vortex Gaming</p>
      </div>
      <FooterNav />
    </footer>
  );
};

export default Footer;
