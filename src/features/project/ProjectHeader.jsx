import { HiArrowCircleRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveback";

function ProjectHeader({ project = {} }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-5">
      <HiArrowCircleRight
        className="h-6 w-6 cursor-pointer text-primary-800"
        onClick={moveBack}
      />
      <h1 className="text-xl font-black text-secondary-700">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
