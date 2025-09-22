import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../ui/Loader";
import { useParams } from "react-router-dom";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

function ChangeProposalStatus({ proposalId, onClose, status }) {
  const { id: projectId } = useParams();
  const { isPending, ChangeStatus } = useChangeProposalStatus();
  const { register, handleSubmit } = useForm({ defaultValues: { status } });

  const onSubmit = ({ status }) => {
    ChangeStatus(
      { proposalId, projectId, status },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          label="وضعیت درخواست"
          name="status"
          options={options}
          register={register}
          required
        />
        {isPending ? (
          <Loader width="50" height="50" />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
