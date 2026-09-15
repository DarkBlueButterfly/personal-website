import { MdOutlineOpenInNew } from "react-icons/md";
import { projects } from "../utils/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
    >
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest dark:text-blue-400 text-blue-600">
          Projects
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">My Apps</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border dark:border-white/10 dark:bg-white/5 border-b-blue-500 p-6"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 dark:text-slate-400 text-slate-700">
                {project.description}
              </p>
              <div className="flex flex-wrap my-3 gap-1">
                {project.tools.map((tool) => (
                  <p className="rounded border py-1 px-2.5 text-xs" key={tool}>
                    {tool}
                  </p>
                ))}
              </div>
              <div className="flex gap-1.5">
                {project.link ? (
                  <>
                    <a
                      href={project.link}
                      title="Demo"
                      target="_blank"
                      className="flex items-center gap-1 hover:text-blue-300"
                    >
                      Demo{" "}
                      <span>
                        <MdOutlineOpenInNew />
                      </span>
                    </a>{" "}
                    |
                  </>
                ) : (
                  ""
                )}{" "}
                <a
                  href={project.github}
                  title="GitHub"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-blue-300"
                >
                  GitHub{" "}
                  <span>
                    <MdOutlineOpenInNew />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
