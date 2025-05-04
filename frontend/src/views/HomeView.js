function HomeView() {
  return (
    <main className="text-darkestcolor dark:text-lightestcolor">
      <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col md:flex-row items-center gap-6">
        <img src="/Nicole.jpg" alt="Nicole"className="border-3 rounded-3xl border-accentcolor w-full md:w-1/2" />
        <p className="md:max-w-1/2">My name is Nicole, and I am a current student at Arkansas Tech University pursuing a degree in Computer Science. With a foundation in Website Development, I am passionate about learning and growing within this field. Throughout my academic journey, I have developed skills in various programming languages which can be found on the skills page. On the projects page, you will find a few projects which I have completed. I am excited to apply my knowledge and creativity as I am given challenges and opportunities to develope professionally.</p>
      </div>
      <div className="bg-lightcolor dark:bg-darkcolor mx-auto my-10 rounded-xl border-6 border-accentcolor p-8 w-[90%] flex flex-col items-center gap-6">
      <p>During my time at Arkansas Tech, I have taken classes in Japanese and art. Studying the Japanese language challenged me to think differently from how the English language is structured. My background in art exposed me to design techniques that I hope to apply.</p>
        <p>My involvement on campus has a strong connection to the music department, where I have had the opportunity to play clarinet in the concert band, symphonic band, and marching band. I am a proud member of Sigma Alpha Iota, a music fraternity for women and nonbinary individuals dedicated to supporting music in their communities and the world.</p>
      </div>
    </main>
  );
}

export default HomeView;
