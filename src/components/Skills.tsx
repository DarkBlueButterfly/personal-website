import { skills } from "../utils/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest dark:text-blue-400 text-blue-600">
          Skills
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">Tech Stack</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 key={group} className="text-xl font-bold">
                {group}
              </h3>
              <div className="grid gap-2">
                {items.map((s) => (
                  <p key={s} className="rounded border py-1 px-2.5 text-xs">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
