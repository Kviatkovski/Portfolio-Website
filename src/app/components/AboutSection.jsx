'use client';

import { useState, useTransition } from 'react';
import TabButton from './TabButton';
import Image from 'next/image';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>Redux</li>
        <li>React Router</li>
        <li>NodeJs</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>IT Step Academy</li>
        <li>Tbilisi State Medical University</li>
      </ul>
    ),
  },
  {
    title: 'Certification',
    id: 'certification',
    content: (
      <ul className='list-disc pl-2'>
        <li>2023 - "Understanding TypeScript" - Udemy</li>
        <li>
          2023 - "Node.js, Express, MongoDB & More: The Complete Bootcamp" -
          Udemy
        </li>
        <li>
          2023 - "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)" -
          Udemy
        </li>
        <li>
          2023 - "Advanced CSS and Sass: Flexbox, Grid, Animations and More!" -
          Udemy
        </li>
        <li>
          2022 - "React - The Complete Guide(incl Hooks, React Router, Redux)" -
          Udemy
        </li>
        <li>
          2022 - "JavaScript Web Projects: 20 Projects to Build Your Portfolio"
          - Udemy
        </li>
        <li>2022 - "JavaScript: The Advanced Concepts" - Udemy</li>
        <li>
          2022 - "The Complete JavaScript Course 2022: From Zero To Expert" -
          Udemy
        </li>
        <li>
          2022 - "Build Responsive Real-World Websites With HTML And CSS" -
          Udemy
        </li>
        <li>
          2022 - "Introduction To Computer Science In JavaScript" - CodeHS
        </li>
        <li>2022 - "Front-End Web Programming Course" - IT STEP Academy</li>
        <li>
          2022 - "JavaScript Algorithms And Data Structures" - FreeCodeCamp
        </li>
        <li>2022 - "Responsive Web Design" - FreeCodeCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about-img.png'
          width={500}
          height={500}
          alt='about page photo'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I'm a full-stack developer fluent in the language of JavaScript,
            leveraging its power to craft robust applications. My expertise
            spans across React for dynamic front-end interfaces, Node.js for
            scalable back-end solutions, and Express for efficient routing. With
            proficiency in Mongoose, I navigate databases seamlessly, ensuring
            smooth data management. I thrive on challenges, constantly learning
            and implementing innovative solutions to create impactful software
            experiences.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certification')}
              active={tab === 'certification'}
            >
              Certification
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
