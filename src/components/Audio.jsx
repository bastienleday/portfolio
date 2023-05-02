import AudioPlayer from 'react-h5-audio-player';
import ReactAudioPlayer from "react-audio-player";
import {useEffect, useRef, useState} from "react";





export default function Audio({hover}) {



    const audio = useRef()
    const audioButton = useRef()


       const handleClick = () => {
             if(audio.current.paused){
                 audio.current.play()
                 audio.current.volume = 0.2



                }else{
                    audio.current.pause()

                }

             }





        return (
            <>

                <audio src="/sound/suspens.mp3" controls loop ref={audio}  ></audio>
                <button className={`playAudio ${hover}`} onClick={handleClick} ref={audioButton}>
                    <img src={"/sound/pause.png"} alt="play" className="audioLogo" />
                </button>

            </>

        )
}