export function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest dark:text-blue-400 text-blue-600">
          About
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">A little about me</h2>

        <p className="mt-6 text-lg leading-8 dark:text-slate-400">
          I'm a self-taught full stack developer who enjoys turning ideas into
          working products, learning new technologies and solving problems from
          frontend to backend. My background spans quality control, testing and
          data analysis, where I've developed a strong eye for detail and a
          passion for troubleshooting and making things work better.
        </p>
        <p className="mt-6 text-lg leading-8 dark:text-slate-400">
          My journey into development started with curiosity and my desire to
          learn. I began reading countless tabs of documentations and made a
          habit of learning by building.
        </p>
        <p className="mt-6 text-lg leading-8 dark:text-slate-400">
          These days, I build across the stack, from clean, responsive frontend
          interfaces to scalable backends, APIs, databases, authentication and
          everything in between. I enjoy taking an idea from a rough concept to
          something people can actually use.
        </p>
        <p className="mt-6 text-lg leading-8 dark:text-slate-400">
          I'm always learning by experimenting with new technologies, looking
          for better ways to build and striving to get a little better with
          every project.
        </p>
      </div>
    </section>
  );
}
