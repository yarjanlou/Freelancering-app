import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Select value={value} onChange={handleChange} options={options} />
    </div>
  );
}

export default FilterDropdown;
