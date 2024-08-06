import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Attendees from "./pages/Attendees";
import BadgeGeneration from "./pages/BadgeGeneration";
import Workshops from "./pages/Workshops";
import WorkshopDetails from "./pages/WorkshopDetails";
import Registration from "./pages/Registration";
import CheckIn from "./pages/CheckIn";
import FirstRegistration from "./pages/FirstRegistration";
import Checkout from './pages/Checkout';
import Navbar from './pages/Navbar';
import Programs from './pages/Programs';
import Participants from './pages/Participants';
import Advert from './pages/Advert';
import Footer from './pages/Footer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="event/attendees" element={<Attendees />} />
        <Route path="event/badgegeneration" element={<BadgeGeneration />} />
        <Route path="event/workshops" element={<Workshops />} />
        <Route path="event/workshops/:id" element={<WorkshopDetails />} />
        <Route path="event/registration" element={<Registration />} />
        <Route path="event/checkin" element={<CheckIn />} />
      </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="event/firstregistration" element={<FirstRegistration />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/advert" element={<Advert />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </Router>
);

export default App;
