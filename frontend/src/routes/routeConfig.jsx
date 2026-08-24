import Landing from "@/pages/Landing/Landing";
import HowItWorks from "@/pages/HowItWorks/HowItWorks";

export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
];
