import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { user, isPending } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  const desiredRole = pathname.split("/").at(1).toUpperCase();
  if (user && user.role === desiredRole) isAuthorized = true;

  let isVerified = false;
  if (user && user.status === 2) isVerified = true;

  return { isPending, isAuthenticated, isAuthorized, isVerified };
}
