import React, { useRef } from "react";
import { useThree, useRender, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export function Controls(props) {
  const { camera } = useThree();
  const controls = useRef();

  useRender(({ camera }) => {
    controls.current && controls.current.update();
    camera.updateMatrixWorld();
  });
  return <orbitControls ref={controls} args={[camera]} {...props} />;
}
