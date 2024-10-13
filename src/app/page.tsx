import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className="relative  pb-12">
        <Hero/>
      </div>
      <div className="h-[180px]"></div>

      <LogoTicker/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
    </>
  )
}
