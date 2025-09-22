import {
  HiOutlineCollection,
  HiOutlineViewGrid,
  HiUsers,
} from "react-icons/hi";
import useProjects from "../../hooks/useProjects";
import Loader from "../../ui/Loader";
import Stat from "../../ui/Stat";
import useProposals from "../proposals/useProposals";
import useUsers from "./useUsers";

function Stats() {
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: proposalsLoading, proposals } = useProposals();
  const { isLoading: usersLoading, users } = useUsers();

  if (projectsLoading || proposalsLoading || usersLoading) return <Loader />;

  const numOfUsers = users.length;
  const numOfProjects = projects.length;
  const numOfProposals = proposals.length;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Stat
        icon={<HiUsers className="h-16 w-16" />}
        color="primary"
        title="کاربر ها"
        value={numOfUsers}
      />
      <Stat
        icon={<HiOutlineViewGrid className="h-16 w-16" />}
        color="green"
        title="پروژه ها"
        value={numOfProjects}
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
