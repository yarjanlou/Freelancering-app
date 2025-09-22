import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { isPending, mutateAsync: ChangeStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["project", id] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isPending, ChangeStatus };
}
