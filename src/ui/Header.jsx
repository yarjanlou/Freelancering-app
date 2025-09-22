import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header({ children }) {
  const { isPending } = useUser();
  return (
    <div className="col-span-2 border border-r-0 border-secondary-200 bg-secondary-0 px-8 py-4 lg:col-span-1 z-0">
      <div
        className={`container flex items-center justify-between gap-x-8 lg:justify-end xl:max-w-screen-lg ${isPending ? "opacity-50 blur-sm" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu>{children}</HeaderMenu>
      </div>
    </div>
  );
}

export default Header;
