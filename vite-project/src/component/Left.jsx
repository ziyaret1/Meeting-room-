import ChatContainer from "./Left/ChatComponents/ChatContainer"
import Footer from "./Left/Footer/Footer"
import Viewbar from "./Left/ViewBar/Viewbar"


const Left = () => {
  return (
    <div className="Left">
        <Viewbar/>
        <ChatContainer/>
        <Footer/>
    </div>
  )
}

export default Left
