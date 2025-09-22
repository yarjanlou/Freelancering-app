import { toPersianNumbers } from "../utils/toPersianNumbers";

function Stat({ icon, color, title, value }) {
  const colors = {
    primary: "!bg-primary-100 text-primary-700",
    green: "!bg-green-100 text-green-700",
    yellow: "!bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="flex items-center gap-x-6 rounded-xl bg-secondary-0 p-4">
      <div
        className={`flex aspect-square items-center justify-center rounded-full bg-primary-100 p-4 ${colors[color]}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-base font-bold text-secondary-600 md:text-lg">
          {title}
        </p>
        <span className="text-base md:text-lg font-bold text-secondary-700">
          {toPersianNumbers(value)}
        </span>
      </div>
    </div>
  );
}

export default Stat;
