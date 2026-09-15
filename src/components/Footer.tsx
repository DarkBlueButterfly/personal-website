const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center p-4">
        © {year}
        <a
          href="https://github.com/DarkBlueButterfly"
          target="_blank"
          className="hover:text-indigo-600 dark:hover:text-indigo-300"
        >
          {" "}
          DarkBlueButterfly{" "}
        </a>
        All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
