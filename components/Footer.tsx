import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className=" w-full pb-1 pt-6 lg:pt-8 px-1">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href={"/"}
              className="text-2xl md:text-5xl text-primary-dark font-semibold px-4"
            >
              A.SHUKS
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 px-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://nextjs.org/docs"
                    className="hover:underline"
                  >
                    Next JS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="http://github.com/Atharvashuks"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/atharva-shukla-0718b920b/"
                    className="hover:underline"
                  >
                    linkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-secondary-extralight sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between bg-primary-light p-1">
          <span className="text-sm text-light-3 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              A.SHUKS™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-white"></div>
        </div>
        <hr className="mt-6 border-secondary-extralight sm:mx-auto dark:border-gray-700 lg:mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
