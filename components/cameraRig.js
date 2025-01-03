import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useScroll, useTransform, useMotionValue } from "framer-motion"

export default function CameraRig ({children}) {
    const {camera} = useThree()

    const directionalLight = useRef();
    const ambientLight = useRef();

    const innerWidth = useMotionValue(window?.innerWidth)
    const fov = useTransform(innerWidth, [0, 1200], [120, 45])

    window?.addEventListener("resize", ()=> {
        innerWidth.set(window?.innerWidth);
        camera.fov =  fov.get();
    });

    useEffect(()=>{
        if (window?.innerWidth >= 1200 ) {
            camera.fov = 45
        } else if (window?.innerWidth >= 992) {
            camera.fov = 45
        } else if (window?.innerWidth >= 768) {
            camera.fov =  60
        } else if(window?.innerWidth) {
            camera.fov = 80
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
            {children}
        </>
    )
}
