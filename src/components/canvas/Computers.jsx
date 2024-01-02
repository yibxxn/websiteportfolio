import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ( { isMobile }) => {
  const computer = useGLTF('./my_room/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="blue" />
      <pointLight intensity={5} position={[0, -2.5, 0]} />
      <spotLight
        position={[-20, 60, 10]}
        angle={0.5}  
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale = {isMobile? 0.15 : 0.2}
        position={isMobile ? [0, -3, 0.45 ]: [0, -3.5, 0.5]}
        rotation={[0, 0, 0]}
      />
      </mesh>
  )
}

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas 
      frameLoop = "demand"
      shadows
      camera={ { position: [20, 3, 5], fov:30 }}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false} 
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            />
            <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
  )
} 

export default ComputerCanvas;