import { RiAdminFill, RiLoginBoxFill, RiLoginBoxLine } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-secondary-0 text-secondary-800">
      <div className="container space-y-8 pt-10">
        <h1 className="text-xl font-bold">صفحه اصلی</h1>
        <div className="space-y-4">
          <HomeLink to="/auth" text="ثبت نام یا ورود به حساب کاربری">
            <RiLoginBoxFill className="size-[18px]" />
          </HomeLink>
          <HomeLink to="/admin" text="پنل ادمین">
            <RiAdminFill className="size-[18px]" />
          </HomeLink>
          <HomeLink to="/owner" text="پنل کارفرما">
            <FaUserCheck className="size-[18px]" />
          </HomeLink>
          <HomeLink to="/freelancer" text="پنل فریلنسر">
            <SiFreelancer className="size-[18px]" />
          </HomeLink>
        </div>
      </div>
    </div>
  );
}

export default Home;

function HomeLink({ to, text, children }) {
  return (
    <Link
      to={to}
      className="flex w-full items-center gap-x-4 rounded-lg bg-secondary-200 px-5 py-3 text-secondary-900 transition-all duration-300 hover:bg-primary-100/80 hover:text-primary-900 lg:w-1/3"
    >
      {children}
      <span className="text-sm font-bold">{text}</span>
    </Link>
  );
}
