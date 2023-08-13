


const ChatBoxSecond = ({ image, text, time, mesColor, message, docIcon}) => {
  return (
    <div className="fullChatbox">
    <div className="chatbox">
        <div className="textTime">
        <p>{time}</p>
      </div>
      <div className="textCont">
        <p>{text}</p>
        <img src={image} alt="" />
      </div>
    </div>
    <div className="message2">
        
        <p style={{backgroundColor:`${mesColor}`}}>

        {
        docIcon ? <img src={docIcon} alt="" /> : ""
        }
            <span>{message}</span>

        </p>
    </div>
</div>
  )
}

export default ChatBoxSecond