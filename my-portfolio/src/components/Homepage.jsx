import Header from "./Header";
import resume from "../assets/Resume1.pdf";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-[#0A101F] text-white">
      <Header />

      <main className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] px-6 md:px-16 lg:px-28">
        <h1 className="text-white text-5xl font-bold drop-shadow-[0_1px_5px_rgba(255,255,255,0.2)] md:text-6xl mb-6 leading-tight">
          ADITI NAIR
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#FFFFFF] mb-4 font-medium">
          Full Stack Developer &nbsp; | &nbsp; UI/UX Designer
        </p>

        <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] max-w-2xl mb-8 leading-relaxed">
          I build clean, user-focused web applications and enjoy solving real-world problems through code. 
          Currently exploring the MERN stack, system design fundamentals, and advanced programming.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            className="px-6 py-2 sm:px-8 sm:py-2 rounded-md bg-[#82D1F5] text-black font-medium hover:bg-[#6ec1e4] transition"
            onClick={() => window.open(resume, "_blank")}
          >
            View Resume
          </button>

          <button
            className="px-6 py-2 sm:px-8 sm:py-2 border border-[#82D1F5] text-[#82D1F5] rounded-md hover:bg-[#1a2238] transition"
            onClick={() =>
              document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
