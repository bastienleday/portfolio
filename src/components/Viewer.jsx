import {useEffect, useRef, useState} from "react";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

import { Bloom, Glitch, EffectComposer} from "@react-three/postprocessing";
import ReactAudioPlayer from 'react-audio-player';



export default function Viewer({backgroundChange}) {
    console.log(backgroundChange)


    const model = useLoader(GLTFLoader, '/keyboard2.glb')

    const cubeRef = useRef()


    const[color, setColor] = useState('rgb(81, 204, 232)')
    const [lightColor, setLightColor] = useState('rgb(50, 50, 92)')
    const [intensity, setIntensity] = useState(15)


    useFrame(() => {
        cubeRef.current.rotation.y += 0.01
        cubeRef.current.rotation.x += 0.01

    })

    const onClick = (e) => {
        console.log(e.target)
        if (color === 'rgb(81, 204, 232)' && lightColor === 'rgb(50, 50, 92)' && intensity === 15) {
            setColor('rgb(71, 235, 21)')
            setLightColor('rgb(160, 194, 151)')
            setIntensity(1)
            backgroundChange("/pictures/fondHautVert.jpg", "/pictures/fondBasVert.jpg")
        } else {
            setColor('rgb(81, 204, 232)')
            setLightColor('rgb(50, 50, 92)')
            setIntensity(15)
            backgroundChange("/pictures/fondHaut.jpg", "/pictures/fondBas.jpg")
        }


    }



    return (
<>

    <EffectComposer>
<Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.1, 0.2]} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} opacity={2} />





    </EffectComposer>

                <directionalLight  position={[-3, 4, 1]} color={lightColor} intensity={intensity}/>

    <mesh onClick={onClick}>
        <sphereBufferGeometry args={[0.6]}/>
        <meshStandardMaterial color={'rgb(81, 204, 232)'} emissive={color} toneMapped={false} emissiveIntensity={1.5} />
    </mesh>


                < primitive object={model.scene} position={[0, 0, 0]} scale={0.5} ref={cubeRef} />


</>


    )
}