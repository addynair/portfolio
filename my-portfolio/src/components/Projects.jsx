function Projects() {
  const projects = [
  {
    name: "Medimate",
    description: (
      <p className="text-sm sm:text-base text-gray-300 mb-3 max-w-xl leading-relaxed">
        Medimate is a UI/UX design project created using {" "}
        <span className="text-[#facc15] font-medium">Figma</span>. It focuses on
        user-centric mental health support,
        using calming cyan hues and
        friendly illustrations to create a soft,
        approachable visual tone. It emphasizes clean layout, accessibility, and visual clarity
        to foster trust and ease of use.
      </p>
    ),
    link: "https://www.figma.com/proto/bD7XcqrX0gqmAkhzU7vcGT/Mindful-App?node-id=57-48&p=f&t=5ZxivV348r16wRzH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Venty",
    description: (
  <p className="text-sm sm:text-base text-gray-300 mb-3 max-w-xl leading-relaxed">
    Venty is a full-stack journaling platform that uses{" "}
    <span className="text-[#facc15] font-medium">AI</span> for real-time sentiment analysis and delivers
    personalized insights based on mood patterns. It integrates{" "}
    <span className="text-[#38bdf8] font-semibold">
      Hugging Face API via LangChain
    </span>{" "}
    to power advanced natural language processing and emotion recognition features.
  </p>
),
    link: "https://venty-seven.vercel.app/",
  },
];

  return (
    <section id="Projects" className="bg-[#0A101F] text-white px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
  <div
    key={index}
    onClick={() => window.open(project.link, "_blank")}
    className={`flex flex-col justify-between cursor-pointer bg-[#111827] rounded-md p-6 min-h-[160px] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_20px_#59C1F8] ${
      index % 2 === 0 ? "items-end text-right" : "items-start text-left"
    }`}
  >
    <h3 className="text-xl font-bold text-[#59C1F8]">{project.name}</h3>
    {project.description}
  </div>
))}

      </div>
    </section>
  );
}

export default Projects;
