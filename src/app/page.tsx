'use client';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {

  // Remove the showWaitlist state as we're now using a separate page

  const gridColumns = Array(9).fill(null);

  return (
    <div className="bg-[#020304] flex justify-center w-[100svw] h-[100svh] overflow-hidden">
      <Head>
        <title>Never Miss a Funding Opportunity</title>
        <meta name="description" content="AI agent for funding applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full max-w-[1891px] min-h-screen">
        <div className="hidden md:block absolute inset-0">
          {gridColumns.map((_, index) => (
            <div
              key={`grid-column-${index}`}
              className="absolute top-0 h-full border-r border-dashed border-[#95939347]"
              style={{
                left: `${index * 209}px`,
                width: '209px',
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col ml-4 md:ml-[209px]">
          <section className="mt-24 md:mt-[151px] w-full md:w-[1094px] flex flex-col gap-6">
            <h1 className="font-bold text-white text-4xl md:text-[64.2px]  font-['Inter',Helvetica] max-w-full md:max-w-[688px] leading-none">
              &quot;Never Miss a Funding Opportunity&quot;
            </h1>

            <p className="font-normal text-[#ffffffcc] text-xl md:text-4xl  font-['Inter',Helvetica] max-w-full leading-slug">
              Our AI Agent automatically applies to incubators, accelerators,
              and government programs—so you don&apos;t have to. Focus on
              growing your startup while we handle the applications!
            </p>
          </section>

          <div className='flex-row w-[20%] gap-4 bg-[#141313] rounded-2xl text-2xl border-4 border-solid border-[#2b2929] px-2 py-6 mt-5 flex justify-center font-medium text-amber-50/50 hover:text-amber-50 items-center'>
            <Link href="/waitlist">
              <button>
                join the waitlist
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-16 h-16 md:w-[82px] md:h-[82px] bg-[#4c2817] rounded-xl md:rounded-[18.1px] overflow-hidden">
          <div className="relative w-14 h-14 md:w-[73px] md:h-[73px] top-1 left-1 md:top-1 md:left-[5px] rounded-lg md:rounded-[12.55px] overflow-hidden [background:linear-gradient(132deg,rgba(2,9,11,1)_1%,rgba(214,80,2,1)_100%)]">
            <div className="relative w-12 h-12 md:w-[67px] md:h-[67px] top-2 left-2 md:top-8 md:left-8 rounded-full border-none shadow-[inset_1.89px_2.32px_6.44px_-0.17px_#ff5e00,inset_-5.23px_-1.54px_11.74px_-0.09px_#ff5e00,0px_3.11px_6.26px_1.78px_#00000075] [background:linear-gradient(172deg,rgba(8,9,10,1)_0%,rgba(119,44,7,1)_100%)]" />
          </div>
        </div>
      </div>
    </div>
  );
}