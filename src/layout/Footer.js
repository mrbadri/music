import { Link } from "react-router-dom";
import { Instagram, Link1 } from "iconsax-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-SteelBlue-950 shadow dark:bg-gray-900 mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/">
              <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/tnt.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                  TNTMOOZIK
                </span>
              </a>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <Link to="/AboutUs">
                <li>
                  <a href="#" className=" me-4 md:me-6">
                    AboutUs
                  </a>
                </li>
              </Link>
              <Link to="">
                <li>
                  <a href="#" className="">
                    Contact us
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex justify-center gap-5">
            <a href="https://www.instagram.com/erfan_kasheff/" target="_blank">
              <Instagram size="40" color="#9dbfdc" />
            </a>

            <a href="https://t.me/TNTMOOZIK" target="_blank">
              <Link1 size="40" color="#9dbfdc" />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/">
              <a className="hover:underline">TNTMOOZIK™</a>
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
