import { useMutation } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const { isPending: isCreating, mutateAsync: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isCreating, createProposal };
}
