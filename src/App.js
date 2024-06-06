import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Layout from "./layouts/Layout";
import Contact from "./pages/Contact";
import Introduce from "./pages/Introduce";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Etc from "./pages/Etc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="skill" element={<Skill />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="etc" element={<Etc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
