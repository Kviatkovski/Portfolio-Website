'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { projectsData } from '../projectData';

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
      <h2
        id='projects'
        className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'
      >
        My Projects
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 text-white my-6'>
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
