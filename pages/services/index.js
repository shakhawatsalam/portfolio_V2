// icons

//service Data

// components
import ServiceSlider from "../../components/ServiceSlider.js";
import Bulb from "../../components/Bulb.js";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text  */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'>
              My Services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              debitis iste eum! A quas cum facilis,
            </motion.p>
          </div>

          {/* slider  */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
