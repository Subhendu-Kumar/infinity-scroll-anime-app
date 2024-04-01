import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#4b3f52]">
      <p className="text-base font-bold text-white">
        &copy; {currentYear} Subhendu Kumar
      </p>
      <Image
        src="/./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-20">
        <a
          href="https://www.linkedin.com/in/subhendu-kumar-dutta/"
          target="_blank"
          className="font-semibold"
        >
          Linkedin
        </a>
        <a
          href="https://twitter.com/Subhendu_330"
          target="_blank"
          className="font-semibold"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
