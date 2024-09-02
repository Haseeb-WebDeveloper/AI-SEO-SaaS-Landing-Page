'use client'

import React, { useEffect, useState, useRef } from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from 'next/image';

const testimonials = [
  {
    quote: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    quote: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    quote: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    quote: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Initialize the animation
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }

  return (
    <section className="text-white  pb-16 pt-10  ">
      <div className="">
        <h2 className="px-4 text-4xl md:text-5xl  font-medium text-center mb-4">Beyond Expectations</h2>
        <p className="px-4 text-white/90 text-lg t max-w-[600px]  font-light text-md md:text-lg mx-auto text-center text-gray-300 mb-5 ">Our clients share their success stories</p>
        <div
          ref={containerRef}
          className="scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <ul
            ref={scrollerRef}
            className={`flex gap-4 py-4 w-max flex-nowrap ${start ? "animate-scroll" : ""} hover:[animation-play-state:paused]`}
          >
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name}
                className=" p-5 flex flex-col gap-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] rounded-lg border border-black/10 flex-shrink-0 w-[300px] md:w-[400px] "
              >
                <div>
                  <p className="text-md font-normal">{testimonial.quote}</p>
                </div>
                <div className="flex gap-4">
                  <Image src={testimonial.avatarImg.src} alt="avetar" width={50} height={50} />
                  <div>
                    <h3 className="text-lg tracking-tight">{testimonial.name}</h3>
                    <h3 className="text-md tracking-tight text-white/90">{testimonial.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
