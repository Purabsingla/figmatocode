"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRightIcon, Menu, X, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const navLinks = ["Home", "About us", "Store", "Games"];

const ContactPage = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#0d0b0c] overflow-x-hidden w-full min-h-screen relative pb-20 md:pb-0 md:h-[1400px] md:w-[1522px] md:mx-auto">
      {/* --- REUSED BACKGROUND BLOBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          className="absolute top-0 left-0 w-full md:w-[982px] md:left-[458px] opacity-50"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-429.svg"
          width={982}
          height={1207}
        />
        <Image
          className="absolute bottom-0 right-0 w-full md:w-[706px] md:top-[200px] opacity-30"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-433.svg"
          width={706}
          height={1531}
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

      {/* --- TITLE --- */}
      <section className="relative px-4 mt-12 text-center md:text-left md:mt-0 md:absolute md:top-[200px] md:left-[120px] z-10">
        <h1 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl md:text-7xl">
          Get In Touch
        </h1>
        <p className="mt-4 opacity-80 font-['Poppins',Helvetica] text-white text-base md:text-lg">
          We are here to help you with your NFT journey.
        </p>
      </section>

      {/* --- CONTACT FORM (Left on Desktop) --- */}
      <div className="relative mt-12 px-4 md:mt-0 md:absolute md:top-[400px] md:left-[120px] md:w-[600px] z-10">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Your Name"
              className="bg-white/5 border-white/20 text-white h-12 rounded-none focus-visible:ring-pink-500"
            />
            <Input
              placeholder="Your Email"
              className="bg-white/5 border-white/20 text-white h-12 rounded-none focus-visible:ring-pink-500"
            />
          </div>
          <Input
            placeholder="Subject"
            className="bg-white/5 border-white/20 text-white h-12 rounded-none focus-visible:ring-pink-500"
          />
          <Textarea
            placeholder="Write your message..."
            className="bg-white/5 border-white/20 text-white min-h-[200px] rounded-none focus-visible:ring-pink-500"
          />

          <Button className="h-[59px] w-full md:w-[226px] bg-white text-black hover:bg-gray-200 [font-family:'Clash_Display-Semibold',Helvetica] text-xl rounded-none">
            SEND MESSAGE
          </Button>
        </div>
      </div>

      {/* --- CONTACT INFO (Right on Desktop) --- */}
      <div className="relative mt-12 px-4 md:mt-0 md:absolute md:top-[400px] md:left-[850px] md:w-[400px] z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-500/20 rounded-none">
              <Mail className="text-pink-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="[font-family:'Clash_Display-Medium',Helvetica] text-white text-xl">
                Email Us
              </h3>
              <p className="font-['Poppins',Helvetica] text-white/60 text-sm mt-1">
                support@nftme.com
              </p>
              <p className="font-['Poppins',Helvetica] text-white/60 text-sm">
                sales@nftme.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-500/20 rounded-none">
              <Phone className="text-pink-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="[font-family:'Clash_Display-Medium',Helvetica] text-white text-xl">
                Call Us
              </h3>
              <p className="font-['Poppins',Helvetica] text-white/60 text-sm mt-1">
                +1 (555) 000-0000
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-500/20 rounded-none">
              <MapPin className="text-pink-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="[font-family:'Clash_Display-Medium',Helvetica] text-white text-xl">
                Visit Us
              </h3>
              <p className="font-['Poppins',Helvetica] text-white/60 text-sm mt-1">
                123 NFT Boulevard, Crypto City, Metaverse
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER (Reused) --- */}
      <footer className="relative mt-20 md:mt-0 md:absolute md:top-[1000px] md:left-0 md:w-[1522px] md:h-[278px] bg-transparent border-t border-white/10 md:border-none">
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

export default ContactPage;
