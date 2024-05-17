import { memo } from "react"
import { motion } from "framer-motion";


const Maincontainer = memo(function MainContainer({children}){
    return <motion.div id="main-container">
        {children}
    </motion.div>
})

export default Maincontainer;