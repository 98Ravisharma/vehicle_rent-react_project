import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import PropertyTypePage from "./src/pages/PropertyTypePage";
import PropertyListPage from "./src/pages/PropertyListPage";
import PropertyAgentPage from "./src/pages/PropertyAgentPage";
import ContactPage from "./src/pages/ContactPage";
import BookNow from "./src/pages/BookNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vehicle types" element={<PropertyTypePage />} />
          <Route path="/vehicle list" element={<PropertyListPage />} />
          <Route path="/vehicle agent" element={<PropertyAgentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
