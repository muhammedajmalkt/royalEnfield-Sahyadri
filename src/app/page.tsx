import InfinitySlider from "@/components/InfinitySlider";
import MainSection from "@/components/MainSection";
import SubSection from "@/components/SubSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center ">
      <div className="absolute top-1/2 left-3 -translate-y-1/2">
        <Image
          width={120}
          height={120}
          src="/MLG 1901.png"
          alt="MLG 1901 logo"
          className="h-auto lg:w-[35px] w-2.5"
        />
      </div>

      <div className="absolute top-1/2 right-3 -translate-y-1/2">
        <Image
          width={120}
          height={120}
          src="/MADE LIKE A GUN.png"
          alt="Made Like A Gun logo"
          className="h-auto lg:w-[35px] w-2.5"
        />
      </div>

      <div className="absolute top-3 w-screen">
        <InfinitySlider />
        <div className="absolute  top-0 h-[85px] z-50 w-full bg-gradient-to-t from-[#212121] via-[#212121] to-transparent"></div>
      </div>
      <div className="absolute bottom-3 left-0 w-screen">
        <InfinitySlider />
      </div>


      <section className=" flex gap-5 px-22 py-24  ">
        <MainSection/>
        <SubSection/>
      </section>
    </main>
  );
}
