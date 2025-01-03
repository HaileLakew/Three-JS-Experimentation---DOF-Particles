import { motion } from "framer-motion";

export function SmoothTextEffect ({text}) {
    return (
        <motion.div className="flex flex-wrap">
            {
                text.split(' ').map((token, index)=>{
                    return (
                        <motion.div 
                            className="mx-[2px]"
                            key={index}
                            initial={{ opacity: 0, y: '100%' }} 
                            whileInView={{ opacity: 1, y:0, transition: {delay: .5 + index/20, duration: .7}}}
                            >
                                {`${token} `}
                        </motion.div>
                    )
                })   
            }
        </motion.div>
    )
}