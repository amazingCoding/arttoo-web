"use client";
import { ArttooLogoBlack } from "@/assets/images";
import FadeInUpwardAnimation from "@/components/FadeInUpwardAnimation";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const navlinks = [
  {
    title: "Artworks",
    link: "#",
  },
  {
    title: "Learn",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];
const Header = ({ progress }: { progress: MotionValue<number> }) => {
  const navbarTextColor = useTransform(
    progress,
    [0, 0.9, 0.99, 1],
    ["#FFFFFF", "#FFFFFF", "#000000", "#000000"]
  );

  const navImageFilter = useTransform(
    progress,
    [0, 0.9, 0.99, 1],
    ["invert(0%)", "invert(0%)", "invert(100%)", "invert(100%)"]
  );
  const [openDrawer, setOpenDrawer] = React.useState(false);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDrawer]);

  return (
    <>
      <header
        id="header"
        className=" h-fit fixed top-0 z-10 left-1/2 -translate-x-1/2  w-full"
      >
        <div
          id="nav-container"
          className="flex justify-between w-[90vw] sm:w-[85vw] py-8 mx-auto"
        >
          <FadeInUpwardAnimation translateY={20}>
            <motion.img
              src={"/arttoo-logo.png"}
              alt="logo"
              style={{
                filter: navImageFilter,
              }}
              className="sm:w-[160px] w-[96px]"
            />
          </FadeInUpwardAnimation>

          <button
            onClick={() => setOpenDrawer(true)}
            className="block sm:hidden text-white"
          >
            <Menu id="menu" />
          </button>
          <motion.div
            className="hidden sm:flex gap-16  font-poppins font-medium"
            style={{
              color: navbarTextColor,
            }}
          >
            {navlinks.map((link, index) => {
              return (
                <FadeInUpwardAnimation
                  key={index}
                  delay={(index + 1) * 0.05}
                  translateY={20}
                >
                  <Link href={link.link}>{link.title}</Link>
                </FadeInUpwardAnimation>
              );
            })}
          </motion.div>
        </div>
      </header>
      <SideDrawer open={openDrawer} close={() => setOpenDrawer(false)} />
    </>
  );
};

const SideDrawer = ({ open, close }: { open: boolean; close: () => void }) => {
  return (
    <div
      className={`${
        open ? "right-0" : "right-[-100%]"
      } h-screen max-w-[640px] w-full space-y-12 shadow-lg bg-white z-50 fixed top-0 transition-all duration-500 ease-out`}
    >
      <div className="flex justify-between mt-12 px-4">
        <Image src={ArttooLogoBlack} alt="logo" className="w-[120px]" />
        <button onClick={close} className="">
          <X />
        </button>
      </div>
      <div className="gap-8 text-[18px] flex flex-col px-4 py-4 font-poppins ">
        {navlinks.map((link, index) => {
          return (
            <Link
              className="text-[32px] leading-[48px]"
              key={index}
              href={link.link}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
