import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import PropertyTypePage from "./src/pages/PropertyTypePage";
import PropertyListPage from "./src/pages/PropertyListPage";
import PropertyAgentPage from "./src/pages/PropertyAgentPage";
import ContactPage from "./src/pages/ContactPage";
import BookNow from "./src/pages/BookNow";
import Login from "./src/pages/LoginPage";
import SignUp from "./src/pages/SignupPage";
import Bookings from "./src/pages/Bookings";
import Admin from "./src/pages/Admin/Admin";
import AdminBooking from "./src/pages/Admin/AdminBookings";
import AdminContact from "./src/pages/Admin/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vehicle types" element={<PropertyTypePage />} />
          <Route path="/vehicle list" element={<PropertyListPage />} />
          <Route path="/vehicle agent" element={<PropertyAgentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/bookings" element={<Bookings />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/adminbookings" element={<AdminBooking />} />
          <Route path="/admincontact" element={<AdminContact />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
