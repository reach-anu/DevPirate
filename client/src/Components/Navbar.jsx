import { GiPirateFlag } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-screen bg-[#202736] h-20 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:p-8 bg-transparent text-white">
        <div className="flex lg:flex-1 text-white">
          <a href="/" className="font-bold text-xl flex items-center gap-[5px]">
            <GiPirateFlag />
            <span>DevPirate</span>
          </a>
        </div>
        <div className="lg:flex lg:gap-[70px] hidden text-white">
          <a href="#" className="text-sm font-semibold leading-6">
            Home
          </a>
          <Link to="/explore" className="text-sm font-semibold leading-6">
            Explore
          </Link>
          <a href="#" className="text-sm font-semibold leading-6">
            Contact
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end ">
          <a href="/login" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
