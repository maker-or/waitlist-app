// app/page.tsx or pages/index.tsx

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Never Miss a Funding Opportunity</title>
        <meta name="description" content="Our AI Agent automatically applies to funding programs for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-[100svh] w-[100svw] flex flex-col items-center justify-center bg-[#e5e5e5] bg-cover bg-center px-6 py-12 " >
      <div className="h-[90svh] w-[90svw] rounded-4xl flex flex-col items-center justify-center bg-[#1e3049] bg-cover bg-center px-6 py-12 relative" style={{ backgroundImage: 'url("/cloud-bg.webp")' }}>
        {/* Black overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black opacity-20 rounded-4xl"></div>
        
        <div className="text-white flex flex-col items-center text-center max-w-2xl z-10 relative">
          <h1 className="text-[4em]  font-serif italic  leading-snug md:leading-[1.2]">
            "Never Miss a Funding Opportunity"
          </h1>

          <p className="mt-6  text-white text-lg md:text-2xl font-light">
            Our AI Agent automatically applies to incubators, accelerators, and government programs—so you don't have to. Focus on growing your startup while we handle the applications!
          </p>

          <Link href="/waitlist" className="mt-10">
            <button className="bg-white text-black italic font-serif text-xl md:text-2xl px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition duration-300">
              Join the waitlist
            </button>
          </Link>
          <p className=" mt-8 font-semibold text-xl text-white italic font-serif ">
          By founders to founders
        </p>
        </div>

        </div>

      </main>
    </>
  );
}
