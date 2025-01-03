/* eslint-disable @next/next/no-img-element */


import { motion, useScroll, useTransform } from "framer-motion";
import { Greetings } from "./components/Greetings";
import { Recommendations } from "./components/Recommendations";
import { Experience } from "./components/Experience";
import { Biography } from "./components/Biography";
import { Work } from "./components/Work";
import { Quote } from "./components/Quote";

export function IntroductionSection() {
    const { scrollYProgress } = useScroll();
    const experienceOpacity = useTransform( scrollYProgress, [.42, .46], [1, 0])
    const parralaxOpacity = useTransform( scrollYProgress, [.12, .23], [0, 1])


    return (
      <div className="order-2">
        <div className="h-screen w-screen flex justify-center items-center ">
          <Greetings/>
        </div>

        <motion.div 
          className='h-screen md:h-[200vh] w-screen flex flex-col yaga' 
          style={{ opacity: experienceOpacity}}>
            <div className="sticky top-16 flex flex-col justify-around">
              <div className="flex flex-col md:flex-row p-2 md:justify-between md:p-5 md:h-3/5">
                <motion.div 
                  className="order-2 md:order-1 md:w-1/3  relative flex flex-col justify-between"
                  style={{opacity: parralaxOpacity}}
                >
                  <Biography/>
                  <Experience/>
                </motion.div>

                <motion.div 
                  className="order-3 md:w-1/3  md:pl-[5%] md:text-center relative flex flex-col"
                  style={{opacity: parralaxOpacity}}>
                  <Recommendations/>
                </motion.div>
              </div>
              <div className="font-light flex flex-col justify-end">
                <Work/>
              </div>
            </div>
        </motion.div> 
      </div>
    );
  }



