/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

import {isMobile} from 'react-device-detect';
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from '@react-three/fiber'; 

import Smoke from '../components/models/Smoke';
import Waves from '../components/models/Waves';
import { Instance, Instances, OrbitControls, PerformanceMonitor, Stage, Stats } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Perf } from 'r3f-perf'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';
import CameraRig from '../components/scenes/Camera/CameraRig';

export default function Home() {
  const [dpr, setDpr] = useState(1)

  return (
    <div>
      <Head>
        <title>Haile Lakew | Portfolio</title>
        <meta name="description" content="Personal Porfolio App" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
      </Head>

    <div 
      className='h-[500vh]' 
      id="main">
      <motion.div
        className='order-1 fixed  hidden md:block'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: .75 } }}
        style={{ height: '100vh', width: '100vw', top: 0, left: 0, boxShadow: '0 0 200px rgba(0,0,0,0.2) inset'}}
      >
        <Canvas 
          style={{background: 'black'}}
          dpr={dpr}
          camera={{ 
            // position: [0, 2, 5], 
            // rotation: [0, Math.PI/2,  Math.PI/2], 
            fov: isMobile ? 80 : 45 
          }}>
            <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}  flipflops={3} onFallback={() => setDpr(1)}>
                <ambientLight/>
                <directionalLight/>
 
                <Smoke/>

                <OrbitControls/>
    

            </PerformanceMonitor>
        </Canvas>
      </motion.div>

    </div>


      <footer></footer>
    </div>
  )
}
