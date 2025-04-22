import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BaseComponent from "./components/ProtectedRoute";
import routes from "./config/routesConfig";
import { Suspense } from "react";
function App() {
  return (
    <>
      <ToastContainer position="bottom-center" autoClose={3000} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<BaseComponent />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
