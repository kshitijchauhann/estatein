import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import { SocialIconButton } from "@/components/common/SocialIconButton";

const SocialIconMap = {
  FaFacebookF: <FaFacebookF />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaTwitter: <FaTwitter />,
  FaYoutube: <FaYoutube />,
};

const Footer = () => {
  return (
    <footer className="w-full text-white pt-0">
      {/* CTA Section */}
      <div className="relative border-y border-zinc-800 py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden">
        {/* Background decorative texture (optional) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <Button
          className="
            relative z-10
            w-full
            md:w-fit
            md:flex-none
            bg-[#703BF7] hover:bg-[#5d2ed1]
            text-white px-8 py-6 text-lg rounded-xl
          "
        >
          Explore Properties
        </Button>
      </div>

      {/* Main Footer Links Section */}
      <div className="px-6 md:px-12 lg:px-24 py-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Logo and Newsletter */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2">
            <img src="/estatein.svg" alt="Estatein" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">Estatein</span>
          </div>

          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <HiOutlineMail className="text-zinc-400 text-xl" />
            </div>
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#0a0a0a] border-zinc-800 pl-12 pr-12 py-7 rounded-xl text-zinc-300 focus:ring-[#703BF7]"
            />
            <button className="absolute inset-y-0 right-4 flex items-center text-zinc-400 hover:text-white transition-colors">
              <LuSendHorizontal className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:flex-[2]">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-zinc-500 font-medium">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-200 hover:text-[#703BF7] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141414] py-6 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zinc-400">
          <p>©2023 Estatein. All Rights Reserved.</p>
          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((item, index) => (
            <SocialIconButton
              key={index}
              icon={SocialIconMap[item.icon as keyof typeof SocialIconMap]}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
