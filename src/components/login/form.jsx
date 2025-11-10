// Use lucide-react for icons (assumed available in the environment)
import { User, Mail, ArrowLeft } from 'lucide-react';
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from "../../assets/logo.png"

// --- OTP Form Component ---
// (Remains the same as before, no need to repeat its full code)
const OtpForm = ({ onBackToLogin, isTransitioning, lastSubmittedEmail, setRef, type }) => {
    // State to hold the 6-digit OTP
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [otpErrors, setOtpErrors] = useState({});
    const [isVerifying, setIsVerifying] = useState(false);
    const inputRefs = useRef([]);

    const navigate= useNavigate()

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== '' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setIsVerifying(true);
        setOtpErrors({});

        const fullOtp = otp.join('');

        if (fullOtp.length !== 6) {
            setOtpErrors({ otp: 'Please enter the full 6-digit OTP.' });
            setIsVerifying(false);
            return;
        }

        // --- Simulate OTP verification API call ---
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('OTP Verification Attempt:', { otp: fullOtp });
            navigate(`/crew_login/${type}`)
            // alert('OTP Verified Successfully! (Simulated)');
        } catch (apiError) {
            setOtpErrors({ api: 'OTP verification failed. Please try again.' });
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <form ref={setRef} onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="text-center pt-2">
                <p className="inline-block px-4 text-[30px] font-bold text-[#D3D3D3]">
                    Verify OTP
                </p>
                <p className="text-sm text-[#B1A7A6] mt-2">
                    A code has been sent to {lastSubmittedEmail}
                </p>
            </div>

            {/* OTP Input Boxes */}
            <div className="flex justify-center space-x-2">
                {otp.map((data, index) => {
                    return (
                        <input
                            key={index}
                            ref={el => inputRefs.current[index] = el}
                            type="text"
                            maxLength="1"
                            value={data}
                            onChange={e => handleOtpChange(e.target, index)}
                            onFocus={e => e.target.select()}
                            disabled={isVerifying || isTransitioning}
                            className={`w-10 h-14 text-2xl text-center bg-[#0B090A] border rounded-lg text-white placeholder-[#B1A7A6] transition duration-150 
                                focus:ring-[#E5383B] focus:border-[#E5383B] ${otpErrors.otp ? 'border-[#E5383B]' : 'border-[#161A1D]'}`}
                        />
                    );
                })}
            </div>

            {/* OTP Errors */}
            {(otpErrors.otp || otpErrors.api) && (
                <div className="p-3 rounded-lg text-sm text-center bg-[#660708] text-[#D3D3D3]">
                    <p>{otpErrors.otp || otpErrors.api}</p>
                </div>
            )}

            {/* Verify Button */}
            <button
                type="submit"
                disabled={isVerifying || isTransitioning}
                className={`w-full cursor-pointer py-3 mt-2 text-white font-semibold rounded-lg shadow-lg shadow-[#E5383B]/30 transition duration-300 transform 
                        focus:outline-none focus:ring-4 focus:ring-[#E5383B]/50
                        ${isVerifying ? 'bg-gray-600 cursor-not-allowed animate-pulse' : 'bg-[#E5383B] hover:bg-red-700 hover:scale-[1.01]'}`
                }
            >
                {isVerifying ? 'Verifying...' : 'Verify OTP'}
            </button>

            {/* Back to Login Link */}
            <div className="text-center pb-4">
                <button
                    type="button"
                    onClick={onBackToLogin}
                    disabled={isVerifying || isTransitioning}
                    className="text-sm text-[#E5383B] hover:underline flex items-center justify-center mx-auto cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Go back to Login
                </button>
            </div>
        </form>
    );
};
// ----------------------------

// Define it once at the top of your file (above your component)
const TOP_MAIL_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "aol.com",
    "protonmail.com",
    "zoho.com"
];


