import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Account from "./Components/pages/Account";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import ProtectedRoutes from "./Components/ProtectedRoutes";

import { AuthContextProvider } from "./context/AuthContext";

import "./index.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
