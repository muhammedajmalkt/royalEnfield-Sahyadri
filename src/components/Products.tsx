import Image from "next/image";
import React from "react";

const product = [
  {
    name: "HELMET",
    model: "Scorpion EXO R320 Helmet",
    badge: "/G.png",
    image: "/helmet.png",
  },
  {
    name: "GLOVES",
    model: "Bogotto F-ST Gloves ",
    badge: "/U.png",
    image: "/gloves.png",
  },
  {
    name: "JACKET",
    model: "Icon Motorcycle Jacket ",
    badge: "/N.png",
    image: "/jacket.png",
  },
];

const Products = () => {
  return (
    <div className=" font-bebas grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6  mt-36 scale-z-150">
      {product.map((item, i) => (
        <div key={i} className="rounded-xl overflow-hidden shadow-md bg-gradient-to-b  from-[#000000]   to-[#444343]/80 cursor-pointer group">

          <div className=" text-white p-3">
            <h2 className="text-secondary">{item.name}</h2>
            <p className="text-sm font-semibold">{item.model.toUpperCase()}</p>
          </div>

          <div className="relative flex justify-center items-center  p-4">
            <Image
              src={item.badge}
              alt={`${item.name} badge`}
              width={120}
              height={120}
              className="absolute top-10 left-8"
            />
            <Image
              src={item.image}
              alt={item.name}
              width={item.name === "GLOVES" ?90 :150}
              height={150}
              className="object-contain scale-z-100 transition-transform  duration-500 group-hover:scale-110"
            />
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between   px-6  pb-2">
            <div className="flex items-center gap-1 justify-center">
              <Image
                src="/arrow.png"
                height={100}
                width={100}
                alt="aroow"
                className="w-7 h-1.5 "
              />
              <h4 className="text-secondary ">LERN MORE</h4>
            </div>
            <p className="text-neutral">EXCLUSIVE</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Products;
