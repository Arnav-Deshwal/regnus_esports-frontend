import React from 'react';
import Logo from "../../assets/logo.png"

// This component provides a dark, responsive navigation bar styled to match
// the aesthetic of the provided "Regnus Esports" image.
const Header = () => {
    // Styling constants based on the provided image's dark, sharp look.
    const primaryColor = '#E5383B'; // A strong red for accents/hovers
    const darkBackground = 'black'; // Almost black background

    return (
        <header className={`w-full bg-black text-white shadow-2xl top-0 z-50 border-b-[5px] border-[gray]`}>
             {/* Custom CSS for the smooth, slide-in underline effect */}
            <style jsx="true">{`
                .nav-link-underline {
                    position: relative;
                    display: inline-block;
                }
                /* Define the underline element that starts with 0 width */
                .nav-link-underline::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px; /* Position slightly below the text */
                    left: 0;
                    background-color: ${primaryColor};
                    transition: width 0.3s ease-in-out; /* Add transition for smooth slide effect */
                }
                /* On hover, set the underline width to 100% */
                .nav-link-underline:hover::after {
                    width: 100%;
                }
            `}</style>
            
            <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
                
                {/* Logo / Brand Name */}
                <div className="mb-4 md:mb-0">
                    {/* Placeholder for "Regnus Esports Logo" - You can replace this with an actual SVG or Image */}
                    <img src={Logo} alt="Regnus Esports Logo" className="w-31 h-15" />  
                    {/* <h1 className="text-xl font-mono tracking-widest text-gray-100">
                        <span className="text-3xl text-red-600 font-bold">R</span>EGNUS
                        <span className="text-xs ml-1 font-sans text-gray-400 block -mt-1">ESPORTS</span>
                    </h1> */}
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow flex justify-center">
                    <ul className="flex flex-wrap justify-center space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide">
                        {['Home', 'Teams', 'Achievements', 'Join Us', 'Contact Us'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                    // Applied the custom class for the underline effect
                                    className={`nav-link-underline text-gray-300 hover:text-[${primaryColor}] transition duration-300 uppercase`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                    {/* Player Login Button */}
                    <button 
                        // Modified: Removed hover:bg-[${primaryColor}] to prevent background color change
                        // Added hover:border-white and hover:text-white for visual feedback
                        className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
                                   hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
                    >
                        Player Login
                    </button>

                    {/* Admin Login Button */}
                    <button 
                        // Modified: Removed hover:bg-[${primaryColor}] to prevent background color change
                        // Added hover:border-white and hover:text-white for visual feedback
                        className={`text-sm font-semibold py-2 px-4 rounded-md border-2 cursor-pointer border-[${primaryColor}] text-[${primaryColor}] 
                                   hover:text-white hover:border-white transition duration-300 uppercase shadow-md hover:shadow-lg`}
                    >
                        Admin Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
