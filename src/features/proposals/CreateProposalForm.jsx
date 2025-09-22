import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import useCreateProposal from "./useCreateProposal";
import Loader from "../../ui/Loader";

function CreateProposalForm({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          reset();
          onClose();
        },
      },
    );
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="توضیحات"
          name="description"
          register={register}
          errors={errors}
          validationSchema={{ required: "وارد کردن توضیحات ضروری است." }}
          required
        />
        <InputField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          errors={errors}
          validationSchema={{ required: "مدت زمان را وارد کنید." }}
          required
        />
        <InputField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          errors={errors}
          validationSchema={{ required: "وارد کردن قیمت ضروری است." }}
          required
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full text-base" type="submit">
              ارسال
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposalForm;
