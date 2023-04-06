import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FreshJob from "@/components/FreshJob";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ReactJobs - Home</title>
        <meta
          name="description"
          content="ReactJobs - react, next.js, remix.js jobs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <div className="sticky bg-slate-300 top-0 p-2 border-r border-b font-bold text-xl">
            <h3>Recently added jobs</h3>
          </div>
          <div className="flex flex-col divide-y">
            <FreshJob />
            <FreshJob />
            <FreshJob />
            <FreshJob />
            <FreshJob />
            <FreshJob />
            <FreshJob />
            <FreshJob />
          </div>
        </div>
        <div className="flex-1 flex flex-col"></div>
      </div>
    </>
  );
}
