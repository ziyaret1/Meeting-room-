import ChatboxBorder from "./ChatboxBorder"
import Chatbox from "./chatbox"
import manPhoto from '../../../assets/right-images/menPhoto.png'
import boyPhoto from '../../../assets/right-images/boyPhoto.png'
import ChatBoxSecond from "./ChatBoxSecond"
import docIcon from '../../../assets/right-images/documentIconRight.png'

const ChatboxCont = () => {
  return (
    <>
    <ChatboxBorder/>
    <div className="ChatboxCont">
        <Chatbox image={manPhoto} text="From Marry to Everyone" time="05:32 PM" message="Hi there, how are you?" mesColor="#37415180"/>
        <ChatBoxSecond time="05:32 PM" text="From you to Everyone" image={boyPhoto} message="I am great, Thanks! How are you?" mesColor="#2D8CFF1A"/>
        <Chatbox image={manPhoto} text="From Marry to Everyone" time="05:32 PM" message="Fine thanks. Can you send me my newest workout schedule?" mesColor="#37415180"/>
        <ChatBoxSecond time="05:32 PM" text="From you to Everyone" image={boyPhoto} docIcon={docIcon} message="workout schedule.xlsx" mesColor="#2D8CFF1A"/>
    </div>
    </>
  )
}

export default ChatboxCont