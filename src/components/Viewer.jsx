import react, {useRef} from "react";
import {Canvas, useFrame, useThree, useLoader} from '@react-three/fiber'
import { GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

import { SSR, Bloom, Glitch, EffectComposer} from "@react-three/postprocessing";
import { useControls } from 'leva';

export default function Viewer() {

    const model = useLoader(GLTFLoader, 'src/divers/3d/keyboard2.glb')

    const cubeRef = useRef()


    useFrame(() => {
        cubeRef.current.rotation.y += 0.01
        cubeRef.current.rotation.x += 0.01

    })



    return (
<>

    <EffectComposer>
<Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.1, 0.2]} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} opacity={2} />





    </EffectComposer>

                <directionalLight  position={[-3, 4, 1]} color={'rgb(50, 50, 92)'} intensity={10}/>

    <mesh>
        <sphereBufferGeometry args={[0.6]}/>
        <meshStandardMaterial color={'rgb(81, 204, 232)'} emissive={'rgb(81, 204, 232)'} toneMapped={false} emissiveIntensity={1.5} />
    </mesh>


                < primitive object={model.scene} position={[0, 0, 0]} scale={0.5} ref={cubeRef}/>


</>


    )
}