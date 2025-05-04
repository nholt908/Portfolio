import React, {useEffect, useState} from 'react';

function SkillsView() {
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/skills')
        .then(res => res.json())
        .then(data => setSkills(data))
        .catch(err => console.error('Failed to fetch skills:', err));
    }, []);

    return (
        <main className="text-darkestcolor dark:text-lightestcolor">
        {skills.map((skills, index) => (
            <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-6">
                <h2 className='font-bold text-4xl text-center'>Skill: {skills.skill}</h2>
                <p className='text-xl'>Proficiency: {skills.proficiency}</p>
                {skills.icon && <img src={skills.icon} alt={skills.skill} className="bg-lightestcolor rounded-md" />}
            </div>
        ))}
      </main>
    );
}
  
export default SkillsView;  