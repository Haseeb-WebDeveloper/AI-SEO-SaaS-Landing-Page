'use client'
import React from 'react';
import { motion } from 'framer-motion';

// Define the types for Ring component props
interface RingProps {
  size: number;
  borderStyle?: string;
  opacity: number;
  rotateDirection: string;
  duration: number;
  hasCircles?: boolean; // Optional prop to add small circles to the ring
}

// Reusable Ring component with TypeScript types
const Ring: React.FC<RingProps> = ({
  size,
  borderStyle = '',
  opacity,
  rotateDirection,
  duration,
  hasCircles = false, // Default to false
}) => (
  <motion.div
    style={{
      width: `${size}px`, // Set width dynamically
      height: `${size}px`, // Set height dynamically
      translateX: '-50%',
      translateY: '-50%',
      opacity: opacity / 100, // Set opacity dynamically
    }}
    animate={{
      rotate: rotateDirection,
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
    }}
    className={`absolute z-50 border ${borderStyle} rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
  >
    {/* Render additional content (like small circles) if hasCircles is true */}
    {hasCircles && (
      <>
        <div className="absolute bg-white w-2 h-2 top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bg-white w-2 h-2 top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute border border-white w-4 h-4 top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center bg-black">
          <div className="bg-white w-2 h-2 rounded-full"></div>
        </div>
      </>
    )}
  </motion.div>
);

const HomeGlobe: React.FC = () => {
  return (
    <div
      id="circle"
      className="absolute w-64 h-64 rounded-full border border-white/15 bg-purple-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_8.3%,white,rgb(184,148,255,0.6%),rgb(24,2,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.2),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgba(140,69,255,0.4)]"
    >
      {/* 1st ring around circle with small circles */}
      <Ring size={364} opacity={20} rotateDirection="1turn" duration={50} hasCircles={true} />
      {/* 2nd ring around circle */}
      <Ring size={484} borderStyle="border-dashed" opacity={15} rotateDirection="-1turn" duration={80} />
      {/* 3rd ring around circle */}
      <Ring size={644} borderStyle="border-dotted" opacity={5} rotateDirection="1turn" duration={50} />
      {/* 4th ring around circle */}
      <Ring size={844} borderStyle="border-dashed" opacity={5} rotateDirection="-1turn" duration={100} />
    </div>
  );
};

export default HomeGlobe;
