import { useSpring } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothTextEffect } from "./subComponents/SmoothTextEffect";

export function Biography() {
    const { scrollYProgress } = useScroll();
    const {scrollSpring} = useSpring(scrollYProgress);
    const parralaxWidth = useTransform( scrollSpring ? scrollSpring : scrollYProgress, [.16, .23], ['0%', '100%'])

    return(
            <>
                <div className="p-5 md:hidden">
                    Haile Lakew 
                    <div className="font-normal md:p-5 overflow-hidden">
                        <div className="font-bold">Software Developer</div>
                        <SmoothTextEffect text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}/>
                    </div>
                </div>
    
                <div className="px-5 pt-10 font-light">
                    <span className="">Education</span>
                    <div className="font-bold md:p-5 h-[10vh]">
                        <SmoothTextEffect text="University of Texas at Dallas"/>
                        <SmoothTextEffect text="Computer Science B.S CUM LAUDE 2018"/>
                    </div>
                </div>
            </>
    )
}

