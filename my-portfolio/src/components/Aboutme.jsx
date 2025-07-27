import profileImage from "../assets/me.jpeg";

function Aboutme() {
  return (
    <div className="bg-white text-black min-h-screen px-4 md:px-10 lg:px-28">
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <main className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-6xl mx-auto">
          
          
          <img
            src={profileImage}
            alt="Aditi Nair"
            className="w-52 h-52 md:w-80 md:h-80 object-cover rounded-md shadow-lg"
          />

          
          <div className="max-w-2xl text-justify">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              I am a third-year Electronics and Computer Engineering student at Amrita Vishwa Vidyapeetham,
              with a strong focus on full-stack development, problem-solving, and writing clean, maintainable code.
              I enjoy working with the MERN stack, exploring UI/UX best practices, and building meaningful tools that
              simplify everyday tasks.
              <br /><br />
              Currently, I’m improving my skills in data structures, algorithms, and backend development,
              with a growing interest in AI tools like LLMs and Retrieval-Augmented Generation.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Aboutme;
