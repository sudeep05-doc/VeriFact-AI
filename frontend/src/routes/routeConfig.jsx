import Landing from "@/pages/Landing/Landing";
import HowItWorks from "@/pages/HowItWorks/HowItWorks";
import Capabilities from "@/pages/Capabilities/Capabilities";
import Verify from "@/pages/Verify/Verify";

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
];
