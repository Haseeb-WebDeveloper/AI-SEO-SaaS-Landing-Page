'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import ProductImg from '@/assets/product-image.png';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const tabs = [
  {
    icon: '/assets/lottie/vroom.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {

  // Store references to all DotLottiePlayer elements
  // const playerRefs = useRef<(HTMLDotLottiePlayerElement | null)[]>([]);
  
  // State to track the active tab
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // const handleMouseEnter = (index: number) => {
  //   if (playerRefs.current[index]) {
  //     playerRefs.current[index]?.play(); // Start playing animation on hover
  //   }
  // };

  // const handleMouseLeave = (index: number) => {
  //   if (playerRefs.current[index]) {
  //     playerRefs.current[index]?.stop(); // Stop animation on mouse leave
  //   }
  // };

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index); // Set the clicked tab as active
  };

  return (
    <section className="py-32"> 
      <div className="container">
        <div className="flex flex-col items-center w-full gap-y-4">
          <div id="text" className="flex flex-col gap-4">
            <h2 className="text-shadow text-center px-2 leading-tight text-4xl md:text-6xl font-medium tracking-tight text-white">
              Elevate Your SEO Effort
            </h2>
            <p className="text-white/90 text-lg text-center max-w-[600px] mx-auto textShadow font-light">
              From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:max-w-6xl w-full">
            <div id="tabs" className="mt-4 text-white mx-auto grid gap-x-3 gap-y-2 lg:grid-cols-3 grid-cols-1 w-full ">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.title}
                  className={`flex items-center gap-4 py-2 px-3 rounded-lg border border-white/20 cursor-pointer `}
                  // onMouseEnter={() => handleMouseEnter(index)} // Play animation on hover
                  // onMouseLeave={() => handleMouseLeave(index)} // Stop animation on mouse leave
                  onClick={() => handleTabClick(index)} // Handle tab click
                >
                  <div className="p-2 bg-gradient-to-br from-[#9b60fa] via-[#803FEA] to-[#240552] rounded-lg">
                    <DotLottiePlayer
                      className="w-5 h-5"
                      autoplay={false} // Disable autoplay initially
                      loop
                      // ref={(el) => (playerRefs.current[index] = el)} // Store reference to the player
                      src={tab.icon}
                    />
                  </div>
                  <div className="w-full flex items-center justify-between gap-2">
                    <p className="text-white font-medium">{tab.title}</p>
                    {tab.isNew && <span className="text-xs bg-[#803FEA] font-light ml-2 rounded-xl px-2 py-1 shadow">New</span>}
                  </div>
                </motion.div>
              ))}
            </div>
            <div id="image" className=" rounded-xl w-full h-full flex gap-4">
              <motion.div
                id='productImage'
                className="aspect-video bg-cover bg-[#3C3D37] shadow border border-black/20 rounded-xl w-[100%] mx-auto h-3/4 " // Adjust width and height
                style={{
                  backgroundImage: `url(${ProductImg.src})`,
                  backgroundPosition: `${tabs[activeTabIndex].backgroundPositionX}% ${tabs[activeTabIndex].backgroundPositionY}%`,
                  backgroundSize: `${tabs[activeTabIndex].backgroundSizeX}%`,
                }}
                animate={{
                  backgroundPositionX: `${tabs[activeTabIndex].backgroundPositionX}%`,
                  backgroundPositionY: `${tabs[activeTabIndex].backgroundPositionY}%`,
                  backgroundSize: `${tabs[activeTabIndex].backgroundSizeX}%`,
                }}
                transition={{ duration: 0.5 }} // Smooth transition for background changes
              ></motion.div>
              {/* <div className='aspect-[9/16] w-[25%] h-full '>
                <video className='' src={Video.src}></video>
                <Video/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
