import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth/authPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
