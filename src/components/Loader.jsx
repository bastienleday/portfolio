

import "./componentsCSS//Loader.css"
import ViewerLoader from "./ViewerLoader.jsx";
import { Canvas} from "@react-three/fiber";

export default function Loader() {
    return (
        <div className="loader">
<div className="loaderBack">
    Initialization
            <h1 className="glitch" data-text="glitch"> Initialization </h1>
</div>


            <div className="loaderCanvasContainer">
            <Canvas>

                <ViewerLoader />

            </Canvas>
            </div>


        </div>
    )
}