import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";

function Project() {
  const { project, isPending } = useProject();

  if (isPending) <Loader />;
  return (
    <div className="space-y-12">
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project?.proposals} />
    </div>
  );
}

export default Project;
