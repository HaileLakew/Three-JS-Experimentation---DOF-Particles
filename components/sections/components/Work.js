import { motion, useScroll, useTransform } from "framer-motion";

export function Work()  {
    const { scrollYProgress } = useScroll();

    
    return(
        <div className="flex justify-center w-screen">
            <div className="flex flex-wrap md:flex-nowrap h-[7vh] w-full md:w-2/5 lg:w-1/5 mt-5">
                {['HomeDepot.svg', 'NorthropGrumman.svg', 'Argo.svg','UTDallas.svg'].map((icon, index)=>{
                    return(
                        <motion.div 
                            key={index}
                            className="md:mx-3 w-1/4 h-4/5 drop-shadow-md p-1"
                            initial={{opacity: 0}}
                            whileInView={{ opacity: 1, y:0, transition: {delay: 1 + index/10, duration: .7}}}
                            style={{ 
                                backgroundImage: `url(/images/${icon})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                filter: icon === 'Argo.svg' ? 'brightness(0)' : '',
                            }}/>
                    )
                })}
        </div>
      </div>
    )
}