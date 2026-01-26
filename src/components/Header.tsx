import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="w-full  bg-[#141414]  border-b border-zinc-900 px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Brand Logo and Title */}
      <div className="flex items-center gap-2">
        <img className="w-8 h-8" src="/estatein.svg" alt="Estatein Logo" />
        <h1 className="text-white text-xl font-bold tracking-tight">
          Estatein
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        <Button
          variant="ghost"
          className="text-white bg-[#141414] border border-zinc-800 px-6 py-2 rounded-lg hover:bg-zinc-800 transition-all"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          className="text-zinc-400 hover:text-white hover:bg-zinc-900 px-6 py-2 transition-all"
        >
          About Us
        </Button>
        <Button
          variant="ghost"
          className="text-zinc-400 hover:text-white hover:bg-zinc-900 px-6 py-2 transition-all"
        >
          Properties
        </Button>
        <Button
          variant="ghost"
          className="text-zinc-400 hover:text-white hover:bg-zinc-900 px-6 py-2 transition-all"
        >
          Services
        </Button>
      </div>

      {/* Contact Button */}
      <Button
        variant="outline"
        className="bg-[#141414] border-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition-all"
      >
        Contact Us
      </Button>
    </nav>
  );
};

export default Header;
