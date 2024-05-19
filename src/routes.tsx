/* eslint-disable react-refresh/only-export-components */
import { Navigate, useNavigate } from "react-router-dom";
import Welcome from "@/pages/welcome/Welcome";
import Home from "@/pages/home/Home";

export const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/inicio", element: <PrivateRoute element={<Home />} /> },
];

interface PrivateRouteProps {
  element: React.ReactElement;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const auth = true;
  const navigate = useNavigate();

  const handleLogout = () => {
    // auth.logout();
    navigate("/");
  };

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-10 mt-20">
      {element}
    </div>
  );
}
