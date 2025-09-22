import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutateAsync: toggleStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isUpdating, toggleStatus };
}
