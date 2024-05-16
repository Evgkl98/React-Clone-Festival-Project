import { memo } from "react"


const Maincontainer = memo(function MainContainer({children}){
    return <div id="main-container">
        {children}
    </div>
})

export default Maincontainer;