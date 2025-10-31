import React from "react";
import Navbar from "./components/Navbar";
import AllSections from "./sections/AllSections";

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <AllSections />
    </div>
  );
};

export default App;
