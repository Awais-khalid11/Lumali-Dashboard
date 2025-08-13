import { Navigate, Route, Routes } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/setting/Settings";
import UserManagment from "../pages/UserManagment";
import Subscriptions from "../pages/Subscriptions";
import StoriesManagment from "../pages/StoriesManagment";
import Notifications from "../pages/Notifications";
import LoginPage from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import CheckYourEmail from "../pages/auth/CheckYourEmail";
import NewPassword from "../pages/auth/NewPassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="user" element={<UserManagment />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="stories" element={<StoriesManagment />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
      {/*Auth Pages */}
      <Route path="login" element={<LoginPage />} />\
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="check-your-email" element={<CheckYourEmail />} />
      <Route path="new-password" element={<NewPassword />} />
    </Routes>
  );
};

export default Routers;
