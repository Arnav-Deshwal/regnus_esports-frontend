import React, { useState, useEffect } from 'react';

import Logo from "../../assets/logo.png"

// Color Palette: 
// #0B090A (BG), #E5383B (Accent Red), #D3D3D3 (Text Gray)

// --- Custom Animations Component (CSS) ---
// Updated to include 'loaderCircleSpin' keyframes.
const CustomAnimations = () => (
    <style>
        {`
        /* Keyframes for the subtle forward/back (pulse) effect on 'REGNUS' */
        @keyframes letterPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.95; } 
        }

        /* Keyframes for the dot pulsing animation */
        @keyframes dotPulse {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
        }
        
        /* Keyframes for the loader circle rotation */
        @keyframes loaderCircleSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Apply pulse animation with staggered delays */
        .wave-r { animation: letterPulse 1.5s infinite; }
        .wave-e { animation: letterPulse 1.5s infinite 0.1s; }
        .wave-g { animation: letterPulse 1.5s infinite 0.2s; }
        .wave-n { animation: letterPulse 1.5s infinite 0.3s; }
        .wave-u { animation: letterPulse 1.5s infinite 0.4s; }
        .wave-s { animation: letterPulse 1.5s infinite 0.5s; }
        
        /* Apply spin animation */
        .loader-spin {
            animation: loaderCircleSpin 1.2s linear infinite;
        }
        `}
    </style>
);

// --- LoginLoader Component ---

const LoginLoader = () => {
    const [dots, setDots] = useState('.');
    const regnusLetters = ['R', 'E', 'G', 'N', 'U', 'S'];

    // Animation logic for the pulsing "Loading..." dots
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => {
                if (prevDots === '...') return '.';
                return prevDots + '.';
            });
        }, 350); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B090A] text-white font-['Inter']">
            <CustomAnimations />

            {/* --- Logo and Spinning Loader Wrapper --- */}
            <div className="relative w-24 h-24 mb-6">
                
                {/* 1. The Spinning Circle Element (The Loader) */}
                {/* We use a div with thick, transparent borders and a border-top to create the quarter-circle spin effect. */}
                <div 
                    className="absolute inset-0 border-4 border-transparent rounded-full loader-spin"
                    style={{ 
                        borderTopColor: '#E5383B', // Accent Red
                        borderBottomColor: '#E5383B', // Make it a half circle spinner
                        width: '100%', 
                        height: '100%' 
                    }}
                />

                {/* 2. The Regnus Logo (Centered inside the wrapper) */}
                {/* The logo is now centered and no longer has the 'animate-pulse' class. */}
                <img 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl" 
                    src={Logo} 
                    alt="Regnus Logo"
                />
            </div>
            
            {/* Regnus Text with Pulse Animation */}
            <div className="flex text-6xl font-black tracking-widest mb-4">
                {regnusLetters.map((letter, index) => (
                    <span 
                        key={index}
                        className={`text-[#E5383B] inline-block uppercase transition-all duration-300 transform wave-${letter.toLowerCase()}`}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            {/* Loading Text with Pulsing Dots (Bigger text) */}
            {/* <p className="text-2xl font-light text-[#D3D3D3]">
                Loading
                <span className="inline-block w-4 text-left">
                    Dots use staggered animation delays for the pulsing effect
                    <span className="transition-opacity duration-300 opacity-70" style={{ animation: `dotPulse 1.2s infinite ease-in-out 0s` }}>{dots.includes('.') ? '.' : ' '}</span>
                    <span className="transition-opacity duration-300 opacity-70" style={{ animation: `dotPulse 1.2s infinite ease-in-out 0.4s` }}>{dots.includes('..') ? '.' : ' '}</span>
                    <span className="transition-opacity duration-300 opacity-70" style={{ animation: `dotPulse 1.2s infinite ease-in-out 0.8s` }}>{dots.includes('...') ? '.' : ' '}</span>
                </span>
            </p> */}
        </div>
    );
};

export { LoginLoader };