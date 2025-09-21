import Image from "next/image";
import React from "react";

const SubSection = () => {
  return (
    <div className="bg-primary lg:w-3/7 p-5 rounded-2xl h- flex flex-col">
      <div className="  hidden md:flex  relative h-4/8 w-full mt-6">
        <Image
          src="/hunter1.jpg"
          alt="hunter"
          fill
          className="object-cover rounded-2xl"
        />

        <div className=" absolute top-0 left-2/3 bg-black/50 text-white/80 px-3 py-6  h-full text-xs ">
          At the heart of the Hunter beats a fuel-injected, long-stroke 350cc
          J-engine that delivers a smoother ride, higher RPM and dollops of
          torque. Paired with a steady downtube spine frame and grounded
          suspension, the Hunter 350 gives the right amount of power and
          precision, whether you're revving up the city streets or gunning down
          the motorway.{" "}
        </div>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center my-6 gap-4 h-e40">
  {["/hunter2.jpg", "/hunter3.jpg", "/hunter4.jpg"].map((i) => (
    <div key={i} className="rounded-2xl overflow-hidden">
      <Image
        src={i}
        height={300}
        width={300}
        alt="hunter"
        className="rounded-2xl object-contain transition-transform duration-500 hover:scale-110"
      />
    </div>
  ))}
</div>


      <div className="flex items-center justify-center my-4 gap-4 ">
        {["COLORS", "HIGHLIGHT", "GALLERY", "REVIEWS", "FAQ'S"].map((i) => (
          <div key={i} className="">
            <p
              className={`text-secondary ${ i === "GALLERY" ? "underline underline-offset-8" : "" }`} > {" "} {i}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-6 gap-12 ">
        {[
          { img: "/map.png", title: "find a Store" },
          { img: "/service.png" , title: "Book a Service" },
          { img: "/support.png", title: "Customer Support"  },
        ].map((i) => (
          <div key={i.title} className="flex flex-col items-center ">
            <Image
              src={i.img}
              height={60}
              width={60}
              alt="hunter"
              className=" object-contain "
            />
            <p className="text-secondary  pt-5">{i.title.toUpperCase()}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10 relative">
        <div className=" border-t-1 border-amber-50/45 w-3/4"></div>
        <Image src="/royal-badge.png" height={70} width={70} alt="royalbadge" className="absolute -top-8 right-0"/>
      </div>
      
    </div>
  );
};

export default SubSection;
