import { createBrowserRouter } from "react-router-dom";
import AdminMainDashboard from "../pages/admin/Dashboard";
import AdminProfilePage from "../pages/admin/AdminProfile";
import StoreSettingsPage from "../pages/admin/StoreSetting";
import UsersPage from "../pages/admin/sara/UserPage";
import AgentsPage from "../pages/admin/sara/AgentPage";
import Profile from "../pages/admin/sara/Profile";
import AllOwners from "../pages/admin/sara/shopowner/AllOwner";
import SaraNavbar from "../pages/admin/sara/SaraNavbar";
import Approval from "../pages/admin/sara/shopowner/Approval";
import Order from "../pages/admin/sara/Orders/Order";
import StoreSetting from "../pages/admin/sara/StoreSettings";
import DashboardPage from "../pages/admin/rider/DashboardPage";




const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminMainDashboard/>,
  },
  {
    path: "/admin-profile",
    element: <AdminProfilePage/>,
  },
  {
    path: "/admin-settings",
    element: <StoreSettingsPage/>,
  },
  {
    path: "/sara/users",
    element: <UsersPage/>,
  },
  {
    path: "/sara/agents",
    element: <AgentsPage/>,
  },
  {
    path: "/sara/profile",
    element: <Profile/>,
  },
  {
    path: "/admin/sara",
    element: <SaraNavbar/>,
  },
  {
    path: "/sara/shop-owners",
    element: <AllOwners/>,
  },
  {
    path: "/sara/shop-owners/approvals",
    element: <Approval/>,
  },
  {
    path: "/sara/orders",
    element: <Order/>,
  },
  {
    path: "/sara/store-settings",
    element: <StoreSetting/>,
  },
  {
    path: "/admin/rider",
    element: <DashboardPage/>,
  },

  

]);

export default router;
