import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Skills(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <SkillsView />
      <Footer />
    </div>
)};

function SkillsView() {
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        fetch('https://portfolio-backend-9zo4.onrender.com/skills')
        .then(res => res.json())
        .then(data => setSkills(data))
        .catch(err => console.error('Failed to fetch skills:', err));
    }, []);

    return (
      <main className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
        {skills.map((skills, index) => (
            <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[70%] md:w-[30%] flex flex-col items-center gap-6">
                <h2 className='font-bold text-4xl text-center'>Skill: {skills.skill}</h2>
                <p className='text-xl'>Proficiency: {skills.proficiency}</p>
                {skills.icon && <img src={skills.icon} alt={skills.skill} className="bg-lightestcolor rounded-md" />}
            </div>
        ))}
      </main>
    );
}

export default Skills;