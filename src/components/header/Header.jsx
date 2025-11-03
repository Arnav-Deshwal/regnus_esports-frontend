import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

const navLinks = [
  { linkName: "HOME", linkRef: "/" },
  { linkName: "TEAMS", linkRef: "/team" },
  { linkName: "ACHEIVEMENTS", linkRef: "/acheivement" },
  { linkName: "CONTACT US", linkRef: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryColor = "#E5383B";

  return (
    <header className="w-full bg-black text-white shadow-2xl top-0 z-50 ">
      <style jsx="true">{`
        .nav-link-underline {
          position: relative;
          display: inline-block;
        }
        .nav-link-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: ${primaryColor};
          transition: width 0.3s ease-in-out;
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Regnus Esports Logo" className="w-28 h-auto" />
        </div>

        {/* Hamburger button — visible below lg (i.e. tablets & phones) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-[16] font-semibold tracking-wide">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.linkRef}
                  className={({ isActive }) =>
                    `nav-link-underline px-3 py-2 rounded-md transition duration-300 uppercase ${
                      isActive
                        ? "text-white border-b-[3px] border-red-600 rounded-b-none"
                        : "text-gray-300 hover:text-red-500"
                    }`
                  }
                >
                  {item.linkName}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-3">
          <button
            onClick={() => navigate("/crew_login", { state: { type: "Player" } })}
            className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
              hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
          >
            Player Login
          </button>

          <button
            onClick={() => navigate("/crew_login", { state: { type: "Admin" } })}
            className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
              hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
          >
            Admin Login
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 flex flex-col items-center space-y-4 py-6 transition-all duration-300">
          <ul className="flex flex-col space-y-4 text-center font-semibold tracking-wide">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.linkRef}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link-underline block px-3 py-2 uppercase ${
                      isActive
                        ? "text-white border-b-[2px] border-red-600"
                        : "text-gray-300 hover:text-red-500"
                    }`
                  }
                >
                  {item.linkName}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 mt-4">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/crew_login", { state: { type: "Player" } });
              }}
              className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
                hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
            >
              Player Login
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/crew_login", { state: { type: "Admin" } });
              }}
              className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
                hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
            >
              Admin Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
