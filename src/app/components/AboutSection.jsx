'use client';

import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NodeJs</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>TSMU University</li>
        <li>Step Academy</li>
      </ul>
    ),
  },
  {
    title: 'Certification',
    id: 'certification',
    content: (
      <ul className='list-disc pl-2'>
        <li>Udemy JS</li>
        <li>Udemy React</li>
        <li>Udemy Node</li>
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
        <img
          src='https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/000-Web-Developer-Portfolio.jpg'
          width={500}
          height={500}
          alt='about page photo'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium consequatur consequuntur praesentium totam esse eaque
            quod commodi debitis pariatur laudantium accusamus facilis laborum,
            at nam beatae voluptate quam fuga tenetur.
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
