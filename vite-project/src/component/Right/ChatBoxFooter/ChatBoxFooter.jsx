import Buttons from '../../Buttons'
import rightArrow from '../../../assets/left-images/rightArrow.png' 
import attach from '../../../assets/right-images/attachIcon.png'
import smile from '../../../assets/right-images/smileIconChatbox.png'
import sendIcoon from '../../../assets/right-images/sendIccon.png'

const ChatBoxFooter = () => {
  return (
    <div className="ChatBoxFooter">
        <div className="icon-cont">
        <Buttons text2="Everyone" image={rightArrow}/>
        <div className="icons">
            <img src={attach} alt="" />
            <img src={smile} alt="" />
        </div>
        </div>
        <form action="">
            <input className="input" type="text"  placeHolder="Message to everyone..."/>
             <Buttons image={sendIcoon} color="#2D8CFF"/>
        </form>
    </div>
  )
}

export default ChatBoxFooter