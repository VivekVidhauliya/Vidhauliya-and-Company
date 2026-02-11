import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./Components/navbar";
import { Footer } from "./Components/footer";

import { Home } from "./Pages/home";
import { About } from "./Pages/about";
import { Machines } from "./Pages/machines";
import { Contact } from "./Pages/contact";

import AdminLogin from "./admin/AdminLoginn";
import Dashboard from "./admin/Dashboard";
import PrivateRoute from "./admin/PrivateRoute";

/* Hide Navbar/Footer on admin pages */
function Layout({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Login */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}
