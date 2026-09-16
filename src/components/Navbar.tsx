import { useState } from "react";
import { sections, useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const { active, scrollToSection } = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-blue-900 text-sky-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 h-20">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer hover:bg-indigo-300 hover:animate-ping"
          title="Home"
        >
          <img
            src="/favicon.png"
            alt="Blue Butterfly"
            className="hover:bg-blue-300 h-20 "
          />
        </button>

        <div className="hidden sm:flex gap-2">
          <div className="flex gap-2">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
            <ThemeToggle />
          </div>
        </div>

        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="flex flex-col items-center gap-2 p-4 sm:hidden">
          {sections.map((section) => {
            const isActive = active === section.id;

            return (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                }}
                className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-all ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            );
          })}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};
