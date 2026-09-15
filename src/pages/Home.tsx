import { useActiveSection } from "../hooks/useActiveSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { IoIosArrowUp } from "react-icons/io";

function Home() {
  const { active, scrollToTop, scrollToSection } = useActiveSection();

  return (
    <>
      <main>
        <section
          id="home"
          className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="mb-4 font-medium tracking-widest dark:text-blue-400 text-blue-600">
              Hello! I'm
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">Pamala.</h1>
            <h1 className="text-5xl font-bold md:text-7xl dark:text-blue-400 text-blue-500">
              Full Stack Developer
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg dark:text-slate-400">
              Focused on building thoughtful, scalable web applications from the
              ground up
            </p>
            <div className="mt-4 flex gap-1.5 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                title="Check out my projects"
                className="text-xl font-bold cursor-pointer border rounded-md px-5 py-2.5 hover:text-blue-800 hover:bg-blue-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                title="Find my contacts"
                className="text-xl font-bold cursor-pointer border rounded-md px-5 py-2.5 hover:text-blue-800 hover:bg-blue-200"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />

        {active !== "home" && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-20 right-6 z-50 h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            {/* Back to Top */}
            <IoIosArrowUp className="text-4xl ml-1 pl-0.5" />
          </button>
        )}
      </main>
    </>
  );
}

export default Home;
