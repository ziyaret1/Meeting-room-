

const Chatbox = ({ image, text, time, mesColor, message}) => {
  return (
    <div className="fullChatbox">
    <div className="chatbox">
      <div className="textCont">
        <img src={image} alt="" />
        <p>{text}</p>
      </div>
      <div className="textTime">
        <p>{time}</p>
      </div>
    </div>
    <div className="message1">
        <p style={{backgroundColor:`${mesColor}`}}>
            <span>{message}</span>
        </p>
    </div>
</div>

  );
};

export default Chatbox;
