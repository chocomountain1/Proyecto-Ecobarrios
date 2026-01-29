import { Routes, Route } from "react-router-dom";
import Explorador from "./views/Explorador";
import Formulario from "./views/Formulario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Explorador />} />
      <Route path="/forms" element={<Formulario />} />
    </Routes>
  );
}

export default App;