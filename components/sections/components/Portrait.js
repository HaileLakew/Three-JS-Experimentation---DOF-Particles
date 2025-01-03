import { useSpring } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

export function Portrait() {
    const { scrollYProgress } = useScroll();
    const {scrollSpring} = useSpring(scrollYProgress);
    const parralax = useTransform( scrollSpring ? scrollSpring : scrollYProgress, [.11, .2], [0, 40])
    const mobileParralax = useTransform( scrollSpring ? scrollSpring : scrollYProgress, [.17, .2], ['50%', '-20%'])
    const parralaxOpacity = useTransform( scrollSpring ? scrollSpring : scrollYProgress, [.14, .2, .4], [0, 1, 0])
    const imageSize = useTransform( scrollSpring ? scrollSpring : scrollYProgress, [.10, .14, .4, .6], ['30%', '65%', '30%', '0%'])

    return(
        <>
            {/* <motion.div
                className="rounded-full h-[150px] w-[150px] bg-cover bg-[left_18%] m-5 md:hidden"
                alt="Picture of the author"
                initial={{ x: '50%' }} 
                whileInView={{ x: '-20%' }} 
                style={{ backgroundImage: 'url(/images/Haile.jpeg)'}}
                transition={{ delay: 2, duration: .8 }}
            />

            <motion.div
                className="hidden rounded-full bg-fixed bg-[size:73vh] h-[700px] w-[300px] bg-center md:relative md:block"
                alt="Picture of the author"
                transition={{ delay: .25, duration: 1.2 }}
                style={{ backgroundImage: 'url(/images/Haile.jpeg)', width: imageSize}}
            />

            <motion.div 
                className="hidden lg:block rounded-full md:h-[700px] md:w-[250px] border-8 md:absolute"
                style={{x: parralax, y: parralax, opacity: parralaxOpacity}}
            /> */}
        </>
    )
}