import React from "react";

import * as THREE from "three";
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

import { Model } from "./model.tsx";
import { Controls } from "./controls.tsx";

function Thing({ vertices }) {
  return (
    <group>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh
        onClick={e => console.log("click")}
        onPointerOver={e => console.log("hover")}
        onPointerOut={e => console.log("unhover")}
      >
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color="blue"
          opacity={0.5}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function Blender() {
  const cam = { position: [0, 0, 15] };
  return (
    <Canvas
      height="100%"
      width="100%"
      camera={cam}
      onCreated={({ gl }) => (
        (gl.shadowMap.enabled = true),
        (gl.shadowMap.type = THREE.PCFSoftShadowMap)
      )}
    >
      >
      <pointLight color="white" intensity={0.8} position={[0, 0, 15]} />
      <Model name="cubey" />
      <Controls />
    </Canvas>
  );
}
