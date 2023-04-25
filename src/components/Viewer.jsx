import react, {useRef} from "react";
import {Canvas, useFrame, useThree} from '@react-three/fiber'

export default function Viewer() {

    const cubeRef = useRef()

    useFrame(() => {
        cubeRef.current.rotation.y += 0.01
        cubeRef.current.rotation.x += 0.01

    })



    return (
<>

                <directionalLight position={[-3, 4, 1]} color={'rgb(90,90,190)'} intensity={0.8}/>
                <mesh ref= { cubeRef } rotation-y={Math.PI * 0.25} rotation-x={Math.PI * 0.25} scale={2}>
                    <boxGeometry/>
                    <meshStandardMaterial roughness={0.1} metalness={0.4} />

                </mesh>



</>


    )
}