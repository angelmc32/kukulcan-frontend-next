import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/kukulcan.png";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 flex min-h-[56px] items-center justify-between bg-primary-500">
      <div className="ml-4 flex cursor-pointer items-center md:ml-6">
        <Link
          href="/"
          className="flex items-center text-xl font-medium text-white"
          style={{
            textShadow:
              "-1px -1px 0 #A82440, 1px -1px 0 #A82440, -1px 1px 0 #A82440, 1px 1px 0 #A82440",
          }}
        >
          <Image
            alt="Kukulcan: The Feathered Snake God"
            className="mr-4 w-[40px]"
            src={logo}
          />
          kukulcan
        </Link>
      </div>
      <span
        className="mr-4 flex w-[40px] cursor-pointer items-center justify-center md:hidden"
        onClick={toggleMobileMenu}
      >
        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </span>

      <ul
        className={`${
          !isMenuOpen
            ? "top-[-200px] z-[-1] opacity-0"
            : "top-[55px] bg-blue-500 opacity-100 md:bg-primary-500"
        } absolute w-full list-none pl-6 transition-all duration-500 ease-in md:static md:z-auto md:mr-4 md:flex md:w-auto md:items-center md:pl-0 md:opacity-100`}
      >
        {NAV_LINKS.map((navLink) =>
          !navLink.isButton ? (
            <li className="mx-4 my-6 md:my-0">
              <Link
                href={navLink.route}
                className={
                  currentRoute === navLink.route
                    ? "text-md font-medium text-white underline decoration-secondary-500 decoration-4 underline-offset-4 duration-500"
                    : "text-md font-medium text-white"
                }
                onClick={toggleMobileMenu}
              >
                {navLink.text}
              </Link>
            </li>
          ) : (
            <li className="mx-4">
              <Link href={navLink.route} onClick={toggleMobileMenu}>
                <button className="text-md mb-6 rounded bg-secondary-500 px-4 py-1 font-medium text-white duration-500 hover:bg-red-400 md:mb-0">
                  {navLink.text}
                </button>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

const NAV_LINKS = [
  {
    text: "Eventos",
    isButton: false,
    route: "/eventos",
  },
  {
    text: "Comunidades",
    isButton: false,
    route: "/comunidades",
  },
  {
    text: "Entrar",
    isButton: true,
    route: "/ingresar",
  },
];
