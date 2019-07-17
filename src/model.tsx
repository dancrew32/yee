import React, { useMemo, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Model = ({ name }) => {
  const [obj, setObj] = useState();
  const path = "./models";
  //useMemo(() => new OBJLoader().load(`${name}.obj`, setObj), [name]);
  //TODO(DAN): figure out dynamic model require
  const a = require("./models/cubey.mtl");
  const b = require("./models/cubey.obj");
  useMemo(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(require(`${path}/${name}.mtl`), materials => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(require(`${path}/${name}.obj`), setObj);
    });
  }, [name]);

  return obj ? <primitive object={obj} /> : null;
};
