import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync: changeStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isPending, changeStatus };
}
