import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {LoginLoader} from "./Loader.jsx";
import ImageCard from './ImageCard.jsx';
import Form from './form.jsx';


// === COLOR PALETTE MAPPING ===
// Main Background: #0B090A (Full-screen background, Input backgrounds)
// Card Background: #161A1D (Login card, Video container)
// Accent Red: #E5383B (CTA button, Icon, Focus rings)
// Error Red: #660708 (Error message background)
// Text Gray: #D3D3D3 (Primary text, Labels, Regnus name)
// Subtle Text: #B1A7A6 (Secondary text, Placeholders)


// Main component containing the login logic and structure
const Login = () => {
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const verifyUser = ({ setLoading, navigate }) => {
        // Return a Promise so 'await' can pause execution
        return new Promise((resolve, reject) => {

            // Use setTimeout to simulate the network delay
            setTimeout(() => {
                try {
                    // This block runs AFTER the 3-second delay
                    const mockResponseData = {
                        username: "PlayerOne",
                        email: "playerone@example.com",
                        role: "Player",
                        message: "User verified"
                    };

                    // 1. Set loading to false now that the 'request' is complete
                    setLoading(false);

                    // 2. Resolve the Promise with the data
                    resolve(mockResponseData);

                } catch (error) {
                    // If the mock failed (or real API failed)
                    console.error('Simulated error:', error);
                    setLoading(false);
                    navigate('/login');
                    reject(error);
                }
            }, 3000); // The required 3-second delay
        });
    }

    useEffect(() => {
        verifyUser({ setLoading, navigate });
    }, [loading, setLoading])

    if (loading) {
        return <LoginLoader />
    }

    // The main layout uses Main Background (#0B090A) and Text Gray (#D3D3D3) for default text.
    return (
        <div className="flex h-screen w-full bg-[#0B090A] text-[#D3D3D3] font-inter">

            {/* ========================================
            LEFT PANE: Video Display 
            ========================================
            */}

            <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center">
                <ImageCard />
            </div>

            {/* ========================================
            RIGHT PANE: Login Form 
            ========================================
            */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">

                <div className="flex flex-col items-center w-full max-w-md">
                    <Form />
                </div>
            </div>
        </div>
    );
};

// Standard boilerplate to export the main component
export default Login;