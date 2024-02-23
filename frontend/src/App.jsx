import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Navbar from "./components/Navbar";
import CategoryView from "./pages/CategoryView";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <div
      className={classNames([
        isDarkTheme ? "dark bg-[#121212]" : "light bg-[#fff]",
        "flex flex-col w-[100vw] min-h-[100vh] dark:text-gray-50 text-gray-800",
      ])}
    >
      <nav className="sticky top-0 z-50">
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </nav>
      <div className="h-full w-full z-10 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:title" element={<CategoryView />} />
          <Route
            path="/dashboard"
            element={<Dashboard setIsDarkTheme={setIsDarkTheme} />}
          />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
