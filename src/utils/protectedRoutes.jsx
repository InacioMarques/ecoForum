import { Outlet, Navigate, useLocation } from "react-router-dom";
import { checkAdminRole } from "./firebase";

const ProtectedRoutes = () => {
  const isAdmin = checkAdminRole();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isAuthenticated = !!currentUser;
  const location = useLocation();

  if (!isAuthenticated) {
    // Allow non-logged-in users to access specific routes
    const allowedRoutes = ["/", "/ecoforum", "/ecoforum/*"];
    if (!allowedRoutes.some((route) => location.pathname.startsWith(route))) {
      // Redirect non-logged-in users to the login page for other routes
      return <Navigate to="/login" />;
    }
  }

  if (isAdmin) {
    // Allow admin access to all routes
    return <Outlet />;
  } else {
    // Redirect non-admin users trying to access the dashboard or its subpages to the ecoforum page
    const dashboardRoutes = ["/dashboard", "/dashboard/*"];
    if (dashboardRoutes.some((route) => location.pathname.startsWith(route))) {
      return <Navigate to="/ecoforum" />;
    }

    // Allow non-admin users to access all other routes
    return <Outlet />;
  }
};

export default ProtectedRoutes;
