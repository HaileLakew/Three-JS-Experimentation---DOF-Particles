import { motion, useScroll, useTransform } from "framer-motion";

export function Quote()  {
    const { scrollYProgress } = useScroll();
    const parralaxOpacity = useTransform( scrollYProgress, [.12, .23], [0, 1]);
    
    return(
        <motion.div 
        className="font-normal lg:text-3xl leading-relaxed text-center overflow-hidden"
        style={{ opacity: parralaxOpacity}}
      >
        <motion.span initial={{ opacity: 0}}  whileInView={{ opacity: 1, transition: {delay: 2, duration: 2}}}> {`"`}</motion.span>
        <span>{`Lorem`}</span>
        <motion.span initial={{ opacity: 0 }}  whileInView={{ opacity: 1, transition: {delay: 2, duration: 2}}}>{`,`}</motion.span>
        <motion.span initial={{ opacity: 0 }}  whileInView={{ opacity: 1, transition: {delay: 2, duration: 2}}}>{` Ipsum "`}</motion.span>
        <motion.span initial={{ opacity: 0 }}  whileInView={{ opacity: 1, transition: {delay: 2.5, duration: 2}}}>{` - Some Guy`}</motion.span>
      </motion.div>
    )
}