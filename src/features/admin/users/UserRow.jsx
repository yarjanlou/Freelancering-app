import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import ChangeUserStatus from "./ChangeUserStatus";

const userStatus = [
  {
    label: "رد شده",
    style: "badge--danger",
  },
  {
    label: "در انتظار برسی",
    style: "badge--secondary",
  },
  {
    label: "تایید شده",
    style: "badge--success",
  },
];

const userRole = {
  ADMIN: "ادمین",
  OWNER: "کارفرما",
  FREELANCER: "فریلنسر",
};

function UserRow({
  user: { _id, name = "", email = "", phoneNumber, role, status },
  index,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(name, 30)}</td>
      <td>{truncateText(email, 30)}</td>
      <td>{toPersianNumbers(phoneNumber)}</td>
      <td>{userRole[role]}</td>
      <td>
        <span className={`badge ${userStatus[status].style}`}>
          {userStatus[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setIsOpen(true)}>تغییر وضعیت کاربر</button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus
            userId={_id}
            status={status}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
