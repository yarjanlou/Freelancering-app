import { useSearchParams } from "react-router-dom";

function Filter({ filterField, label, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>{label}</span>
      <div className="flex items-center rounded-xl border border-secondary-200 bg-secondary-0">
        {options.map(({ label, value }) => {
          const isActive = value === currentValue;
          return (
            <button
              onClick={() => handleClick(value)}
              key={value}
              disabled={isActive}
              className={`whitespace-nowrap rounded-lg px-4 py-3 font-bold transition-all duration-300 ${isActive ? "bg-primary-900 text-white" : ""}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
