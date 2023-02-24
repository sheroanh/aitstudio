import { NavBar } from "../@ait-studio/component/layout";
import { Public } from "../@ait-studio/component/wrapper";
import Head from "next/head";

export default function Home() {
  return (
    <Public>
      <Head>
        <title>Short by AiT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <div className="flex flex-col h-full w-full min-h-screen items-center justify-center">
          <p className="font-semibold text-xl text-gray-600">Demo</p>
        </div>
      </NavBar>
    </Public>
  );
}
