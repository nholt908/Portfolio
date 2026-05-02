import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Education(){
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <EducationView />
      <Footer />
    </div>
)};

function EducationView() {
    const [education, setEducation] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/education')
        .then(res => res.json())
        .then(data => setEducation(data))
        .catch(err => console.error('Failed to fetch education:', err));
    }, []);

    return (
        <main>
        {education.map((education, index) => (
            <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-4">
                <h2 className='font-bold text-4xl text-center'>{education.degree}</h2>
                <p className='text-2xl'>Institution: {education.institution}</p>
                <p className='text-lg'>Year: {education.gradYear}</p>
                <p>Description: {education.description}</p>
            </div>
        ))}
      </main>
    );
}

export default Education;