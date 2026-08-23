import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routeConfig";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
