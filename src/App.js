import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default App;
