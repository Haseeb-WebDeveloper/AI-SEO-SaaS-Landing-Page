'use client'

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import CrossIcon from "@/assets/icon-cross.svg";
import Button from "@/components/Button";
import { useState } from "react";
import Link from 'next/link'; // Import Link from Next.js

export const Header = () => {
  const [navMenu, setNavMenu] = useState(false);

  return(
    <> 
      <header className="relative z-[100]">
        <div className=" px-3 py-4 md:border-b border-white/15 md:border-none z-[100]">
          <div className="z-[100]  bg-[#191919] backdrop-blur-xl max-w-2xl mx-auto flex justify-between items-center border border-white/20 md:rounded-3xl rounded-xl p-2.5 md:p-1.5  ">

            <div className="flex items-center ">
              <Link href='/' className="w-10 h-10 inline-flex justify-center items-center border border-white/15 rounded-2xl">
                <LogoIcon className="h-7 w-7 text-white"/>
              </Link>
            </div>

            <div className="hidden md:block">
            {/* <a href="https://www.haseebkhan.online/" target="_blank" className="text-white/70 hover:text-white transition font-jetbrains">Design & Developed by Wasif Ali Khan</a> */}
              <nav className=" flex gap-8 items-center text-sm font-light">
                <Link href="/feature" className=" text-white/70 hover:text-white transition">Feature</Link>
                <Link href="/pricing" className=" text-white/70 hover:text-white transition">Pricing</Link>
                <Link href="/developer" className=" text-white/70 hover:text-white transition">Developer</Link>
                {/* <Link href="/ChangeLog" className=" text-white/70 hover:text-white transition">ChangeLog</Link> */}
              </nav>          
            </div>

            <div className="flex gap-4 items-center">
              <Link href='/start'>
                <Button text={"START"}/>
              </Link>
              { navMenu==false ?
                <MenuIcon 
                onClick={() => setNavMenu(true)}
                className="md:hidden"/>
                :
                <CrossIcon
                onClick={() => setNavMenu(false)}
                className="md:hidden"/>
              }
            </div>

          </div>
        </div>
          {/* for small devices */}
        <div className={`${navMenu? "left-0 " : "left-[100%] " } h-[100vh] transition-all ease-in-out duration-500  absolute z-50  md:hidden w-full p-3`}>
          <div className="py-6  bg-white/10 backdrop-blur-3xl max-w-2xl mx-auto border border-white/20 md:rounded-3xl rounded-xl px-3">
              <nav className=" flex flex-col gap-4 text-sm">
                    <Link href="/feature" className=" px-3 py-3 border border-transparent hover:border-black rounded-md bg-black/40 text-white/70 hover:text-white transition">Feature</Link>
                    <Link href="/pricing" className=" px-3 py-3 border border-transparent hover:border-black rounded-md bg-black/40 text-white/70 hover:text-white transition">Pricing</Link>
                    <Link href="/developer" className=" px-3 py-3 border border-transparent hover:border-black rounded-md bg-black/40 text-white/70 hover:text-white transition">Developer</Link>
                    <Link href="/ChangeLog" className=" px-3 py-3 border border-transparent hover:border-black rounded-md bg-black/40 text-white/70 hover:text-white transition">ChangeLog</Link>
              </nav>
          </div>
        </div>
      </header>
  </>
  )
};
