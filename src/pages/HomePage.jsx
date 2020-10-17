import React from 'react';
import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import '../App.css';

function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData = {projectData} />;
            })}
        </div>
    );
}

export default HomePage;