import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/admin/rider/DashboardPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import SaraDashboardPage from "../pages/admin/saras/DashboardPage";




const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminDashboard/>,
  },
  {
    path: "/admin/rider",
    element: <DashboardPage/>,
  },
  {
    path: "/admin/saras",
    element: <SaraDashboardPage/>,
  },


  

]);

export default router;
