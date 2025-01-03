import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useScroll, useTransform, useMotionValue } from "framer-motion"

export default function CameraRig () {
    const {camera, clock} = useThree()
    const { scrollYProgress } = useScroll();

    const laptopScenePositiony = useTransform( scrollYProgress, [0, .26], [2, 4.3])
    const laptopScenePositionz = useTransform( scrollYProgress, [0, .26], [5, 8])
    const laptopSceneRotationX = useTransform( scrollYProgress, [0, .26], [-Math.PI/10, 0])
    const laptopSceneLightIntensity = useTransform( scrollYProgress, [0, .26], [.25, 0])
    // const laptopSceneAmbientIntensity = useTransform( scrollYProgress, [0, .35, .6], [.25, 0, .15])

    const directionalLight = useRef();
    const ambientLight = useRef();

    const innerWidth = useMotionValue(window?.innerWidth)
    const fov = useTransform(innerWidth, [0, 1600], [120, 45])

    const THREEblack = new THREE.Color(0xFFFFFF);

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

    useFrame((state, delta) => {

        console.log(scrollYProgress.current);

        const { camera, scene } = state;

        if ( scrollYProgress.current < .47 ) {
            camera.position.set(0, laptopScenePositiony.get(), laptopScenePositionz.get())
            camera.rotation.x = laptopSceneRotationX.get();
            directionalLight.current.intensity = laptopSceneLightIntensity.get();

        } else if ( scrollYProgress.current < .75 ) {
            camera.position.set(.5, THREE.MathUtils.damp(camera.position.y, 5, 1, delta), THREE.MathUtils.damp(camera.position.z, 15, 1, delta))
            camera.rotation.x = THREE.MathUtils.damp(camera.rotation.x, 0, 1, delta);
 
            directionalLight.current.intensity = THREE.MathUtils.damp(directionalLight.current.intensity, .15, 10, delta);
            ambientLight.current.intensity = THREE.MathUtils.damp(ambientLight.current.intensity, 2, 1, delta);

        } else if ( scrollYProgress.current < .8  ) {

            camera.position.set(.5, THREE.MathUtils.damp(camera.position.y, 5, 1, delta), THREE.MathUtils.damp(camera.position.z, 3, 1, delta))
            camera.rotation.x = THREE.MathUtils.damp(camera.rotation.x, 0, 1, delta);
            directionalLight.current.intensity = THREE.MathUtils.damp(directionalLight.current.intensity, .15, 10, delta);
            directionalLight.current.visible = true

            ambientLight.current.intensity = THREE.MathUtils.damp(ambientLight.current.intensity, .5, 1, delta);
        } else if ( scrollYProgress.current < 2500 ) {

            camera.position.set(0, THREE.MathUtils.damp(camera.position.y, 5, 2, delta), THREE.MathUtils.damp(camera.position.z, 1.2, 2, delta))
            camera.rotation.x = THREE.MathUtils.damp(camera.rotation.x, 0, 1, delta);

            directionalLight.current.visible = false

            ambientLight.current.intensity = THREE.MathUtils.damp(ambientLight.current.intensity, 1, 1, delta);
        }
    });


    return(
        <>
            <directionalLight ref={directionalLight} position={[0, 15, -15]} intensity={0}/>
            <ambientLight ref={ambientLight}/>
        </>
    )
}
