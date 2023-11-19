'use client';

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
// import CV from '../../../public/pdf/Luka_Kviatkovski.pdf';

const HeroSection = () => {
  return (
    <section className='lg:py-16' id='about'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
              Hello, I'm{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Luka',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Front End Developer',
                1000,
                'Back End Developer',
                1000,
                'Full Stack Developer',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] mb-6 sm:text-lg lg:text-3xl pr-5 xl:pr-0'>
            Hi My Name Is Luka Kviatkovski And This Is My Portfolio Page.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-white'>
              <Link
                href='/Luka_Kviatkovski.pdf'
                target='_blank'
                download='Luka_Kviatkovski_CV'
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/avatars.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
