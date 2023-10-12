import Link from "next/link";

type Props = {
  isLink: boolean;
  title: string;
  linkHref: string;
  children: React.ReactNode;
};

const IconComponent = ({ isLink, title, linkHref, children }: Props) => {
  return (
    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
      {children}
      {isLink ? (
        <Link
          href={linkHref}
          className="ml-4 text-md tracking-wide font-semibold w-40 text-light-2"
        >
          {title}
        </Link>
      ) : (
        <div className="ml-4 text-md tracking-wide font-semibold w-40 text-light-2">
          {title}
        </div>
      )}
    </div>
  );
};

export default IconComponent;
