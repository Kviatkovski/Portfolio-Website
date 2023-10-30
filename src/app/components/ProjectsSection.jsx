'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Crwn Clothing',
    description: 'Project 1 description',
    image: '/images/projects//img-1.jpg',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://lukas-crwn-clothing.netlify.app/',
  },
  {
    id: 2,
    title: 'Monster Rolodexs',
    description: 'Project 2 description',
    image: '/images/projects//img-2.jpg',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://lukas-monsters-rolodex.netlify.app/',
  },
  {
    id: 3,
    title: 'Todo App',
    description: 'Project 3 description',
    image: '/images/projects//img-3.jpg',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://lukas-todo-app.netlify.app/',
  },
  {
    id: 4,
    title: 'Currency Converter App',
    description: 'Project 4 description',
    image: '/images/projects//img-4.jpg',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://lukas-currency-converter.netlify.app/',
  },
  {
    id: 5,
    title: 'Pong',
    description: 'Project 5 description',
    image: '/images/projects//img-5.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-pong.netlify.app/',
  },
  {
    id: 6,
    title: 'Paint Clone',
    description: 'Project 6 description',
    image: '/images/projects//img-6.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-paint-clone.netlify.app/',
  },
  {
    id: 7,
    title: 'Calculator',
    description: 'Project 7 description',
    image: '/images/projects//img-7.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-calculator.netlify.app/',
  },
  {
    id: 8,
    title: 'Math Sprint Game',
    description: 'Project 8 description',
    image: '/images/projects//img-8.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-math-sprint-game.netlify.app/',
  },
  {
    id: 9,
    title: 'Drag And Drop',
    description: 'Project 9 description',
    image: '/images/projects//img-9.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-drag-and-drop.netlify.app/',
  },
  {
    id: 10,
    title: 'Splash page',
    description: 'Project 10 description',
    image: '/images/projects//img-10.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-splash-page.netlify.app/',
  },
  {
    id: 11,
    title: 'NASA API Pictures',
    description: 'Project 11 description',
    image: '/images/projects//img-11.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-nasa-api-pictures.netlify.app/',
  },
  {
    id: 12,
    title: 'Spock Rock Game',
    description: 'Project 12 description',
    image: '/images/projects//img-12.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-spock-rock-game.netlify.app/',
  },
  {
    id: 13,
    title: 'Video Player',
    description: 'Project 13 description',
    image: '/images/projects//img-13.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-video-player.netlify.app/',
  },
  {
    id: 14,
    title: 'Music Player',
    description: 'Project 14 description',
    image: '/images/projects//img-14.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-music-player.netlify.app/',
  },
  {
    id: 15,
    title: 'Form Validation',
    description: 'Project 15 description',
    image: '/images/projects//img-15.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-form-validation.netlify.app/',
  },
  {
    id: 16,
    title: 'Book keeper',
    description: 'Project 16 description',
    image: '/images/projects//img-16.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-book-keeper.netlify.app/',
  },
  {
    id: 17,
    title: 'Costume Countdown',
    description: 'Project 17 description',
    image: '/images/projects//img-17.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-costume-countdown.netlify.app/',
  },
  {
    id: 18,
    title: 'Picture In Picture',
    description: 'Project 18 description',
    image: '/images/projects//img-18.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-picture-in-picture.netlify.app/',
  },
  {
    id: 19,
    title: 'Infinite Scroll',
    description: 'Project 19 description',
    image: '/images/projects//img-19.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-infinite-scroll.netlify.app/',
  },
  {
    id: 20,
    title: 'Joke Teller',
    description: 'Project 20 description',
    image: '/images/projects//img-20.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-joke-teller.netlify.app/',
  },
  {
    id: 21,
    title: 'Animated Navigation',
    description: 'Project 21 description',
    image: '/images/projects//img-21.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-animated-navigation.netlify.app/',
  },
  {
    id: 22,
    title: 'Animated Template',
    description: 'Project 22 description',
    image: '/images/projects//img-22.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-animated-template.netlify.app/',
  },
  {
    id: 23,
    title: 'Light And Dark Mode',
    description: 'Project 23 description',
    image: '/images/projects//img-23.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-light-dark-mode.netlify.app/',
  },
  {
    id: 24,
    title: 'Quote Generator',
    description: 'Project 24 description',
    image: '/images/projects//img-24.jpg',
    tag: ['All', 'Js'],
    gitUrl: '/',
    previewUrl: 'https://lukas-quote-generator.netlify.app/',
  },
  {
    id: 25,
    title: 'Omnifood Template',
    description: 'Project 25 description',
    image: '/images/projects//img-25.jpg',
    tag: ['All', 'Html/Css'],
    gitUrl: '/',
    previewUrl: 'https://lukas-omnifood-site.netlify.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='flex flex-row justify-center items-center gap-2 text-white my-6'>
        <ProjectTag
          name='All'
          onClick={handleTagChange}
          isSelected={tag === 'All'}
        />
        <ProjectTag
          name='Html/Css'
          onClick={handleTagChange}
          isSelected={tag === 'Html/Css'}
        />
        <ProjectTag
          name='Js'
          onClick={handleTagChange}
          isSelected={tag === 'Js'}
        />
        <ProjectTag
          name='React'
          onClick={handleTagChange}
          isSelected={tag === 'React'}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
