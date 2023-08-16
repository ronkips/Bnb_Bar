import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>BNB BAR</title>
        <meta name="description" content="Drinks at your doorstep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer ><Footer /></footer>
    </>
  );
}
