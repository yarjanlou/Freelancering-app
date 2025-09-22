import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mb-12 flex items-center justify-between gap-x-10">
      <h2 className="text-lg font-bold text-secondary-700">پروژه های شما</h2>
      <button
        className="btn btn--primary flex items-center gap-x-1 px-4 py-3 text-xs font-semibold lg:text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <TiPlus />
        <span>اضافه کردن پروژه جدید</span>
      </button>
      <Modal
        open={isModalOpen}
        title="اضافه کردن پروژه جدید"
        onClose={() => setIsModalOpen(false)}
      >
        <CreateProjectForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default ProjectsHeader;
