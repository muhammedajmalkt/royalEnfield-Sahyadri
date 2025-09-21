import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className=" relative ">
      <div className="lg:w-1/4">
        <h1 className="font-bold text-xl">HUNTER 350</h1>
        <p className=" text-sm leading-4 text-white/80 ">
          The Hunter 350 fills a space in the Royal Enfield lineup. It has the
          sound, feel, and character you expect from a Royal Enfield single, and
          the lighter, more nimble chassis design feels more modern and refined.
          It's not as traditional, but that's the point—and it certainly isn't
          generic
        </p>

        <div className="flex items-center gap-1 justify-center">
          <Image
            src="/arrow.png"
            height={100}
            width={100}
            alt="aroow"
            className="w-7 h-1.5 "
          />
          <h4 className="text-secondary">LERN MORE</h4>
        </div>
      </div>

      {/* Badge */}
      <div className=" hidden md:flex absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 ">
        <Image
          src="/hunter-badge.png"
          height={120}
          width={120}
          alt="hunter"
          className="w-60 h-60 spin"
        />
      </div>

      <div className="absolute left-[52%] lg:top-[-8%] -translate-x-1/2 bgs-amber-800 w-full group ">
        <Image
          src="/hunter.png"
          height={400}
          width={400}
          alt="hunter"
          className=" object-cover  w-12/12 h-4/4 transition-transform  duration-600  group-hover:scale-110"
        />
         <div className=" hidden lg:flex absolute  bottom-14 h-1/2 z-50 w-full bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent "></div>

      </div>
    </div>
  );
};

export default Main;
