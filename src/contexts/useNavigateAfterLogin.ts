import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useNavigateAfterLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/inicio");
    }
  }, [isAuthenticated, navigate]);
};
