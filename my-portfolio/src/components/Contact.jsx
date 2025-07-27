import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="Contact"
      className="bg-[#F3F4F6] text-black px-6 py-16 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-800 max-w-2xl mx-auto mb-8">
        Let’s get in touch! Whether it's collaboration, internships, or a good
        problem to solve, I’m always open to opportunities.
      </p>

      <div className="flex justify-center gap-6 text-2xl text-[#0A101F]">
        <a
          href="https://github.com/addynair"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/justaddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
        href="mailto:addynair6@gmail.com"
        >
          <FaEnvelope />
        </a>
        <a 
        href="https://x.com/justaddy_"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;
