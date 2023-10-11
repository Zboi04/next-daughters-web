import React from "react";
import Image from "next/image";

export default function TrustedByLogos() {
  return (
    <div className="flex flex-col w-[1440px] h-[593px] items-center justify-center gap-[48px] relative">
      <div className="relative w-[796px] transition-all duration-[0.6s] ease-[ease] [font-family:'Montserrat-Bold',Helvetica] font-bold text-text-color text-[64px] text-center tracking-[0] leading-[48px]">
        Trusted By
      </div>
      <div className="gap-[40px] p-[10px] self-stretch w-full flex-[0_0_auto] overflow-hidden overflow-x-scroll flex items-center relative rounded-[30px]">
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <div className="[background:linear-gradient(180deg,rgb(11,11,11)_0%,rgb(23,21,21)_100%)] bg-[url(/static/landing-page/futures-church.svg)] relative w-[200px] h-[200px] rounded-[100px] border border-solid border-text-color bg-[100%_100%]" />
          <div className="relative w-[362px] ml-[-1.00px] mr-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px]">
            @FuturesChurch
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <div className="bg-neutral-950 relative w-[200px] h-[200px] rounded-[100px] bg-[url(/static/landing-page/lou-engle.svg)] bg-[100%_100%]" />
          <div className="relative w-[362px] ml-[-1.00px] mr-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px]">
            @LOUENGLE
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <div className="[background:linear-gradient(180deg,rgb(248,248,239)_0%,rgb(248,248,239)_100%)] relative w-[200px] h-[200px] rounded-[100px] bg-[url(/static/landing-page/oceans-church.svg)] bg-[100%_100%]" />
          <div className="relative w-[362px] ml-[-1.00px] mr-[-1.00px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px]">
            @OceansChurch
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <Image
            className="relative w-[200px] h-[200px]"
            alt="Gen Z For Jesus"
            src="/static/landing-page/gen-z.svg"
            width={200}
            height={200}
          />
          <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
            @GenzForJesus
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <Image
            className="relative w-[200px] h-[200px]"
            alt="The Well Women"
            src="/static/landing-page/the-well.svg"
            width={200}
            height={200}
          />
          <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
            @theWellWomen
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <Image
            className="relative w-[200px] h-[200px]"
            alt="Pray For Tech"
            src="/static/landing-page/pray-tech.svg"
            width={200}
            height={200}
          />
          <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
            @PrayforTech
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <div className="bg-d-9d-9d-9 relative w-[200px] h-[200px] rounded-[100px] border border-solid border-text-color bg-[url(/static/landing-page/kumi.svg)] bg-[100%_100%]" />
          <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#48423a] text-[32px] text-center tracking-[0] leading-[26px] whitespace-nowrap">
            @KUMIWOMEN
          </div>
        </div>
        <div className="flex-col w-[360px] h-[360px] justify-center gap-[50px] bg-[#ffffff80] shadow-[1px_1px_10px_#48423a1a,-1px_-1px_10px_#48423a1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center relative rounded-[30px]">
          <div className="bg-d-9d-9d-9 relative w-[200px] h-[200px] rounded-[100px] border border-solid border-text-color bg-[url(/static/landing-page/hope-city.svg)] bg-[100%_100%]" />
          <div className="relative w-[334px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-text-color text-[32px] text-center tracking-[0] leading-[26px]">
            @HopeCity NC
          </div>
        </div>
      </div>
    </div>
  );
}