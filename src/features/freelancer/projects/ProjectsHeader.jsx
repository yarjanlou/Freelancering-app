import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropdown from "../../../ui/FilterDropdown";

const sortOptions = [
  { value: "", label: "مرتب سازی" },
  { value: "earliest", label: "قدیمی ترین" },
  { value: "latest", label: "جدید ترین" },
];
const statusOptions = [
  { value: "ALL", label: "همه" },
  { value: "OPEN", label: "باز" },
  { value: "CLOSED", label: "بسته" },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="mb-10 flex flex-col items-start gap-y-8 text-secondary-700 xl:flex-row xl:items-center xl:justify-between">
      <h1 className="text-xl font-bold">لیست پروژه ها</h1>
      <div className="hidden items-center gap-x-3 md:flex">
        <Filter filterField="status" label="وضعیت" options={statusOptions} />
        <FilterDropdown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
