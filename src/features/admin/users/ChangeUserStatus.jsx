import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import Loader from "../../../ui/Loader";

const userStatus = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار برسی",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, status, onClose }) {
  const { handleSubmit, register } = useForm({ defaultValues: { status } });
  const { isPending, changeStatus } = useChangeUserStatus();

  const onSubmit = (data) => {
    changeStatus({ userId, data }, { onSuccess: () => onClose() });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label="وضعیت کاربر"
        name="status"
        options={userStatus}
        register={register}
      />

      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full text-base">
          اعمال
        </button>
      )}
    </form>
  );
}

export default ChangeUserStatus;
