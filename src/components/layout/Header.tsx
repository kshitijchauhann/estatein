import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants";

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

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        {NAVIGATION_ITEMS.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={`${item.label === "Home"
                ? "text-white bg-[#141414] border border-zinc-800"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              } px-6 py-2 rounded-lg transition-all`}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <Button
        variant="outline"
        className="hidden md:flex bg-[#141414] border-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition-all"
      >
        Contact Us
      </Button>

      {/* Mobile Menu Drawer */}
      <div className="md:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#141414] border-l border-zinc-800 h-full rounded-none w-[80%] max-w-sm">
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center gap-2 mb-8">
                <img
                  className="w-8 h-8"
                  src="/estatein.svg"
                  alt="Estatein Logo"
                />
                <h1 className="text-white text-xl font-bold tracking-tight">
                  Estatein
                </h1>
              </div>

              <div className="flex flex-col gap-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className={`w-full justify-start ${item.label === "Home"
                        ? "text-white bg-zinc-900 border border-zinc-800"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                      } px-6 py-4 rounded-lg transition-all text-lg`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full bg-[#141414] border-zinc-800 text-white px-6 py-4 rounded-lg hover:bg-zinc-800 transition-all text-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Header;
