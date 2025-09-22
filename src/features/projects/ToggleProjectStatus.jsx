import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status, _id: id } = project;
  const enabled = status === "OPEN" ? true : false;
  const { isUpdating, toggleStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatus({ id, data: { status: newStatus } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader width="40" height="40" />
      ) : (
        <Toggle
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
