import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Loader from "../../ui/Loader";
import useOwnerProjects from "../projects/useOwnerProjects";
import Stat from "../../ui/Stat";

function Stats() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loader />;

  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0,
  );

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Stat
        icon={<HiOutlineViewGrid className="h-16 w-16" />}
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
      />
      <Stat
        icon={<HiOutlineCurrencyDollar className="h-16 w-16" />}
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
      />
      <Stat
        icon={<HiOutlineCollection className="h-16 w-16" />}
        color="yellow"
        title="درخواست ها"
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
