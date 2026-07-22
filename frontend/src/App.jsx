import "./App.css";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Knowledge from "./pages/Knowledge";
import Quiz from "./pages/Quiz";
import RoadSigns from "./pages/RoadSigns";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/roadsigns" element={<RoadSigns />} />
      </Routes>
    </Layout>
  );
}

export default App;