type Props = {
  duration: string;
  role: string;
  title: string;
  description: string;
};

const ExperienceCard = ({ title, role, duration, description }: Props) => {
  return (
    <div className="max-w-sm overflow-hidden bg-primary-light rounded-lg">
      <div className="px-6 pt-4">
        <span className="inline-block bg-light-2 rounded-full px-3 py-1 text-sm font-semibold text-primary-dark mr-2 mb-2">
          {duration}
        </span>
      </div>
      <div className="px-6 pt-1 pb-4">
        <div className="font-bold text-xl mb-2 text-secondary-extralight">
          {role}
        </div>
        <div className="font-semibold text-light-2">{title}</div>
        <div className="border-y border-dotted my-2 text-light-3" />
        <p className="text-base text-light-1 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
