function Footer() {
  return (
    <footer className="bg-lightcolor dark:bg-darkcolor text-darkestcolor dark:text-lightestcolor mt-auto border-t-3 border-accentcolor">
      <div className="flex items-center justify-center gap-4 py-2">
        <p>&copy; 2025 Nicole Holt</p>
        <a href="https://www.linkedin.com/in/nicole-holt-17ab53332/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" height="40px" alt="LinkedIn" />
        </a>
        <a href="https://github.com/nholt908" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" height="40px" alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
