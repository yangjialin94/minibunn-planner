import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-screen-xl text-center text-sm text-neutral-500">
      {/* Logo */}
      <div className="mx-auto mb-6 w-10">
        <Image
          src="/minibunn-logo.png"
          alt="Minibunn logo"
          width="40"
          height="40"
        />
      </div>

      {/* Nav links */}
      <nav className="mb-6 flex flex-wrap justify-center gap-6 font-medium">
        {/* <Link
          href="/about"
          className="border-b border-transparent hover:border-neutral-500"
        >
          About
        </Link> */}
        <Link
          href="mailto:contact@minibunnplanner.com"
          className="border-b border-transparent hover:border-neutral-500"
        >
          Contact
        </Link>
        <Link
          href="/privacy"
          className="border-b border-transparent hover:border-neutral-500"
        >
          Privacy
        </Link>
        <Link
          href="/cookies"
          className="border-b border-transparent hover:border-neutral-500"
        >
          Cookies
        </Link>
        <Link
          href="/terms"
          className="border-b border-transparent hover:border-neutral-500"
        >
          Terms
        </Link>
        <Link href="#" className="termly-display-preferences">
          Manage Consent
        </Link>
      </nav>

      {/* Legal */}
      <p className="mb-1">© 2025 Jialin Yang. All rights reserved.</p>
      <p>Minibunn Planner™ by Jialin Yang.</p>
    </footer>
  );
}

export default Footer;
