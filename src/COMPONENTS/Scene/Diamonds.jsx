import React from "react";
import { Diamond } from "../../MODELS/Diamond";

export const Diamonds = () => {
  return (
    <>
      <mesh position={[1.5, -2.5, 0]} rotation-z={Math.PI * 2.1}>
        <Diamond scale={1.7} />
      </mesh>

      <mesh position={[4.2, 2, 0]} rotation-z={-6.6}>
        <Diamond scale={1.2} />
      </mesh>

      <mesh position={[1.3, 0.5, 0]} rotation-z={Math.PI / 4.5}>
        <Diamond scale={1} />
      </mesh>

      <mesh position={[-4.3, -2, 1.5]} rotation-z={Math.PI * -2.1}>
        <Diamond scale={1} />
      </mesh>

      <mesh position={[6, -2, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={1} />
      </mesh>

      <mesh position={[6, 5, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={0.7} />
      </mesh>
      <mesh
        position={[6, -5, -3]}
        rotation-z={Math.PI * -2.1}
        rotation-x={Math.PI * 0.8}
      >
        <Diamond scale={0.9} />
      </mesh>

      <mesh position={[-3, -9, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={0.4} />
      </mesh>

      <mesh position={[-2.2, -7, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={0.9} />
      </mesh>

      <mesh
        position={[4, -11, -2]}
        rotation-y={-Math.PI * 4.1}
        rotation-x={Math.PI * 1.2}
      >
        <Diamond scale={2} />
      </mesh>

      <mesh position={[-4, -12, -1]} rotation-z={-Math.PI * 4.1}>
        <Diamond scale={0.5} />
      </mesh>

      <mesh position={[3, -14, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={0.9} />
      </mesh>

      <mesh position={[-2, -17, -3]} rotation-z={Math.PI * 4.1}>
        <Diamond scale={0.9} />
      </mesh>

      <mesh
        position={[0, -20, -3]}
        rotation-z={Math.PI * 4.1}
        rotation-x={Math.PI * 1.2}
      >
        <Diamond scale={1.2} />
      </mesh>

      <mesh
        position={[5, -25, -1]}
        rotation-y={Math.PI * 4.1}
        rotation-x={Math.PI * 1.2}
      >
        <Diamond scale={0.6} />
      </mesh>

      <mesh position={[5, -27, -1]} rotation-y={Math.PI * 4.1}>
        <Diamond scale={0.6} />
      </mesh>
      <mesh
        position={[-3, -26.6, 2]}
        rotation-y={Math.PI * 4.1}
        rotation-z={Math.PI * 0.2}
      >
        <Diamond scale={0.2} />
      </mesh>
      <mesh
        position={[1, -29, -2]}
        rotation-y={Math.PI * 4.1}
        rotation-x={Math.PI * 1.2}
        rotation-z={Math.PI * 1.7}
      >
        <Diamond scale={0.6} />
      </mesh>
      <mesh position={[5, -31, -4]} rotation-z={Math.PI * 1.7}>
        <Diamond scale={1.2} />
      </mesh>
    </>
  );
};
