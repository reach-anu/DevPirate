import { GiPirateCaptain, GiPirateFlag } from "react-icons/gi";

export default function Navbar() {
  return (
    <header className="absolute top-0 w-screen">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:p-8 bg-transparent">
        <div className="flex lg:flex-1">
          <a href="#" className="font-bold text-xl flex items-center gap-[5px]">
            <GiPirateFlag />
            <span>DevPirate</span>
          </a>
        </div>
        <div className="lg:flex lg:gap-[70px] hidden">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Explore
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
