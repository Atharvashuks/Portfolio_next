import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  imgUrl: any;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: Props) => {
  return (
    <div>
      <div
        style={{
          background: `url('${imgUrl}')`,
          backgroundSize: "cover",
        }}
        className={`h-52 md:h-72 rounded-t-xl relative group `}
      >
        <div
          className="overlay items-center justify-center lg:hover:rounded-t-xl
            absolute top-0 left-0 w-full h-full bg-light-2 bg-opacity-4 hidden 
            lg:group-hover:flex group-hover:bg-opacity-60 transition-all duration-500 "
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-primary-extralight lg:hover:border-light-3 group/link"
          >
            <CodeBracketIcon
              className="h-10 w-10 text-primary-light absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2  cursor-pointer lg:group-hover/link:text-light-3"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-primary-extralight lg:hover:border-light-3 group/link"
          >
            <EyeIcon
              className="h-10 w-10 text-primary-light 
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer lg:group-hover/link:text-light-3"
            />
          </Link>
        </div>
      </div>
      <div className="text-light-3 rounded-b-xl mt-3 bg-primary-light py-6 px-4 ">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-secondary-extralight">{description}</p>
        <div
          className="lg:hidden grid grid-cols-2 flex overlay justify-items-center
            top-2 left-0 w-full h-full mt-3"
        >
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-white  group/link"
          >
            <CodeBracketIcon
              className="h-6 w-6 text-light-3 absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2  cursor-pointer lg:group-hover/link:text-light-3"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-white group/link"
          >
            <EyeIcon
              className="h-6 w-6 text-light-3 
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
