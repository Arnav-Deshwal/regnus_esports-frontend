
const RegnusFooter = () => {

  // Base container for the content, using the dark background
  return (
    <div className="bg-[#0B090A] text-white">

      {/* === 4. Minimal Footer === */}
      <footer className="bg-[#161A1D] border-t border-[#31373A] py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Brand & Copyright */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-3xl font-black text-[#E5383B] tracking-wider">
              REGNUS
            </h4>
            <p className="text-sm text-[#B1A7A6] mt-2">
              © {new Date().getFullYear()} Regnus Gaming. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-semibold mb-6 md:mb-0">
            <a href="/games" className="text-white hover:text-[#E5383B] transition duration-200">Games</a>
            <a href="/news" className="text-white hover:text-[#E5383B] transition duration-200">News</a>
            <a href="/support" className="text-white hover:text-[#E5383B] transition duration-200">Support</a>
            <a href="/careers" className="text-white hover:text-[#E5383B] transition duration-200">Careers</a>
          </nav>

          {/* Social Media Icons (Placeholder for Discord, Twitch, X/Twitter) */}
          <div className="flex space-x-6">
            <a href="https://discord.gg/regnus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5383B] transition duration-200">
              {/* Discord Icon (SVG placeholder) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.348 6.425a.867.867 0 0 0-.81-.37c-.328-.016-.656.096-.957.348-.992-.378-2.07-.6-3.26-.6-1.189 0-2.27.222-3.26.6-.3-.252-.63-.364-.957-.348a.867.867 0 0 0-.81.37A20.738 20.738 0 0 0 2.22 13.918a2.03 2.03 0 0 0 1.25 1.574c.48.16 1.05.074 1.5-.18a10.957 10.957 0 0 0 3.235-1.956c.074.04.148.07.222.09.28.1.57.18.88.24a8.62 8.62 0 0 0 2.04.2c.706 0 1.393-.075 2.04-.2.31-.06.6-.14.88-.24.074-.02.15-.05.222-.09a10.957 10.957 0 0 0 3.235 1.956c.454.254 1.025.34 1.505.185a2.03 2.03 0 0 0 1.25-1.573 20.738 20.738 0 0 0-2.432-7.493zm-5.756 7.64c-.752 0-1.35-.615-1.35-1.37s.6-.1.6-1.37c0-.755.6-1.37 1.35-1.37s1.35.615 1.35 1.37c0 .755-.6 1.37-.1 1.37zM9.5 12.695c-.752 0-1.35-.615-1.35-1.37s.6-1.37 1.35-1.37c.75 0 1.35.615 1.35 1.37s-.6 1.37-1.35 1.37z"/></svg>
            </a>
            <a href="https://twitch.tv/regnus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5383B] transition duration-200">
              {/* Twitch Icon (SVG placeholder) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 8l-.066 3.143 2.802-2.857L14.77 9.857 12 12.643l2.857 2.857-1.428 1.428-2.857-2.857v3.143l-2.072 2.071v-4.143h-2.143v-2.143h2.143v-4.143h-2.143V8h4.286zM22.5 4v16h-4.5V20H5.5V4h17zm-2 2H7.5v12h13V6z"/></svg>
            </a>
            <a href="https://x.com/regnus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5383B] transition duration-200">
              {/* X / Twitter Icon (SVG placeholder) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.215-6.814L4.99 22.75H1.68l7.73-10.74L2.296 2.25H4.66l6.096 7.962L18.244 2.25zM17.8 20.457L2.83 4.2H4.9L19.46 20.457h-1.66z"/></svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default RegnusFooter;