import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isPending, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && !isAuthenticated) navigate("/auth");
    if (!isPending && !isAuthorized) {
      toast.error("شما به این صفحه دسترسی ندارید.");
      navigate("/");
    }
    if (!isPending && !isVerified) {
      toast.error("پروفایل شما تایید نشده است.");
      navigate("/");
    }
  }, [isPending, isAuthenticated, isAuthorized, isVerified, navigate]);

  if (isPending)
    return (
      <div className="flex h-screen items-center justify-center bg-secondary-100">
        <Loader />
      </div>
    );
  if (isAuthenticated && isAuthorized && isVerified) return children;
}

export default ProtectedRoute;
