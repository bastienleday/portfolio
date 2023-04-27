

import "./componentsCSS//Loader.css"
import ViewerLoader from "./ViewerLoader.jsx";
import { Canvas} from "@react-three/fiber";

export default function Loader() {
    return (
        <div className="loader">

            <h1 className="glitch" data-text="glitch"> Loading </h1>

            <div className="loaderCanvasContainer">
            <Canvas>

                <ViewerLoader />

            </Canvas>
            </div>


        </div>
    )
}