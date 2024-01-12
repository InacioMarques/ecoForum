// import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";

import ProtectedRoutes from "./utils/protectedRoutes";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ContactUs from "./Pages/ContactUs";
import EcoForum from "./Pages/EcoForum";
import Dashboard from "./Pages/Dashboard";
import AddForum from "./Pages/AddForum";
import Forum from "./Pages/Forums";
import Profile from "./Pages/Profile";
import Save from "./Pages/Save";
import SearchForum from "./Pages/SearchForum";
import Store from "./Pages/Storee";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import Feed from "./Pages/Feed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/ecoforum" element={<EcoForum />} />
            <Route path="/ecoforum/add" element={<AddForum />} />
            <Route path="/ecoforum/search" element={<SearchForum />} />
            <Route path="/ecoforum/forum" element={<Forum />} />
            <Route path="/ecoforum/profile" element={<Profile />} />
            <Route path="/ecoforum/save" element={<Save />} />
            <Route path="/ecoforum/store" element={<Store />} />
            <Route path="/dashboard/posts" element={<Posts />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/feedback" element={<Feed />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
