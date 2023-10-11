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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 px-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
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
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-white">
            athu athu athu
          </div>
        </div>
        <hr className="mt-6 border-secondary-extralight sm:mx-auto dark:border-gray-700 lg:mt-4" />
      </div>
    </footer>
  );
};

export default Footer;
