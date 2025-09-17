import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-base-content py-6 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Justine. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex gap-10 mt-4 md:mt-0">
          <a
            href="https://github.com/Jabame731"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              src="/logos/githubz.png"
              alt="GitHub"
              width={60}
              height={60}
              className="hover:opacity-80"
            />
            <span className="mt-2 text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/justine-taglucop-391005238/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center"
          >
            <Image
              src="/logos/linkedin.svg"
              alt="LinkedIn"
              width={60}
              height={60}
              className="hover:opacity-80"
            />
            <span className="mt-2 text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
