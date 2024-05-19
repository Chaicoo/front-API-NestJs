/* eslint-disable react-refresh/only-export-components */
import { Navigate, useNavigate } from "react-router-dom";
import Welcome from "@/pages/welcome/Welcome";
import Home from "@/pages/home/Home";
import { useAuth } from "@/contexts/useAuth";

export const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/inicio", element: <PrivateRoute element={<Home />} /> },
];

interface PrivateRouteProps {
  element: React.ReactElement;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-20">
      {element}
    </div>
  );
}
