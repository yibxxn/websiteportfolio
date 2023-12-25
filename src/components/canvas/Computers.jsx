import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./my_room/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.77}
      groundColor="blue" />
      <pointLight intensity={4} position={[0, -2.5, 0]} />
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
        scale = {0.18}
        position={[0, -3.5, 1]}
        rotation={[0, 0, 0]}
      />
      </mesh>
  )
}

const ComputerCanvas = () => {
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
            <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
  )
} 

export default ComputerCanvas;