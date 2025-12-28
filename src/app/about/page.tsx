"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightIcon,
  Menu,
  X,
  Users,
  Trophy,
  Palette,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Kartik Bansal",
    role: "Founder",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-426.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Art Director",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-434.svg",
  },
  {
    name: "Mike Ross",
    role: "Lead Dev",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-435.svg",
  },
];

const navLinks = ["Home", "Store", "Games"]; // Swapped 'About us' for 'Home'

const AboutPage = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#0d0b0c] overflow-x-hidden w-full min-h-screen relative pb-20 md:pb-0 md:h-[2000px] md:w-[1522px] md:mx-auto">
      {/* --- REUSED BACKGROUND BLOBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          className="absolute top-0 left-0 w-full md:w-233.75 md:top-1168.25 opacity-30 md:opacity-100"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-431-1.svg"
          width={935}
          height={1331}
        />
        <Image
          className="absolute top-[10%] left-0 w-full md:w-[918px] md:top-[500px] opacity-40"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-432.svg"
          width={918}
          height={1841}
        />
        <Image
          className="absolute top-0 left-0 w-full md:w-[982px] md:left-[458px] opacity-50"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-429.svg"
          width={982}
          height={1207}
        />
      </div>

      {/* --- HEADER --- */}
      <header className="relative w-full px-4 py-4 flex items-center justify-between md:absolute md:top-[45px] md:left-[120px] md:right-[120px] md:w-auto md:p-0 z-50">
        <img
          className="w-9 h-[31px]"
          alt="Union"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/union.png"
        />
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-black/95 p-4 flex-col gap-4 md:flex md:static md:bg-transparent md:flex-row md:gap-[50px] md:p-0 md:items-center`}
        >
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="text-left md:text-center [font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-[18px] hover:opacity-80 transition-opacity"
            >
              {link}
            </button>
          ))}
          <Button className="md:hidden w-full bg-white text-black">
            Connect Wallet
          </Button>
        </nav>
        <Button
          className="hidden md:flex h-12 px-[26px] bg-white text-black hover:bg-white/90 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base tracking-[0.20px] leading-[18px] rounded-none"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          }}
        >
          Connect Wallet
        </Button>
      </header>

      {/* --- TITLE SECTION --- */}
      <section className="relative px-4 mt-12 flex flex-col items-center text-center md:block md:text-left md:mt-0 md:absolute md:top-[220px] md:left-[120px] md:translate-y-[-1rem] animate-fade-in z-10">
        <h1 className="w-full md:w-[800px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl md:text-7xl leading-tight md:leading-[90px]">
          We Are Changing <br /> The Digital World
        </h1>
        <p className="mt-6 md:mt-[40px] md:w-[600px] opacity-80 font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg tracking-[0.29px]">
          NFTme is the premier marketplace for NFTs, rare digital items and
          crypto collectibles. We are dedicated to building a community-centric
          platform.
        </p>
      </section>

      {/* --- IMAGE / STATS --- */}
      <div className="relative mt-12 px-4 md:mt-0 md:absolute md:top-[220px] md:right-[120px] z-10">
        <img
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/hero-img.png"
          className="w-full max-w-[400px] h-auto object-cover rounded-lg md:w-[450px]"
          alt="About Hero"
        />
      </div>

      {/* --- MISSION CARDS (Using Absolute positioning on Desktop to match style) --- */}
      <div className="relative mt-20 px-4 grid grid-cols-1 gap-8 md:block md:mt-0">
        {/* Card 1 */}
        <div className="md:absolute md:top-[700px] md:left-[120px] md:w-[400px] bg-white/5 border border-white/10 p-8 backdrop-blur-md">
          <Trophy className="text-[#dd24e1] w-10 h-10 mb-4" />
          <h3 className="text-2xl [font-family:'Clash_Display-Medium',Helvetica] text-white mb-2">
            Quality First
          </h3>
          <p className="font-['Poppins',Helvetica] text-white/70">
            We curate the best digital art from around the globe to ensure
            premium value.
          </p>
        </div>

        {/* Card 2 */}
        <div className="md:absolute md:top-[700px] md:left-[560px] md:w-[400px] bg-white/5 border border-white/10 p-8 backdrop-blur-md">
          <Users className="text-[#dd24e1] w-10 h-10 mb-4" />
          <h3 className="text-2xl [font-family:'Clash_Display-Medium',Helvetica] text-white mb-2">
            Community
          </h3>
          <p className="font-['Poppins',Helvetica] text-white/70">
            Built by artists, for artists. We believe in the power of
            decentralized communities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="md:absolute md:top-[700px] md:left-[1000px] md:w-[400px] bg-white/5 border border-white/10 p-8 backdrop-blur-md">
          <Palette className="text-[#dd24e1] w-10 h-10 mb-4" />
          <h3 className="text-2xl [font-family:'Clash_Display-Medium',Helvetica] text-white mb-2">
            Creativity
          </h3>
          <p className="font-['Poppins',Helvetica] text-white/70">
            Pushing the boundaries of what is possible in the digital art space.
          </p>
        </div>
      </div>

      {/* --- TEAM SECTION --- */}
      <section className="relative mt-20 px-4 md:mt-0 md:absolute md:top-[1100px] md:left-[120px]">
        <h2 className="text-4xl md:text-6xl [font-family:'Clash_Display-Semibold',Helvetica] text-white mb-10 md:mb-[80px]">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[150px]">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-white/20 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl [font-family:'Clash_Display-Medium',Helvetica] text-white">
                {member.name}
              </h3>
              <p className="text-pink-500 font-['Poppins',Helvetica]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER (Reused) --- */}
      <footer className="relative mt-20 md:mt-0 md:absolute md:top-[1600px] md:left-0 md:w-[1522px] md:h-[278px] bg-transparent border-t border-white/10 md:border-none">
        <div className="hidden md:block absolute top-0 left-0 w-[1522px] h-[278px] backdrop-blur-[25px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)]" />
        <div className="flex flex-col items-center py-10 md:block md:py-0">
          <div className="md:absolute md:top-[52px] md:left-[120px] h-[45px] flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[45px] whitespace-nowrap mb-6 md:mb-0">
            NFTme
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[15px] md:top-[211px] md:left-[120px] md:absolute text-center md:text-left text-white/60">
            <div>Copyright @ Kartik Bansal 2022.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
