import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";

const projectStatus = {
  OPEN: { label: "باز", style: "badge--success" },
  CLOSED: { label: "بسته", style: "badge--danger" },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].style}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setIsOpen(true)}>
          <MdAssignmentAdd className="h-5 w-5 text-primary-900" />
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={`درخواست انجام ${title}`}
        >
          <CreateProposalForm
            onClose={() => setIsOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
