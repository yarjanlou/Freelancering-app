import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="mb-8 text-xl font-bold text-secondary-800">
        لیست درخواست ها
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
