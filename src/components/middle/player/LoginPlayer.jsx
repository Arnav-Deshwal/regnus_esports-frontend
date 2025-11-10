import React, { useState } from "react";

// === Import game images from assets ===
import valorantImg from "../../../assets/player_choose/valorant.jpeg.jpg";
import pokemon from "../../../assets/player_choose/pokemonunite.jpeg.jpg";
import moba from "../../../assets/player_choose/mobalegends.jpeg.jpg";
import ff from "../../../assets/player_choose/freefire.jpeg.jpg";
import fifa from "../../../assets/player_choose/e-fifa.jpeg.jpg";
import royal from "../../../assets/player_choose/clashroyale.jpeg.jpg";
import coc from "../../../assets/player_choose/clashofclans.jpeg.jpg";
import bgmi from "../../../assets/player_choose/bgmi.jpeg.jpg";

const games = [
  { id: 1, name: "Valorant", img: valorantImg },
  { id: 2, name: "Pokemon Unite", img: pokemon },
  { id: 3, name: "Moba Legends", img: moba },
  { id: 4, name: "Free Fire", img: ff },
  { id: 5, name: "E-Fifa", img: fifa },
  { id: 6, name: "Clash Royal", img: royal },
  { id: 7, name: "Clash of Clans", img: coc },
  { id: 8, name: "BGMI", img: bgmi },
];

const ChooseGame = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [joinCode, setJoinCode] = useState("");

  const openModal = (game) => {
    setSelectedGame(game);
    setJoinCode("");
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const handleJoin = () => {
    if (joinCode.trim() === "") return alert("Please enter a join code!");
    alert(`Joined ${selectedGame.name} with code: ${joinCode}`);
    closeModal();
  };

  return (
    <div className="bg-[#0B090A] min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 py-12 relative">
      {/* === Heading === */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center tracking-wider uppercase">
        Choose Your <span className="text-[#E5383B]">Game</span>
      </h1>

      {/* === Game Grid === */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#161A1D] rounded-2xl shadow-xl flex flex-col items-center justify-between p-4 transition-all duration-300 hover:scale-[1.05] hover:shadow-[#E5383B]/40 cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
              <img
                src={game.img}
                alt={game.name}
                className="absolute inset-0 w-full h-full object-contain bg-[#0B090A] rounded-xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0B090A]/90 to-transparent text-center py-3">
                <h3 className="text-lg md:text-xl font-semibold tracking-wide">{game.name}</h3>
              </div>
            </div>

            {/* Join Button */}
            <button
              onClick={() => openModal(game)}
              className="mt-5 bg-[#E5383B] hover:bg-[#A4161A] transition duration-300 font-bold text-white py-2.5 px-8 rounded-full shadow-md w-full cursor-pointer"
            >
              JOIN
            </button>
          </div>
        ))}
      </div>

      {/* === Modal Popup === */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-[#161A1D] rounded-2xl shadow-2xl w-[90%] max-w-lg flex flex-col md:flex-row items-center gap-6 p-6 animate-[fadeIn_0.3s_ease-out] border border-[#E5383B]/40">
            
            {/* Game Image */}
            <div className="w-full md:w-1/2 aspect-[2/3] overflow-hidden rounded-xl">
              <img
                src={selectedGame.img}
                alt={selectedGame.name}
                className="w-full h-full object-contain rounded-xl bg-[#0B090A]"
              />
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{selectedGame.name}</h2>

              <input
                type="text"
                placeholder="Enter the code"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                className="w-4/5 text-center text-white bg-[#0B090A] border border-[#E5383B]/70 rounded-full py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#E5383B] placeholder-gray-400 mb-3"
              />

              <button
                onClick={handleJoin}
                className="bg-[#E5383B] hover:bg-[#A4161A] transition duration-300 font-bold text-white py-2 px-10 rounded-full shadow-md uppercase cursor-pointer"
              >
                Join
              </button>

              <button
                onClick={closeModal}
                className="text-sm text-gray-400 hover:text-white mt-3 transition duration-200 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Fade-in Animation === */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ChooseGame;
