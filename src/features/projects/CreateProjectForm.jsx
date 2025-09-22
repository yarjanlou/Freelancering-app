import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const {
    _id: editId,
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  const isEditSession = Boolean(editId);

  let editValues = {};
  if (isEditSession) {
    editValues = { title, description, budget, category: category._id };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories, categoriesPending } = useCategories();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="عنوان"
          name="title"
          register={register}
          validationSchema={{
            required: "این فیلد الزامی است",
            minLength: {
              value: 10,
              message: "طول عنوان باید بیش از ۱۰ کاراکتر باشد",
            },
          }}
          required
          errors={errors}
        />
        <InputField
          label="توضیحات"
          name="description"
          register={register}
          errors={errors}
        />
        <InputField
          label="بودجه"
          name="budget"
          register={register}
          validationSchema={{
            required: "این فیلد الزامی است",
            min: {
              value: 100000,
              message: `کف مبلغ بودجه ${toPersianNumbersWithComma(100000)} تومان است`,
            },
          }}
          required
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          name="category"
          options={categories}
          register={register}
          required
        />
        <div>
          <label className="mb-2 block text-secondary-800">تگ ها</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField date={date} setDate={setDate} label="ددلاین" />
        {isCreating || isEditing ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProjectForm;
