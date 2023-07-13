import Image from "next/image";
import Button from "./Button";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tech: string;
  live: string;
  front: string;
  back: string;
  full: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tech,
  live,
  front,
  back,
  full,
}) => {
  return (
    <div className="w-full bg-dark text-light p-10 rounded-xl">
      {/* CONTENTS */}
      <div>
        {/* IMAGE */}
        <div className="w-full h-[25rem] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        {/* TEXT CONTENTS */}
        <div className="mt-10 flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-light/60">{description}</p>
          {/* TECH */}
          <div className="flex gap-3 flex-wrap">
            {tech.split(", ").map((tag: string, i: number) => (
              <span key={i} className="uppercase bg-light/20 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          {/* LINKS */}
          <div className="flex flex-wrap gap-3">
            <Button href={live} target="_blank" color="light">
              Live Demo
            </Button>
            {front && (
              <Button href={front} target="_blank" color="light">
                Front-End
              </Button>
            )}
            {back && (
              <Button href={back} target="_blank" color="light">
                Back-End
              </Button>
            )}
            {full && (
              <Button href={full} target="_blank" color="light">
                Full-Stack
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;