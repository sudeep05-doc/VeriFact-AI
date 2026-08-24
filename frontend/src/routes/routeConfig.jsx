import Landing from "@/pages/Landing/Landing";
import HowItWorks from "@/pages/HowItWorks/HowItWorks";
import Capabilities from "@/pages/Capabilities/Capabilities";
import Verify from "@/pages/Verify/Verify";
import Result from "@/pages/Result/Result";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Profile from "@/pages/Profile/Profile";
import GuestRoute from "@/components/auth/GuestRoute";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Dashboard from "@/pages/Dashboard/Dashboard";
import History from "@/pages/History/History";
import Settings from "@/pages/Settings/Settings";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/capabilities",
    element: <Capabilities />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <AuthenticatedLayout><Profile /></AuthenticatedLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AuthenticatedLayout><Dashboard /></AuthenticatedLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/history",
    element: <ProtectedRoute><AuthenticatedLayout><History /></AuthenticatedLayout></ProtectedRoute>,
  },
  {
    path: "/settings",
    element: <ProtectedRoute><AuthenticatedLayout><Settings /></AuthenticatedLayout></ProtectedRoute>,
  },
];
