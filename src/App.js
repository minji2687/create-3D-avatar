import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import { OrbitControls } from "@react-three/drei";
import ModelAni from "./components/Standing-jump";

function App() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      {/* <ModelAni position={[0.025, -0.9, 0]} /> */}
      <Model position={[0.025, -0.9, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
