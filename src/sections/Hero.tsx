'use client'
import React, { useRef } from 'react';
import StarBg from "@/assets/stars.png";
import HomeGlobe from "@/components/HomeGlobe"
import { motion, useScroll, useTransform } from "framer-motion"

export const Hero = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <motion.div 
      ref={sectionRef}
      className="relative w-full z-20"
      style={{ 
        backgroundImage: `url(${StarBg.src})` ,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: ["0%", "100%"],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }}
    >
      <section className="mx-auto md:mt-36 mt-48 "
        >
        <div className="absolute h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 bg-[radial-gradient(circle_at_center,rgb(140,69,255,0.2)_0%,rgb(14,0,36,0.1)_35%,transparent_70%)]"></div>
        {/* central circle */}
        <HomeGlobe/> 

        {/* heading and btn etc */}
        <div className="px-4 mt-16 z-[100] relative w-full ">
          <h1 className="  text-shadow leading-tight text-[20vw] md:text-[10vw] text-center tracking-tighter font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] bg-clip-text text-transparent">
            AI SEO
          </h1>
          <p className="text-white/90 text-lg text-center max-w-[600px] mx-auto textShadow font-light">
            With our AI SEO services, you'll stay ahead of the competition and achieve higher rankings in search engine results.
          </p>
          
        </div>

      </section>
    </motion.div>
  );
};
