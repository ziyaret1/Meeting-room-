import ChatboxCont from "./Right/ChatBox.jsx/chatboxCont"
import ChatBoxFooter from "./Right/ChatBoxFooter/ChatBoxFooter"
import HeaderChat from "./Right/HeadOfRight/HeaderChat"
import ParticipiantCont from "./Right/Participant/participiantCont"



const Right = () => {
  return (
    <div className='Right'>
        <HeaderChat/>
        <ParticipiantCont/>
        <ChatboxCont/>
        <ChatBoxFooter/>
    </div>
  )
}

export default Right