import { ProjectsData } from '@/lib/Constant';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="py-10">
      <h4 className="font-orbitron text-2xl font-bold mb-4">Projects</h4>
      <div
        className="flex flex-row items-center justify-between w-full flex-wrap gap-4
        "
      >
        {ProjectsData.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
