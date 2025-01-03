
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Recommendations() {
    const init = [
        {title: `" Poopy Head " - Manager`, message: "Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum"},
        {title: `" Stinky Clavicle " - Guy at Pizza Shop`, message: "Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum"},
        {title: `" Guy grows on You " - Wife`, message: "Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum"},
        {title: "Yeeter", message: "Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum"},
        {title: "Yooter", message: "Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum. Balibity Blah Blah, Blim Blah, Bim Bum"}
      ]
  
      const [recommendations, setRecommendations] = useState(init)
      const [recommendationCounter, setRecommendationsCounter] = useState(0);
  
      useEffect(()=>{
        const interval = setInterval(() => {
          if(recommendationCounter >= 4) {
            setRecommendationsCounter(0);
          } else {
            setRecommendationsCounter(recommendationCounter + 1);
          }
  
          let currentOrder = recommendations;
          let recommendation = currentOrder.pop();
          currentOrder.unshift(recommendation)
          setRecommendations(currentOrder)
        }, 8000);
  
        return () => clearInterval(interval);
      }, [recommendations, recommendationCounter])

      
    return (
        <>
          <div className="font-light text-left p-5">Skills</div>
          <AnimatePresence initial={false}  className="h-[45%]">
            <Reorder.Group 
              className="flex flex-col text-left md:items-center max-h-[200px] md:max-h-[350px] overflow-scroll" 
              style={{WebkitMaskImage: 'linear-gradient(180deg, #000 70%, transparent)'}}
              axis="y"
              values={recommendations}
              onReorder={setRecommendations}>
              {
                recommendations.map((recommendation, index)=>{

                  return (index!==recommendations.length-1 && <Reorder.Item 
                    dragListener={false}
                    id={recommendation.title}
                    key={recommendation.title} 
                    value={recommendation.title}
                    className="p-5 text-sm md:w-full"
                    initial={{ opacity: 0 }} 
                    whileInView={{  opacity: 1 }}
                    exit={{opacity: 0}}
                    transition={{ duration: 1.2 }}
                    >
                    <span className="font-black "> {recommendation.title}<br/></span>
                    <span className="font-light">{recommendation.message}</span>
                  </Reorder.Item>)
                })
              }

            </Reorder.Group>
          </AnimatePresence>
        </>
    )
}