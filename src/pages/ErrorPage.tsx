import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <main className="min-h-screen bg-sky-100 text-slate-800 dark:bg-slate-800 dark:text-sky-200 grid grid-rows-[auto_1fr_auto]">
        <section className="flex min-h-screen scroll-mt-20 items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold md:text-7xl">
              404! This route doesn't exist!
            </h1>
            <Link
              to="/"
              className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              Click here to go back
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
