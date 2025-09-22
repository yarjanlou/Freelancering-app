import { HiCollection, HiHome, HiOutlineViewGrid } from "react-icons/hi";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import Header from "../../ui/Header";
import { Outlet } from "react-router-dom";
import DropdownMenu from "../../ui/DropdownMenu";

const links = [
  { to: "dashboard", label: "داشبورد", icon: <HiHome /> },
  { to: "proposals", label: "درخواست ها", icon: <HiCollection /> },
  { to: "projects", label: "پروژه ها", icon: <HiOutlineViewGrid /> },
];

function FreelancerLayout() {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[62px_1fr]">
      <Header>
        <DropdownMenu links={links} />
      </Header>
      <Sidebar>
        {links.map((link) => (
          <CustomNavlink key={link.to} to={link.to}>
            {link.icon}
            <span>{link.label}</span>
          </CustomNavlink>
        ))}
      </Sidebar>
      <div className="col-span-2 overflow-y-auto bg-secondary-100 p-8 lg:col-span-1">
        <div className="container lg:max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default FreelancerLayout;
