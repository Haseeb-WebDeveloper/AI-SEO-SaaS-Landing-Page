import React from 'react';
import Image, { StaticImageData } from 'next/image';
import acemeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quantomLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';

export const LogoTicker: React.FC = () => {
  const logos: StaticImageData[] = [acemeLogo, apexLogo, celestialLogo, quantomLogo, pulseLogo, echoLogo];

  return (
    <section className=' py-16  bg-black '>
      <div className="container overflow-hidden mx-auto">

          <div className='mx-auto relative '>
            <div className='LogoeConatiner overflow-hidden flex items-center justify-start  border-none'>
              <div className='absolute z-[10] top-0 left-[-2px] w-28  h-full bg-gradient-to-r from-black to-transparent'></div>
              <div className='absolute z-[10] top-0 right-[-2px] w-28  h-full bg-gradient-to-l from-black to-transparent'></div>
              <div className='logoSilder flex  flex-none '>
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className='h-6 md:h-8 w-auto mx-4'
                  />
                ))}
              </div>
              <div className='logoSilder flex flex-none '>
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className='h-6 md:h-8 w-auto mx-4'
                  />
                ))}
              </div>
              <div className='logoSilder flex  flex-none '>
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className='h-6 md:h-8 w-auto mx-4'
                  />
                ))}
              </div>  
            </div>

          </div>

      </div>
    </section>

  );
};