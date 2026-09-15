import { Outlet } from "react-router";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-sky-100 text-slate-800 dark:bg-slate-800 dark:text-sky-200 grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
