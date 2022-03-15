import React from "react";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div class="bg-lm-bg dark:bg-dm-bg min-h-screen ">
      <Header />
      <main className="p-6 mx-auto max-w-7xl ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
