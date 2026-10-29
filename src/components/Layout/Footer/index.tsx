import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 pt-2">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar - Fully Responsive */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 py-6 sm:py-8 text-center sm:text-left">
          <p className="text-sm sm:text-[15px] leading-relaxed m-3 text-slate-600 dark:text-slate-400">
            © Copyright {currentYear}. All rights reserved by{" "}
            <Link
              href="https://votas.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              Votas
            </Link>
          </p>

          {/* Optional Links - Uncomment when needed, already responsive */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
