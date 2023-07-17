export const Lights = () => {
  return (
    <>
      <directionalLight
        position={[0, 5, 0]}
        intensity={20}
        color={"lightblue"}
      />

      <spotLight
        color={[0, 1, 1]}
        intensity={200}
        angle={1}
        penumbra={0.5}
        position={[0, 10, 4]}
        castShadow
      />

      <spotLight
        color={"violet"}
        intensity={100}
        angle={1}
        penumbra={0.9}
        position={[5, 10, 4]}
      />

      <pointLight position={[0, -1, 0]} intensity={2} color={"violet"} />
      <pointLight position={[5.5, 2, 0]} intensity={2} color={"yellow"} />
      <pointLight position={[3, 0, 0]} intensity={10} color={"white"} />
    </>
  );
};
