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
import Landing from './Landing/Home'

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="attendees" element={<Attendees />} />
        <Route path="badgegeneration" element={<BadgeGeneration />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="workshops/:id" element={<WorkshopDetails />} />
        <Route path="registration" element={<Registration />} />
        <Route path="checkin" element={<CheckIn />} />
      </Route>
      <Route path="/" element={<Landing />} />
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
