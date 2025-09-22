function Sidebar({ children }) {
  return (
    <div className="row-span-2 row-start-1 hidden border border-secondary-200 bg-secondary-0 px-4 py-4 lg:block">
      <ul className="flex flex-col gap-y-2">{children}</ul>
    </div>
  );
}

export default Sidebar;
