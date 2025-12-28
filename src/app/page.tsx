"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUpRightIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const statsData = [
  { value: "32k+", label: "Artwork" },
  { value: "20k+", label: "Auctions" },
  { value: "10k+", label: "Artists" },
];

const trendingArtworks = [
  {
    artist: "Ferhat Deniz",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22742.svg",
    // Added md: prefixes to keep your exact desktop layout
    position: "md:top-[2395px] md:left-[764px]",
    artistPosition: "md:top-[2334px] md:left-[763px]",
    titlePosition: "md:top-[2368px] md:left-[764px]",
    pricePosition: "md:top-[2364px] md:left-[1263px]",
  },
  {
    artist: "Sebastian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22743.svg",
    position: "md:top-[2545px] md:left-[121px]",
    artistPosition: "md:top-[2484px] md:left-[120px]",
    titlePosition: "md:top-[2518px] md:left-[121px]",
    pricePosition: "md:top-[2514px] md:left-[620px]",
  },
  {
    artist: "Polina Kondrashova",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22744.svg",
    position: "md:top-[2991px] md:left-[762px]",
    artistPosition: "md:top-[2930px] md:left-[761px]",
    titlePosition: "md:top-[2964px] md:left-[762px]",
    pricePosition: "md:top-[2960px] md:left-[1261px]",
  },
  {
    artist: "Javier Miranda",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22745.svg",
    position: "md:top-[3141px] md:left-[119px]",
    artistPosition: "md:top-[3080px] md:left-[118px]",
    titlePosition: "md:top-[3114px] md:left-[119px]",
    pricePosition: "md:top-[3110px] md:left-[618px]",
  },
  {
    artist: "Erick Butler",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22746.svg",
    position: "md:top-[3587px] md:left-[760px]",
    artistPosition: "md:top-[3526px] md:left-[759px]",
    titlePosition: "md:top-[3560px] md:left-[760px]",
    pricePosition: "md:top-[3556px] md:left-[1259px]",
  },
  {
    artist: "Milad Fakurian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22747.svg",
    position: "md:top-[3737px] md:left-[117px]",
    artistPosition: "md:top-[3676px] md:left-[116px]",
    titlePosition: "md:top-[3710px] md:left-[117px]",
    pricePosition: "md:top-[3706px] md:left-[616px]",
  },
];

const popularArtists = [
  {
    name: "Ferhat Deniz",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-434.svg",
    imagePosition: "md:top-[4545px] md:left-[177px]",
    namePosition: "md:top-[4740px] md:left-[147px]",
  },
  {
    name: "Sebastian",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-435.svg",
    imagePosition: "md:top-[4545px] md:left-[471px]",
    namePosition: "md:top-[4740px] md:left-[467px]",
  },
  {
    name: "Javier Miranda",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-436.svg",
    imagePosition: "md:top-[4545px] md:left-[784px]",
    namePosition: "md:top-[4740px] md:left-[735px]",
  },
  {
    name: "Erick Butler",
    image: "https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-437.svg",
    imagePosition: "md:top-[4545px] md:left-[1114px]",
    namePosition: "md:top-[4740px] md:left-[1093px]",
  },
];

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Store", href: "/store" },
  { label: "Games", href: "/games" },
  { label: "Contact Us", href: "/contact" },
];
const footerLinks = ["Explore", "Marketplace", "Artists", "Contact"];

