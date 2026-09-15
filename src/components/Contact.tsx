import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
    >
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest dark:text-blue-400 text-blue-600">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">Let's work together</h2>
        <div className="flex gap-2 justify-center mt-2.5">
          {/* GitHub */}
          <a
            href="https://github.com/DarkBlueButterfly"
            title="GitHub"
            target="_blank"
            className="hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            <IoLogoGithub className="text-5xl" />
          </a>
          {/* LinkedIn */}
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            title="LinkedIn"
            target="_blank"
            className="hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            <IoLogoLinkedin className="text-5xl" />
          </a>
        </div>

        <p>Please feel free to reach out!</p>
        <ContactForm />
      </div>
    </section>
  );
}
