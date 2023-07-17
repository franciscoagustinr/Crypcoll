import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  PresentationControls,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";

import { Suspense, useRef } from "react";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { Lights } from "../Scene/Lights";
import { Diamonds } from "../Scene/Diamonds";
import { Hero } from "../Hero";
import { About } from "../About";
import { Contact } from "../Contact";
import { Services } from "../Services";
import { TimeLine } from "../TimeLine";
import { Numbers } from "../Numbers";
import { FAQ } from "../FAQ";
import { Footer } from "../Footer";

export const Experience = () => {
  const { viewport } = useThree();
  const widthScreen = window.innerWidth;
  const sprk = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 100;
    const y = (mouse.y * viewport.height) / 100;
    sprk.current.rotation.x = y / Math.PI;
    sprk.current.rotation.y = x / Math.PI;
  });

  return (
    <>
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={0.2} />
      </EffectComposer>
      <Lights />

      {/* <ScrollControls damping={0.5} pages={5.3}> */}
      <ScrollControls damping={0.5} pages={widthScreen <= 768 ? 7.4 : 5.3}>
        <Scroll>
          <Float
            rotationIntensity={0.3}
            floatIntensity={0.4}
            speed={3}
            floatingRange={[-0.5, 0.7]}
          >
            <PresentationControls
              enabled={true}
              global={false}
              cursor={true}
              snap={true}
              speed={1}
              zoom={1}
              rotation={[0, 0, 0]}
              polar={[-0.2, 0.5]}
              azimuth={[-0.2, 0.5]}
              config={{ mass: 2, tension: 350, friction: 10 }}
            >
              <Suspense fallback={null}>
                <Diamonds />
              </Suspense>
            </PresentationControls>
          </Float>
        </Scroll>

        <Scroll html>
          <div className="relative px-14 sm:px-2">
            <Hero />
            <Numbers />
            <About />
            <Services />
            <TimeLine />
            <FAQ />
            <Contact />

            <Footer />
          </div>
        </Scroll>
      </ScrollControls>

      <Sparkles
        ref={sprk}
        count={200}
        position={[0.1, 0, 4]}
        speed={0.03}
        size={0.2}
        scale={2.3}
      />

      <Sparkles
        count={100}
        position={[0.1, 0, 4]}
        speed={0.1}
        size={0.15}
        scale={2}
      />
    </>
  );
};
