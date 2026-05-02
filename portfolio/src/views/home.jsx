import React, {useEffect} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Home(){
  useEffect(() => {
      fetch('https://portfolio-backend-9zo4.onrender.com/')
      .then(res => res.text())
      .then(data => {
        console.log('GET / response:', data);
      })
      .catch(err => console.error('GET / failed:', err));
    }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <HomeView />
      <Footer />
    </div>
)};

function HomeView() {
  return (
    <main>
      <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col md:flex-row items-center gap-6">
        <img src="/Nicole.png" alt="Nicole" className="border-3 rounded-3xl border-accentcolor max-h-[90vh] w-auto h-auto" />
        <div className='flex flex-col gap-6'>
          <p>My name is Nicole, and I am a current student at Arkansas Tech University pursuing a degree in Computer Science. With a foundation in Website Development, I am passionate about learning and growing within this field. Throughout my academic journey, I have developed skills in various programming languages which can be found on the skills page. On the projects page, you will find a few projects which I have completed. I am excited to apply my knowledge and creativity as I am given challenges and opportunities to develop professionally.</p>
          <p>During my time at Arkansas Tech, I have taken classes in Japanese and art. Studying the Japanese language challenged me to think differently from how the English language is structured. My background in art exposed me to design techniques that I hope to apply.</p>
          <p>My involvement on campus has a strong connection to the music department, where I have had the opportunity to play clarinet in the concert band, symphonic band, and marching band. I am a proud member of Sigma Alpha Iota, a music fraternity for women and nonbinary individuals dedicated to supporting music in their communities and the world.</p>
        </div>
      </div>
    </main>
  );
}

export default Home;