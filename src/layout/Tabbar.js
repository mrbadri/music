import 'flowbite';
import { Link } from "react-router-dom";
import { Home, Profile, MusicDashboard, MusicLibrary2 } from "iconsax-react";
import { Navbar } from 'flowbite-react';


export default function Tabbar() {
  return (
    <>
      {/* <nav className="border-gray-200 fixed w-full top-0 z-40 bg-opacity-75 bg-pale-sky-900 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/tnt.png" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                TNTMOOZIK
              </span>
            </a>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={"hidden w-full md:block md:w-auto"}
            id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-pale-sky-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link to="/">
                  <a
                    className="block py-2 px-3 md:p-0 text-white bg-pale-sky-700 rounded md:bg-transparent md:text-SteelBlue-300 md:dark:text-SteelBlue-300 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Artist">
                  <a

                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-SteelBlue-300 md:hover:bg-transparent md:border-0 md:hover:text-SteelBlue-300 dark:text-white md:dark:hover:text-SteelBlue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Artist
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Allbums">
                  <a
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-SteelBlue-300 md:hover:bg-transparent md:border-0 md:hover:text-SteelBlue-300 dark:text-white md:dark:hover:text-SteelBlue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Albums
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Allsong">
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-SteelBlue-300 md:hover:bg-transparent md:border-0 md:hover:text-SteelBlue-300 dark:text-white md:dark:hover:text-SteelBlue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Allsong
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Navbar  className='border-gray-200 fixed w-full top-0 z-40 bg-opacity-75 bg-pale-sky-900 dark:bg-gray-800 dark:border-gray-700' >
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img src="/tnt.png" className="mr-3 h-6 sm:h-9" alt="logo web site" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">TNTMOOZIK</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" className='text-white'>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/Artist" className='text-white hover:text-pale-sky-600'>
          Artist
          </Navbar.Link>
          <Navbar.Link as={Link} to="/Allbums" className='text-white hover:text-pale-sky-600'>Albums</Navbar.Link>
          <Navbar.Link className='text-white hover:text-pale-sky-600' as={Link} to="/Allsong">Allsong</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>



    </>
  );
}
