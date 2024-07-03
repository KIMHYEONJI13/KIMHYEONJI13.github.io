import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Portfolio from "./pages/Portfolio";
import Skill from "./pages/Skill";
import Introduce from "./pages/Introduce";
import Contact from "./pages/Contact";
import Etc from "./pages/Etc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/etc" element={<Etc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
