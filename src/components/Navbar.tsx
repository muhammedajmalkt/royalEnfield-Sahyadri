import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full  font-bebas   ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 ">
        <div className="flex justify-between items-center h-16 ">
          <div className="hidden md:flex flex-shrink-0 text-2xl font-bold text-gray-900">
            <Image
              width={120}
              height={120}
              src="/logo-red.png"
              alt="MLG 1901 logo"
              className="h-auto lg:w-64 w-2.5"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-700">
              MOTOCYCLES
            </Link>
            <Link href="/locate" className="text-white hover:text-gray-700">
              LOCATE
            </Link>
            <Link href="/events" className="text-white hover:text-gray-700">
              EVENTS
            </Link>
            <Link
              href="/accessories"
              className="text-white hover:text-gray-700"
            >
              ACCESSORIES
            </Link>
          </div>
          <button className=" hidden md:flex text-red-500 cursor-pointer hover:drop-shadow-2xl hover:text-white hover:bg-red-500 px-2 py-1 rounded-lg">LOGIN</button>

          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
