import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import HomePageRevenda from "./pages/homeRevenda";
import Maquina from "./pages/maquina";
import ResetPass from "./pages/resetPass";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão para Login */}
        <Route path="/" element={<Login />} />
        <Route path="/resetPass" element={<ResetPass />} />

        {/* Rota para Home Revenda */}
        <Route path="/homeRevenda" element={<HomePageRevenda />} />
        <Route path="/maquina" element={<Maquina />} />

      </Routes>
    </Router>
  );
}

export default App;
