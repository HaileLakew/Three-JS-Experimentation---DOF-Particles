import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
export function Experience() {
    return(
        <div className="flex md:flex-col ">
            <div className="flex w-screen md:flex-col md:w-full">
                <div className="w-full p-5 font-light">
                    Skills
                    <div className="md:p-5" >
                        {[
                            {name: 'Javascript', level: 4.5},
                            {name: 'React', level: 3.7},
                            {name: 'Weback/Bundling', level: 3},
                            {name: 'CI/CD', level: 4.5},
                            {name: 'Node/Bash', level: 3.5},
                            {name: 'Tailwind/Framer/CSS Frameworks', level: 3},
                        ].map((skill, index)=>{
                        return(
                            <motion.div key={index} className="py-1 font-black text-xs">
                                {skill.name}
                                <motion.div className="bg-black rounded-md p-1" 
                                    initial={{ width: 0 }} 
                                    whileInView={{  width: `${18*skill.level}%`}}
                                    transition={{ duration: 2 }}
                                    />
                            </motion.div>
                        )
                        })}
                    </div>
                </div>
            </div>
            <div className="h-[20vh] w-1/3 font-light p-5 md:w-2/3 flex-col items-end lg:items-start hidden md:flex"/>
            {/* <div className="h-1/2 w-1/3 font-light p-5 md:w-2/3 flex flex-col items-end lg:items-start md:hidden">
                Experience
                <div className="flex flex-wrap md:flex-nowrap w-1/2 md:w-full lg:w-full">
                    <span className="h-1/2 p-2 md:w-1/2 lg:w-1/3 lg:h-full text-xs">
                        <img  src="/images/HomeDepot.svg" alt="Picture of the author"/>
                    </span>
                    
                    <span className="h-1/2 p-2 md:w-1/2 lg:w-1/3 lg:h-full text-xs">
                        <img src="/images/NorthropGrumman.svg" alt="Picture of the author"/>
                    </span>

                    <span className="h-1/2 p-2 w-full md:w-1/2 lg:w-1/3 lg:h-full text-xs">
                        <img style={{filter: 'brightness(0);'}} src="/images/Argo.svg" alt="Picture of the author"/>
                    </span>

                    <span className="h-1/2 w-full md:w-1/2 lg:w-1/3 lg:h-full p-1 text-xs">
                        <img style={{ filter: 'grayscale(1)'}} src="/images/UTDallas.svg" alt="Picture of the author"/>
                    </span>
                </div>
            </div> */}
        </div>

    )
}