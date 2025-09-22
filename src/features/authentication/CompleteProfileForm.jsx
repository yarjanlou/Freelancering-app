import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      // if (user.status !== 2) {
      //   toast("پروفایل شما در انتظار برسی است");
      //   navigate("/");
      //   return;
      // }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <form
        className="w-full space-y-10 sm:max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "این فیلد الزامی است",
          }}
          required
          errors={errors}
        />
        <InputField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "این فیلد الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          required
          errors={errors}
        />
        <RadioInputGroup
          register={register}
          watch={watch}
          errors={errors}
          configs={{
            name: "role",
            validationSchema: {
              required: "انتخاب نقش ضروری است",
            },
            options: [
              { value: "OWNER", label: "کارفرما" },
              { value: "FREELANCER", label: "فریلنسر" },
            ],
          }}
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
