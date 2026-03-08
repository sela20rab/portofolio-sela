import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Service from "./components/Service";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectCategory from "./components/ProjectCategory";
import Documents from "./components/Documents";
import Certification from "./components/Certification";
import LetsTalk from "./components/LetsTalk";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/projects/:category" element={<ProjectCategory />} />
      <Route path="/documents" element={<Documents />} />
        <Route path="/certification" element={<Certification />} />
       <Route path="/letstalk" element={<LetsTalk />} /> 
        
    </Routes>
  );
}