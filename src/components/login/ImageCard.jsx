import React from 'react';

import img1 from "../../assets/scroll/img-1.jpg";
import img2 from "../../assets/scroll/img-2.jpg";
import img3 from "../../assets/scroll/img-3.jpg";
import img4 from "../../assets/scroll/img-4.jpg";
import img5 from "../../assets/scroll/img-5.jpg";
import img6 from "../../assets/scroll/img-6.jpg";
import img7 from "../../assets/scroll/img-7.jpg";
import img8 from "../../assets/scroll/img-8.jpg";
import img9 from "../../assets/scroll/img-9.jpg";
import img10 from "../../assets/scroll/img-10.jpg";
import img11 from "../../assets/scroll/img-11.jpg";
import img12 from "../../assets/scroll/img-12.jpg";
import img13 from "../../assets/scroll/img-13.jpg";
import img14 from "../../assets/scroll/img-14.jpg";
import img15 from "../../assets/scroll/img-15.jpg";

// Data for 12 placeholder images, grouped into 3 columns (4 images each).
// Using distinct colors for a better visual demonstration of the scrolling effect.
const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,

    img6,
    img7,
    img8,
    img9,
    img10,

    img11,
    img12,
    img13,
    img14,
    img15,
];

// Split the 12 images into 3 arrays for the 3 columns
const column1Images = allImages.slice(0, 4);
const column2Images = allImages.slice(4, 8);
const column3Images = allImages.slice(8, 12);

/**
 * Renders an image column with infinite vertical scrolling animation.
 * The direction is controlled by the 'direction' prop ('up' or 'down').
 * The content is duplicated to ensure a seamless loop.
 */
const ImageColumn = ({ images, direction, columnId }) => {
    // Determine the animation class based on direction
    const animationClass = direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down';
    
    // The inner container holds the images. We duplicate the content (images * 2) 
    // to create a seamless infinite loop.
    const Content = ({ data }) => (
        <>
            {data.map((src, index) => (
                <div key={index}>
                    <img 
                        src={src} 
                        alt={`Gallery Image ${columnId}-${index}`} 
                        className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-[1.03]" 
                        // Fallback image source in case the placeholder fails
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/94a3b8/0f172a?text=Fallback'; }}
                    />
                </div>
            ))}
        </>
    );

    return (
        <div className="flex-1 min-w-0 overflow-hidden relative" style={{ height: '100%' }}>
            {/* This inner div is the one that moves.
             We render the content twice to create the seamless loop.
            */}
            <div className={`flex flex-col gap-4 ${animationClass}`}>
                <Content data={images} />
                <Content data={images} /> {/* Duplicated content for looping */}
            </div>
        </div>
    );
};


const ImageScrollCard = () => {

    return (
        <div className="w-full h-screen pl-3 pt-3 bg-transparent overflow-hidden font-sans relative">
            {/* Embed custom CSS for the infinite scroll animation */}
            <style jsx="true">{`
                /* Keyframes for continuous upward scroll */
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); } /* Scrolls exactly one full content block height */
                }

                /* We use scrollUp and reverse direction for the down movement */
                .animate-scroll-up {
                    animation: scrollUp 40s linear infinite;
                }

                .animate-scroll-down {
                    animation: scrollUp 40s linear infinite reverse; /* Scrolls downward */
                }
            `}</style>
            
            {/* Main Column Container: 3 columns with fixed height for the scrolling effect */}
            <div className="flex w-full h-full gap-4">
                
                {/* Column 1: UP (Scrolls up) */}
                <ImageColumn images={column1Images} direction="up" columnId={1} />

                {/* Column 2: DOWN (Scrolls down) */}
                <ImageColumn images={column2Images} direction="down" columnId={2} />

                {/* Column 3: UP (Scrolls up) */}
                <ImageColumn images={column3Images} direction="up" columnId={3} />
            </div>

            {/* NEW: Gradient Opacity Overlay and Centered Text */}
            <div 
                className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none"
            >
                {/* The Gradient Element */}
                <div 
                    className="w-full h-1/2 absolute bottom-0"
                    style={{
                        // This creates a gradient from transparent at 0% to black at 100% (from top of this div to bottom)
                        // Then we use the mask-image property with a linear gradient on the Y-axis
                        // to make the bottom part opaque and the top part transparent, creating the desired fade effect.
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        // The background color of the overlay (you can change 'black' to a color that matches your design)
                        backgroundColor: 'black',
                        // Set a fixed height for the fade effect, e.g., 25% of the parent h-screen
                        height: '25%', 
                        // This ensures the gradient element covers the full width of the card's content area.
                        width: '100%', // Account for the p-4 padding in the parent div
                        // Position it at the bottom.
                        
                    }}
                >
                    {/* The Centered Text, positioned at the center of the gradient div */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-3xl md:text-3xl font-extrabold tracking-widest uppercase">
                            Rise With Regnus
                        </p>
                    </div>
                </div>
            </div>
            {/* END OF NEW ELEMENT */}
        </div>
    );
}

export default ImageScrollCard;