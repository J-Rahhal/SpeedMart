import { Routes, Route } from "react-router-dom";
import Template from "./Template";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
      </Route>
    </Routes>
  );
}

export default App;
