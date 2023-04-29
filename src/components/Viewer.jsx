import {useEffect, useRef, useState} from "react";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

import { Bloom, Glitch, EffectComposer} from "@react-three/postprocessing";
import ReactAudioPlayer from 'react-audio-player';



export default function Viewer() {


    const model = useLoader(GLTFLoader, '/keyboard2.glb')

    const cubeRef = useRef()

    const[color, setColor] = useState('rgb(50, 50, 92)')


    useFrame(() => {
        cubeRef.current.rotation.y += 0.01
        cubeRef.current.rotation.x += 0.01

    })

    const onClick = (e) => {
        console.log(e.target)
        setColor('rgb(255, 255, 255)')
    }



    return (
<>

    <EffectComposer>
<Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.1, 0.2]} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} opacity={2} />





    </EffectComposer>

                <directionalLight  position={[-3, 4, 1]} color={'rgb(50, 50, 92)'} intensity={15}/>

    <mesh>
        <sphereBufferGeometry args={[0.6]}/>
        <meshStandardMaterial color={'rgb(81, 204, 232)'} emissive={color} toneMapped={false} emissiveIntensity={1.5} />
    </mesh>


                < primitive object={model.scene} position={[0, 0, 0]} scale={0.5} ref={cubeRef} onCLick={onClick}/>


</>


    )
}