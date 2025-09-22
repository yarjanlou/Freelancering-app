import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const proposalStatus = [
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

function ProposalRow({
  proposal: { description, duration, price, status },
  index,
}) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{toPersianNumbers(duration)}</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${proposalStatus[status].style}`}>
          {proposalStatus[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
