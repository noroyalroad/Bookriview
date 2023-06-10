import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Bookdetail from "./components/views/bookdetail/Bookdetail";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Boardwriteform from "./components/views/Writepage/Boardwriteform";
import BookDetail from "./components/views/bookdetail2/BookDetail";
import Booklist from "./components/views/bookdetail2/Booklist";
import Book from "./components/views/bookdetail2/Book";

// import Auth from "./hoc/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/write" element={<Boardwriteform />} />
        {/* <Route exact path="/book/detail" element={<Bookdetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
