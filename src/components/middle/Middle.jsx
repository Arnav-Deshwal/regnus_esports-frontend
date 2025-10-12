// RegnusHomeView.jsx
import { useNavigate } from "react-router-dom";

// Dummy data for demonstration. In a real app, this would come from an API call
const featuredContent = [
  { 
    id: 1, 
    type: 'News', 
    title: 'New Patch Drops: The Reign of Shadows', 
    snippet: 'Read the full patch notes for our biggest update of the year. New gear, maps, and competitive seasons start now.', 
    link: '/news/patch-reign-of-shadows' // Dynamic links
  },
  { 
    id: 2, 
    type: 'Tournament', 
    title: 'Regnus Global Finals: Broadcast Schedule', 
    snippet: 'Tune in this weekend to watch the top 8 teams battle for the championship title and the $1M prize pool!', 
    link: '/tournament/global-finals-schedule' 
  },
  { 
    id: 3, 
    type: 'Game Spotlight', 
    title: 'Meet the Devs: Designing the Warden Class', 
    snippet: 'Go behind the scenes with the team that created the new tank hero, Warden, and see early concept art.', 
    link: '/spotlight/warden-class-design' 
  },
];

const RegnusHomeView = () => {

  const navigate = useNavigate();
  // Base container for the content, using the dark background
  return (
    <div className="bg-[#0B090A] text-white">
      
      {/* === 1. Hero Section (Dynamic Banner) === */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/placeholder-gaming-hero.jpg')" }}
      >
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div> 
        
        <div className="relative z-10 text-center p-6">
          <p className="text-[#E5383B] uppercase tracking-widest text-lg font-bold">
            WELCOME TO REGNUS
          </p>
          <h2 className="text-6xl md:text-8xl font-black mt-2 mb-4 drop-shadow-lg">
            Forge Your <span className="text-[#E5383B]">Legacy</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#B1A7A6]">
            Join the elite gaming community. Dive into our latest titles and dominate the leaderboards.
          </p>
          
          {/* Dynamic Action Button */}
          <button
            onClick={() => navigate("/login")} // Use relative path for routing
            className="mt-8 inline-block bg-[#E5383B] hover:bg-[#A4161A] transition duration-300 text-white font-bold py-3 px-12 text-lg uppercase rounded-lg shadow-xl transform hover:scale-105"
          >
            Start The Ascent
          </button>
        </div>
      </section>

      {/* === 2. Featured Content/News Section (Dynamic Loop) === */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-center uppercase border-b-4 border-[#E5383B] pb-2 inline-block mx-auto">
            Latest from the Realm
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map over dynamic data to render cards */}
            {featuredContent.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#161A1D] p-6 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <p className="text-sm font-semibold uppercase text-[#B1A7A6] mb-2">{item.type}</p>
                <h4 className="text-2xl font-bold text-[#E5383B] mb-3 leading-tight">{item.title}</h4>
                <p className="text-[#F5F3F4] mb-4">{item.snippet}</p>
                
                {/* Router Link Placeholder (replace <a> with <Link> if using React Router) */}
                <a href={item.link} className="text-[#E5383B] hover:text-[#FFFFFF] transition duration-300 font-semibold flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 3. Call to Action/Community Section (Dynamic Link) === */}
      <section className="py-20 bg-[#161A1D] text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ready to <span className="text-[#E5383B]">Dominate?</span>
        </h3>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-[#B1A7A6]">
          Join the official Regnus Discord to find teammates and connect with the community.
        </p>
        
        {/* Dynamic Action Button */}
        <a 
          href="https://discord.gg/regnus" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#E5383B] hover:bg-[#A4161A] transition duration-300 text-white font-bold py-4 px-16 text-xl uppercase rounded-full shadow-lg transform hover:scale-105"
        >
          Join Discord Community
        </a>
      </section>

    </div>
  );
};

export default RegnusHomeView;