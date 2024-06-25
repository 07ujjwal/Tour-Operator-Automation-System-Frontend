import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import AuthPage from "./pages/auth/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ToursPage from "./pages/ToursPage/ToursPage";
import AboutUs from "./pages/About/AboutUs";
import TourDetail from "./components/TourDetail/TourDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="login" element={<AuthPage />} />
        <Route
          path="tours"
          element={
            <ProtectedRoute>
              <ToursPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="tour/:id"
          element={
            <ProtectedRoute>
              <TourDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