const Form = () => {
    // Existing States
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Toggle and Transition States
    const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);
    const [lastSubmittedEmail, setLastSubmittedEmail] = useState('');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // --- New Height Management States/Refs ---
    const loginFormRef = useRef(null);
    const otpFormRef = useRef(null);
    const [formHeight, setFormHeight] = useState('auto'); // State to set the height

    const location = useLocation();
    const type = location.state?.type; // "admin" or "player"

    // Determine the height of the wrapper container
    useEffect(() => {
        if (loginFormRef.current && otpFormRef.current) {
            // Find the maximum height of the two forms
            const newHeight = Math.max(
                loginFormRef.current.offsetHeight,
                otpFormRef.current.offsetHeight
            );
            // Set the container height to the max of the two forms
            if (newHeight > 0) {
                setFormHeight(`${newHeight}px`);
            }
        }
    }, [isOtpFormVisible]); // Recalculate if the visibility state changes (though dimensions should be static after first render)
    // Run once after initial render to set the initial height
    useEffect(() => {
        if (loginFormRef.current && otpFormRef.current) {
            const initialHeight = Math.max(
                loginFormRef.current.offsetHeight,
                otpFormRef.current.offsetHeight
            );
            if (initialHeight > 0) {
                setFormHeight(`${initialHeight}px`);
            }
        }
    }, []);

    // const hasErrors = Object.keys(errors).length > 0;
    const hasErrors = Object.keys(errors).some(key => key !== 'username' && key !== 'email');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setIsTransitioning(true);
        let validationErrors = {};

        // ---------------------------------------------------------------------
        // ----------------------- VALIDATION LOGIC START ----------------------
        // ---------------------------------------------------------------------


        if (!username.trim()) {
            validationErrors.username = 'Username is required.';
        }
        // Rule: Username may optionally include "_", but no other special characters.
        else if (/[^a-zA-Z0-9_]/.test(username.trim())) {
            validationErrors.username = 'Only underscore "_" is allowed as a special character.';
        }


        // --- 2. Email Validation ---
        if (!email.trim()) {
            validationErrors.email = 'Email is required.';
        } else {
            // Basic email format check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                validationErrors.email = 'Please enter a valid email format.';
            } else {
                const domain = email.split('@').pop().toLowerCase();
                // Rule: Only top mail domains are allowed.
                if (!TOP_MAIL_DOMAINS.includes(domain)) {
                    validationErrors.email = 'Mail not found. Only top mail providers (e.g., Gmail, Yahoo) are accepted.';
                }
            }
        }

        // ---------------------------------------------------------------------
        // ----------------------- VALIDATION LOGIC END ------------------------
        // ---------------------------------------------------------------------

        setErrors(validationErrors);
        setSuccessMessage(null);

        if (Object.keys(validationErrors).length > 0) {
            setIsSubmitting(false);
            setIsTransitioning(false);
            return;
        }

        // If validation passes, errors object is already empty.
        // Proceed with the original success logic simulation

        // --- Simulate API call with a delay ---
        try {
            await new Promise((resolve, reject) =>
                setTimeout(() => resolve("Success"), 1500)
            );


            // Simulating success
            setSuccessMessage(`OTP sent to ${email}. Redirecting...`);
            setLastSubmittedEmail(email);

            // Trigger form switch after a tiny delay
            setTimeout(() => {
                setIsOtpFormVisible(true);
            }, 50);

            // Wait for the animation to finish (600ms total transition time)
            setTimeout(() => {
                setSuccessMessage(null);
                setIsTransitioning(false);
                // In a real app, you would switch view or navigate here
            }, 600);

        } catch (apiError) {
            setErrors({ api: 'Failed to submit. Please try again.' });
            setIsTransitioning(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackToLogin = () => {
        setIsTransitioning(true);
        setErrors({});
        setSuccessMessage(null);

        setTimeout(() => {
            setIsOtpFormVisible(false);
        }, 50);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    };

    // Conditional classes for the sliding and fading effect
    const loginFormClasses = `
        absolute inset-0 transition-all duration-500 ease-in-out
        ${isOtpFormVisible
            ? 'translate-x-[-100%] opacity-0 pointer-events-none'
            : 'translate-x-0 opacity-100 pointer-events-auto'}
    `;

    const otpFormClasses = `
        absolute inset-0 transition-all duration-500 ease-in-out
        ${isOtpFormVisible
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'}
    `;

    return (
        <>
            {/* Header Title (Remains the same) */}
            <div>
                <div className="flex items-center justify-center space-x-2">
                    <img
                        className="w-50 h-30 rounded-2xl"
                        src={Logo} alt="Logo"
                    />
                    {/* <h1 className="text-4xl font-extrabold tracking-wider text-[#D3D3D3]">
                        REGNUS
                    </h1> */}
                </div>
            </div>

            <div className="w-full max-w-md bg-[#161A1D] px-4 pt-2 md:px-8 rounded-2xl shadow-2xl shadow-black/50 border border-[#0B090A]">
                {/* ✅ Success Message */}
                {/* {successMessage && (
                    <div className="p-3 rounded-lg text-sm text-center bg-green-800 text-[#D3D3D3] mb-4 mt-2">
                        {successMessage}
                    </div>
                )} */}

                {/* ✅ Form Transition Wrapper */}
                <div className="transition-all duration-500">
                    <AnimatePresence mode="wait">
                        {/* ✅ Login Form */}
                        {!isOtpFormVisible && (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="text-center pt-2 pb-3">
                                        <p className="inline-block px-4 text-[30px] font-bold text-[#D3D3D3]">
                                            Login as {type}
                                        </p>
                                    </div>

                                    {/* ✅ Error Messages */}
                                    {hasErrors && (
                                        <div className="p-3 rounded-lg text-sm text-center bg-[#660708] text-[#D3D3D3] mb-4 mt-2">
                                            <ul className="list-disc list-inside text-left mx-auto max-w-xs space-y-1">
                                                {Object.keys(errors).map((keyName, idx) => {
                                                    if (keyName !== "username" && keyName !== "email") {
                                                        return <li key={idx} className="pl-1">{errors[keyName]}</li>;
                                                    }
                                                    return null; // Skip rendering for ignored keys
                                                })}
                                                {/* {errors.api && <li className="pl-1">{errors.api}</li>} */}
                                            </ul>
                                        </div>
                                    )}

                                    {/* ✅ Username */}
                                    <div className='mb-6'>
                                        <label
                                            htmlFor="username"
                                            className="text-sm font-medium text-[#D3D3D3] mb-2 flex items-center"
                                        >
                                            <User className="w-4 h-4 mr-2 text-[#E5383B]" /> Username
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Enter your gamertag"
                                            disabled={isSubmitting || isTransitioning}
                                            className={`w-full p-3 bg-[#0B090A] border rounded-lg text-white placeholder-[#B1A7A6] transition duration-150 
                                                    `}
                                        />
                                        {errors.username && (
                                            <p className="text-sm text-[#E5383B] mt-1">{errors.username}</p>
                                        )}
                                    </div>

                                    {/* ✅ Email */}
                                    <div className='mb-6'>
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-[#D3D3D3] mb-2 flex items-center"
                                        >
                                            <Mail className="w-4 h-4 mr-2 text-[#E5383B]" /> Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="email@esports.com"
                                            disabled={isSubmitting || isTransitioning}
                                            className={`w-full p-3 bg-[#0B090A] border rounded-lg text-white placeholder-[#B1A7A6] transition duration-150 
                     `}
                                        />

                                        {errors.email && (
                                            <p className="text-sm text-[#E5383B] mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* ✅ Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isTransitioning}
                                        className={`w-full py-3 mt-2 mb-6 text-white font-semibold rounded-lg shadow-lg shadow-[#E5383B]/30 transition duration-300 transform cursor-pointer 
                    focus:outline-none focus:ring-4 focus:ring-[#E5383B]/50
                    ${isSubmitting
                                                ? "bg-gray-600 cursor-not-allowed animate-pulse"
                                                : "bg-[#E5383B] hover:bg-red-700 hover:scale-[1.01]"
                                            }`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {/* ✅ OTP Form */}
                        {isOtpFormVisible && (
                            <motion.div
                                key="otp"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <OtpForm
                                    onBackToLogin={handleBackToLogin}
                                    lastSubmittedEmail={lastSubmittedEmail}
                                    type={type}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}

export default Form;