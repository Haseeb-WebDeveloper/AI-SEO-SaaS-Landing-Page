import Instagram from "@/assets/social-instagram.svg"
import Whatsapp from "@/assets/social-whatsapp.svg" 
import Logo from "@/assets/logo.svg"
import Upwork from "@/assets/social-upwork.svg"
import Link from "next/link"
export const Footer = () => {
  return (
    <>
      <section className="text-white mx-auto mt-12 md:mt-2">
        <footer className="container font-light border-t-[.5px] border-white/5 ">
          <div className=" flex flex-col md:flex-row gap-y-6 justify-between md:items-center  py-10 md:py-4">
            <Link href='/' id="logo" className="flex gap-2 items-center">
                <Logo className="w-7 h-7"/>
                <h2 className="text-sm">AI SEO</h2>
            </Link>
            <div id="navLinks">
              <a href="https://www.haseebkhan.online/" target="_blank" className="text-white/70 hover:text-white transition font-jetbrains">Design & Developed by Wasif Ali Khan</a>
              {/* <nav className="flex  md:flex-row gap-x-8 gap-y-2 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition">Feature</a>
                <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
                <a href="#" className="text-white/70 hover:text-white transition">Developer</a>
              </nav>  */}
            </div>
            <div id="socialMedia" className="flex items-center">
              <nav className="flex gap-3 text-sm">
                <a href="https://www.instagram.com/haseeb.ahmed.raza.khan/" className="text-white/70 hover:text-white transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://wa.me/qr/45TGTRBIVEY3F1" className="text-white/70 hover:text-white transition">
                  <Whatsapp className="w-6 h-6" />
                </a>
                <a href="https://www.upwork.com/freelancers/~0118381d87d570dc8b?mp_source=share" className="text-white/70 hover:text-white transition">
                  <Upwork className="w-6 h-6" />
                </a>
              </nav> 
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
