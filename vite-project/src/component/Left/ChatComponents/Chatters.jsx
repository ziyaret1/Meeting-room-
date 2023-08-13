

const Chatters = ({bgImage, officialIcon, text, voiceIcon}) => {
  return (
    <div className="chatters" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="left-rigt">
            <div className="leftSide">
                {officialIcon ? <img src={officialIcon} alt="" /> : ""}
                <span>{text}</span>
            </div>
                {
                voiceIcon ? <img className="rightSide" src={voiceIcon} alt="" /> : ""
                }
            </div>
        </div>
  )
}

export default Chatters