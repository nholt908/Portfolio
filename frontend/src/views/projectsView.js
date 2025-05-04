import React, {useEffect, useState} from 'react';

function ProjectsView() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error('Failed to fetch projects:', err));
    }, []);

    return (
      <main className="text-darkestcolor dark:text-lightestcolor">
        {projects.map((project, index) => (
            <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-6">
                <h2 className='font-bold text-4xl text-center'>Project: {project.title}</h2>
                <p className='text-xl'>{project.description}</p>
                <p>Skills Used: {project.technologies}</p>
                {project.image && <img src={project.image} alt={project.title} className="rounded-3xl max-w-[90%] max-h-[80%] border-3 border-accentcolor" />}
                <a href={project.GitHubLink} target="_blank" rel='noopener noreferrer' className='underline text-darkcolor dark:text-lightcolor'>GitHub Link</a>
            </div>
        ))}
      </main>
    );
}
  
export default ProjectsView;  