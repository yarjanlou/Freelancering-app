import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Loader from "../../ui/Loader";
import Stat from "../../ui/Stat";
import useProposals from "../proposals/useProposals";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Stat
        icon={<HiOutlineViewGrid className="h-16 w-16" />}
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
      />
      <Stat
        icon={<HiOutlineCollection className="h-16 w-16" />}
        color="green"
        title="درخواست های تایید شده"
        value={acceptedProposals?.length}
      />
      <Stat
        icon={<HiOutlineCurrencyDollar className="h-16 w-16" />}
        color="yellow"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
