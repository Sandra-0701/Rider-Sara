import { createBrowserRouter } from "react-router-dom";
import RiderDashboard from "../pages/admin/rider/Dashboard";
import AdminMainDashboard from "../pages/admin/Dashboard";
import AdminProfilePage from "../pages/admin/AdminProfile";
import StoreSettingsPage from "../pages/admin/StoreSetting";
import SaraSidebar from "../pages/admin/sara/Sidebar";
import SaraDashboard from "../pages/admin/sara/UserPage";
import UsersPage from "../pages/admin/sara/UserPage";
import AgentsPage from "../pages/admin/sara/AgentPage";
import Profile from "../pages/admin/sara/Profile";
import AllOwners from "../pages/admin/sara/shopowner/AllOwner";


const router = createBrowserRouter([
  {
    path: "/admin/rider",
    element: <RiderDashboard/>,
  },
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
    path: "/sara-dashboard",
    element: <SaraSidebar/>,
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
    path: "/sara/dashboard",
    element: <SaraDashboard/>,
  },
  {
    path: "/sara/shop-owners",
    element: <AllOwners/>,
  },

  

]);

export default router;
