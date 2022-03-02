import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  page: string;
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.page}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      </Head>
      <div className="flex flex-col font-sans min-h-screen bg-dark">
        <Header page={props.page}/>
        <main className="flex-grow">{props.children}</main>
        <Footer/>
      </div>
    </>
  );
};

export default Page;
