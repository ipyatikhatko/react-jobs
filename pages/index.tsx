import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FreshJob from "@/components/JobPreview/JobPreview";
import PostPreview from "@/components/PostPreview/PostPreview";

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
      <div className="relative flex">
        <div className="flex-1 flex flex-col">
          <div className="sticky bg-white top-0 p-2 border-r border-b border-slate-100">
            <h3 className="ml-2 font-light text-2xl">Recently added jobs 🚀</h3>
          </div>
          <div className="flex flex-col divide-y">
            <FreshJob
              company="Super co."
              title="Middle React Developer (Ed-tech company)"
              jobRate={{ from: 2000, to: 3000 }}
            />
            <FreshJob
              company="Mega co."
              title="Middle React Developer (fintech)"
              jobRate={{ from: 2500 }}
            />
            <FreshJob
              company="Yup co."
              title="Junior React Developer"
              jobRate={{ from: 1500, to: 2000 }}
            />
            <FreshJob
              company="SupaTech co."
              title="Senior React Developer (AI project)"
              jobRate={{ from: 4000, to: 5000 }}
            />
            <FreshJob
              company="SlayTech co."
              title="Middle React Developer (Ed-tech company)"
              jobRate={{ from: 2000, to: 3000 }}
            />
          </div>
        </div>
        <div className="p-2 h-full w-[500px] sticky top-0 flex flex-col">
          <h3 className="py-4 font-bold text-lg text-center">
            You may find these posts interesting 🤔
          </h3>
          <div className="flex flex-col gap-4">
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
          </div>
        </div>
      </div>
    </>
  );
}
