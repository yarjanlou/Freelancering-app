import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  const { user = {} } = data || {};
  return { isPending, user };
}
