import "./App.css";
import { Experience } from "./COMPONENTS/Scene/Experience";

import { NavBar } from "./COMPONENTS/NavBar";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

function App() {
  return (
    <>
      <NavBar />
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
