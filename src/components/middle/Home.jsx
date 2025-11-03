// RegnusHomeView.jsx
import { useNavigate } from "react-router-dom";
import video from "../../assets/video/A New Era Begins___RisewithRegnus__🏷️Ignore__esports _ _esportsindia _ _explorepage _ _explore(MP4).mp4";

const featuredContent = [
  {
    id: 1,
    type: 'News',
    title: 'New Patch Drops: The Reign of Shadows',
    snippet: 'Read the full patch notes for our biggest update of the year. New gear, maps, and competitive seasons start now.',
    link: '/news/patch-reign-of-shadows'
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

  return (
    <div className="bg-[#0B090A] text-white min-h-screen flex flex-col">
      {/* === 1. Video Section === */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full bg-black">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-full  overflow-hidden shadow-2xl ">
            <video
              className="w-full h-full object-cover"
              src={video}
              autoPlay
              loop
              muted
              poster="/placeholder-video-poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* === 2. Featured Content Section === */}
      <section className="py-16 px-4 md:px-8 w-full">
        <div className="container mx-auto flex flex-col items-center">
          <h3 className="text-4xl font-bold mb-10 text-center uppercase border-b-4 border-[#E5383B] pb-2 inline-block">
            Latest from the Realm
          </h3>

          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 w-full">
            {featuredContent.map((item) => (
              <div
                key={item.id}
                className="bg-[#161A1D] flex-1 min-w-[300px] max-w-[380px] p-6 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <p className="text-sm font-semibold uppercase text-[#B1A7A6] mb-2">
                  {item.type}
                </p>
                <h4 className="text-2xl font-bold text-[#E5383B] mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#F5F3F4] mb-4">{item.snippet}</p>
                <a
                  href={item.link}
                  className="text-[#E5383B] hover:text-[#FFFFFF] transition duration-300 font-semibold flex items-center"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 3. Call to Action Section === */}
      <section className="py-16 md:py-20 bg-[#161A1D] flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Ready to <span className="text-[#E5383B]">Dominate?</span>
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-[#B1A7A6] mb-8 max-w-md sm:max-w-2xl mx-auto leading-relaxed">
          Join the official Regnus Discord to find teammates, share strategies, and connect with the global gaming community.
        </p>

        <a
          href="https://discord.gg/regnus"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E5383B] hover:bg-[#A4161A] transition duration-300 text-white font-bold 
               py-3 sm:py-4 px-10 sm:px-14 md:px-16 text-base sm:text-lg md:text-xl 
               uppercase rounded-full shadow-lg transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Join Discord Community
        </a>
      </section>

    </div>
  );
};

export default RegnusHomeView;
