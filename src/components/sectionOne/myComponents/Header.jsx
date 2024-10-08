const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-200 p-6 text-center rounded-t-lg">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">
        Pelumi Adeayo
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mt-2">
        MERN Stack Developer | Frontend Developer
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
        <a href="tel:+2347075225258" className="hover:underline">
          +234 707 522 5258
        </a>
        <span className="hidden md:inline">|</span>
        <a href="mailto:pexart74@gmail.com" className="hover:underline">
          pexart74@gmail.com
        </a>
        <span className="hidden md:inline">|</span>
        <span>Ibadan, Oyo State, Nigeria</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
        <a href="https://github.com/PexArt-web" className="hover:underline">
          GitHub: https://github.com/PexArt-web
        </a>
        {/* <a href="https://linkedin.com/in/username" className="hover:underline">LinkedIn</a> */}
        {/* <a href="https://portfolio.com" className="hover:underline">Portfolio</a> */}
      </div>
    </header>
  );
};

export default Header;