const NftLandingPage = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Replaced fixed width with responsive container logic
    <div className="bg-[#0d0b0c] overflow-x-hidden w-screen min-h-screen relative pb-20 md:pb-0 md:h-[6100px] md:w-[1522px] md:mx-auto">
      {/* Background blobs - Hidden on small mobile to prevent clutter, visible on md+ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          className="absolute top-0 left-0 w-full md:w-233.75 md:top-1168.25 opacity-30 md:opacity-100"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-431-1.svg"
          width={935}
          height={1331}
        />
        <Image
          className="absolute hidden md:block md:top-[5726px] md:left-[735px] w-[1159px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-434-1.svg"
          width={1159}
          height={995}
        />
        <Image
          className="absolute hidden md:block md:top-[3477px] md:left-[720px] w-[720px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-431.svg"
          width={720}
          height={1174}
        />
        <Image
          className="absolute hidden md:block md:top-[1949px] md:left-[734px] w-[706px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-433.svg"
          width={706}
          height={1531}
        />
        <Image
          className="absolute top-[10%] left-0 w-full md:w-[918px] md:top-[2502px] opacity-40"
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
        <Image
          className="absolute top-0 left-0 w-full md:w-[1160px] opacity-60"
          alt="Rectangle"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-45.png"
          width={1160}
          height={984}
        />
      </div>

      {/* Header - Flex by default, Absolute only on Desktop */}
      <header className="relative w-full px-4 py-4 flex items-center justify-between md:absolute md:top-[45px] md:left-[120px] md:right-[120px] md:w-auto md:p-0 z-50">
        <img
          className="w-9 h-[31px]"
          alt="Union"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/union.png"
        />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-black/95 p-4 flex-col gap-4 md:flex md:static md:bg-transparent md:flex-row md:gap-[50px] md:p-0 md:items-center`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-left md:text-center [font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-[18px] hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile only connect button in menu */}
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

      {/* Hero Text - Stacked on Mobile, Absolute on Desktop */}
      <section className="relative px-4 mt-12 flex flex-col items-center text-center md:block md:text-left md:mt-0 md:absolute md:top-[220px] md:left-[120px] md:translate-y-[-1rem] animate-fade-in z-10">
        <h1 className="w-full md:w-[588px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl md:text-7xl leading-tight md:leading-[90px]">
          Discover Rare <br className="hidden md:block" /> collections Of{" "}
          <br className="hidden md:block" /> art &amp; Nft&apos;s
        </h1>
        <p className="mt-6 md:mt-[70px] md:h-[27px] flex items-center justify-center md:justify-start opacity-80 font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg tracking-[0.29px]">
          Create, Explore,&nbsp;&nbsp;&amp; Collect Digital Art NFTs
        </p>
        <Button
          className="mt-8 md:mt-[56px] h-[59px] w-[226px] bg-transparent hover:bg-white/10 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl tracking-[0] leading-[25px] rounded-none transition-colors border border-white/20 md:border-0"
          style={{
            backgroundImage:
              "url('https://c.animaapp.com/mjpa9qww4RQgSg/img/btn-bg.svg')",
            backgroundSize: "cover",
          }}
        >
          EXPLORE
        </Button>
        <div className="flex gap-8 md:gap-[76px] mt-10 md:mt-[160px] justify-center md:justify-start">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col gap-[5px]">
              <div className="flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-3xl md:text-5xl tracking-[0.20px] leading-[48px] whitespace-nowrap">
                {stat.value}
              </div>
              <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base tracking-[0.20px] leading-5 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Image Card - Stacked on Mobile, Absolute on Desktop */}
      <div className="relative mt-12 px-4 flex justify-center md:block md:mt-0 md:absolute md:top-[198px] md:left-[775px] md:w-[545px] md:h-[653px] md:translate-y-[-1rem] animate-fade-in z-10">
        <img
          className="hidden md:block absolute top-2 left-0 w-[511px] h-[645px]"
          alt="Hero img"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/hero-img.png"
        />
        {/* Mobile substitute for background image */}
        <img
          className="md:hidden w-full max-w-[377px] absolute top-0 opacity-50"
          alt="Hero bg"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/hero-img.png"
        />

        <Card className="relative md:absolute rounded-none top-0 md:left-[168px] w-full max-w-[377px] py-0 border bg-transparent overflow-hidden mt-4 md:mt-0">
          <CardContent className="p-0">
            <img
              className="w-full h-[300px] md:h-[419px] object-cover"
              alt="Img"
              src="https://c.animaapp.com/mjpa9qww4RQgSg/img/img.png"
            />
            <div className="h-auto md:h-[148px] py-3 px-4 border-2 border-solid border-transparent backdrop-blur-[25px] bg-[rgba(255,255,255,0.1)] relative">
              <div className="flex items-center justify-between md:justify-around gap-5 mb-[26px]">
                <div className="flex items-center gap-2.30">
                  <Avatar className="w-[37px] h-[37px]">
                    <AvatarImage src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ellipse-426.png" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[11.3px]">
                      Laura
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.3px]">
                      0.21 Weth
                    </div>
                  </div>
                </div>
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] mb-[9px]">
                    Remaining Time
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                    18h : 57m : 14s
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] mb-[9px]">
                    Current Bid
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <img
                      className="w-3 h-5"
                      alt="Ethereum"
                      src="https://c.animaapp.com/mjpa9qww4RQgSg/img/ethereum.svg"
                    />
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                      2.8 ETH
                    </span>
                  </div>
                </div>
                <Button className="h-[41px] w-[155px] bg-white text-black hover:bg-white/90 rounded-none clip-path-polygon">
                  PLACE A BID
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bitcoin Art Section - Stacked on Mobile, Absolute on Desktop */}
      <section className="relative mt-20 px-4 md:mt-0 md:absolute md:top-[1234px] md:left-[121px] flex flex-col md:block z-10">
        {/* On mobile, we use a flex container to group the image and text */}
        <div className="md:hidden flex flex-col gap-8">
          <img
            className="w-full rounded-[20px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22748.png"
          />
          <div className="text-center">
            <h2 className="text-4xl text-white font-medium">
              Bitcoin Art Work
            </h2>
            <p className="text-[#cccccc] mt-2">
              Created by <span className="text-[#dd24e1]">Jonathan Borba</span>
            </p>

            <div className="flex justify-center gap-8 mt-8">
              <div>
                <div className="text-white text-base">Current Bid</div>
                <div className="text-white text-3xl font-medium">1.09 ETH</div>
              </div>
              <div className="w-px bg-white/20 h-20"></div>
              <div>
                <div className="text-white text-base">Ends In</div>
                <div className="flex gap-4 text-white text-2xl font-medium">
                  <div>
                    18<span className="block text-xs font-normal">Hrs</span>
                  </div>
                  <div>
                    57<span className="block text-xs font-normal">Min</span>
                  </div>
                  <div>
                    14<span className="block text-xs font-normal">Sec</span>
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-white text-black w-full">
              View Art Work
            </Button>
          </div>
        </div>

        {/* Desktop Image */}
        <img
          className="hidden md:block w-[596px] h-[646px] rounded-[20px] object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/rectangle-22748.png"
        />
      </section>

      {/* Desktop Text Block for Bitcoin Art (Hidden on Mobile) */}
      <section className="hidden md:block absolute top-[1305px] left-[825px] translate-y-[-1rem] animate-fade-in">
        <h2 className="w-[335px] h-[180px] flex items-center justify-center [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-7xl tracking-[0.20px] leading-[90px]">
          Bitcoin Art Work
        </h2>
        <p className="mt-[20px] h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-transparent text-base tracking-[0.20px] leading-5 whitespace-nowrap">
          <span className="text-[#cccccc] tracking-[0.03px]">Created by </span>
          <span className="text-[#dd24e1] tracking-[0.03px]">
            Jonathan Borba
          </span>
        </p>
        <div className="flex gap-[68px] mt-[76px]">
          <div className="flex flex-col">
            <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap mb-[9px]">
              Current Bid
            </div>
            <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap mb-1">
              1.09 ETH
            </div>
            <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
              $1,835
            </div>
          </div>
          <img
            className="w-0.5 h-[100px]"
            alt="Line"
            src="https://c.animaapp.com/mjpa9qww4RQgSg/img/line-36.svg"
          />
          <div className="flex flex-col">
            <div className="h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap mb-[9px]">
              Auction Ends In
            </div>
            <div className="flex gap-[36px]">
              {["18", "57", "14"].map((val, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-4xl whitespace-nowrap">
                    {val}
                  </div>
                  <div className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-sm whitespace-nowrap">
                    {["Hours", "Minutes", "Seconds"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button className="mt-[65px] inline-flex items-center gap-2.5 px-6 py-[15px] h-auto bg-white text-black hover:bg-white/90 rounded [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap transition-colors">
          View Art Work <ArrowUpRightIcon className="w-6 h-6" />
        </Button>
      </section>

      {/* Trending Section Header */}
      <section className="relative mt-20 px-4 text-center md:text-left md:mt-0 md:absolute md:top-[2145px] md:left-[120px] z-10">
        <h2 className="flex items-center justify-center md:justify-start [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl md:text-[64px] tracking-[1.00px] leading-tight md:leading-[64px]">
          Trending This Week
        </h2>
        <p className="mt-4 md:mt-[19px] w-full md:w-[548px] md:h-[81px] flex items-center justify-center md:justify-start opacity-80 [font-family:'Poppins',Helvetica] font-normal text-light text-base md:text-lg tracking-[0.29px]">
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Trending Grid - Column on Mobile, Absolute on Desktop */}
      <div className="relative mt-10 px-4 flex flex-col gap-10 md:block md:mt-0">
        {trendingArtworks.map((artwork, index) => (
          <div key={index} className="relative group md:static">
            {/* Image */}
            <img
              className={`relative w-full h-[300px] md:absolute ${artwork.position} md:w-[556px] md:h-[450px] object-cover rounded-lg md:rounded-none`}
              alt="Rectangle"
              src={artwork.image}
            />
            {/* Info Container - Flex on Mobile, Absolute on Desktop */}
            <div className="flex justify-between items-center mt-2 md:block md:mt-0">
              <div
                className={`md:absolute ${artwork.artistPosition} [font-family:'Clash_Display-Medium',Helvetica] font-medium text-xl md:text-[28px] tracking-[0.45px] text-white whitespace-nowrap`}
              >
                {artwork.artist}
              </div>
              <div
                className={`md:absolute ${artwork.titlePosition} [font-family:'Poppins',Helvetica] font-normal text-white/70 md:text-white text-sm md:text-xs tracking-[0.19px] whitespace-nowrap`}
              >
                {artwork.title}
              </div>
              <div
                className={`md:absolute ${artwork.pricePosition} [font-family:'Poppins',Helvetica] font-medium text-pink-500 md:text-pink text-base tracking-[0.26px] whitespace-nowrap`}
              >
                {artwork.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-10 px-4 flex justify-center md:block md:mt-0">
        <Button className="md:absolute md:top-[4133px] md:left-[1128px] inline-flex items-center gap-2.5 px-6 py-[15px] h-auto bg-white text-black hover:bg-white/90 rounded [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap transition-colors">
          Explore More <ArrowUpRightIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* Popular Artists Header */}
      <section className="relative mt-20 px-4 text-center md:text-left md:mt-0 md:absolute md:top-[4387px] md:left-[121px]">
        <h2 className="flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl md:text-[64px] tracking-[1.00px] leading-tight md:leading-[64px] whitespace-nowrap">
          Popular Artists
        </h2>
      </section>

      {/* Popular Artists Grid */}
      <div className="relative mt-10 px-4 grid grid-cols-2 gap-8 md:block md:mt-0">
        {popularArtists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center md:block">
            <Avatar
              className={`relative md:absolute ${artist.imagePosition} w-24 h-24 md:w-40 md:h-40 mb-4 md:mb-0`}
            >
              <AvatarImage src={artist.image} className="object-cover" />
              <AvatarFallback>{artist.name[0]}</AvatarFallback>
            </Avatar>
            <div
              className={`relative md:absolute ${artist.namePosition} [font-family:'Clash_Display-Regular',Helvetica] font-normal text-xl md:text-4xl text-center tracking-[0.20px] text-white whitespace-nowrap`}
            >
              {artist.name}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-10 px-4 flex justify-center md:block md:mt-0">
        <Button className="md:absolute md:top-[4392px] md:left-[1117px] inline-flex items-center gap-2.5 px-6 py-[15px] h-auto bg-white text-black hover:bg-white/90 rounded [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap transition-colors">
          View all Artists <ArrowUpRightIcon className="w-6 h-6" />
        </Button>
      </div>

      {/* CTA Section */}
      <section className="relative mt-20 px-4 flex flex-col items-center md:block md:mt-0 md:absolute md:top-[4976px] md:left-[120px] md:flex-row md:gap-[109px]">
        <img
          className="w-full max-w-[550px] h-auto md:w-[550px] md:h-[550px] rounded-[20px] object-cover"
          alt="Cta img"
          src="https://c.animaapp.com/mjpa9qww4RQgSg/img/cta-img.png"
        />
        <div className="flex flex-col gap-8 md:gap-[50px] mt-8 md:mt-[101px] text-center md:text-left md:absolute md:left-[660px]">
          <h2 className="w-full md:w-[541px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-3xl md:text-5xl tracking-[1.00px] leading-tight md:leading-[60px]">
            Join The Community And Get The Best Nft Collection
          </h2>
          <Button
            className="h-[59px] w-full md:w-[310px] bg-transparent hover:bg-white/10 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl tracking-[1.20px] leading-[25px] rounded-none transition-colors border border-white/20 md:border-0"
            style={{
              backgroundImage:
                "url('https://c.animaapp.com/mjpa9qww4RQgSg/img/cta-btn-bg.svg')",
              backgroundSize: "cover",
            }}
          >
            JOIN COMMUNITY
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-20 md:mt-0 md:absolute md:top-[5726px] md:left-0 md:w-[1522px] md:h-[278px] bg-transparent border-t border-white/10 md:border-none">
        <div className="hidden md:block absolute top-0 left-0 w-[1522px] h-[278px] backdrop-blur-[25px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)]" />

        <div className="flex flex-col items-center py-10 md:block md:py-0">
          <div className="md:absolute md:top-[52px] md:left-[120px] h-[45px] flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[45px] whitespace-nowrap mb-6 md:mb-0">
            NFTme
          </div>

          <nav className="flex gap-6 md:items-start md:gap-[75px] md:p-2.5 md:top-[55px] md:left-[461px] md:absolute mb-8 md:mb-0">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                className="relative flex items-center justify-center w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-5 whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {link}
              </button>
            ))}
          </nav>

          <img
            className="md:absolute md:top-[55px] md:left-[1140px] w-[180px] h-10 mb-8 md:mb-0"
            alt="Social"
            src="https://c.animaapp.com/mjpa9qww4RQgSg/img/social.png"
          />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[15px] md:top-[211px] md:left-[120px] md:absolute text-center md:text-left">
            <div className="text-white text-base">Privacy policy</div>
            <div className="hidden md:block text-white text-base">|</div>
            <div className="text-white text-base text-center">
              Copyright @ Kartik Bansal 2022. All Rights Reserved.
            </div>
            <div className="hidden md:block text-white text-base">|</div>
            <div className="text-white text-base">Terms of service</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Home() {
  return <NftLandingPage />;
}
