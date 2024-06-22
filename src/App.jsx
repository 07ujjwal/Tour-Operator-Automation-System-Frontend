import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import AuthPage from "./pages/auth/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ToursPage from "./pages/ToursPage/ToursPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<AuthPage />} />
        <Route
          path="tours"
          element={
            <ProtectedRoute>
              <ToursPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
