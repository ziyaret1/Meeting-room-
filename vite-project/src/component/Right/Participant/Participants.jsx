

const Participants = ({image, name, text, span, icon1, icon2}) => {
  return (
    <div className="Participants">
        <div className="person">
            <img className="personImg" src={ image} alt="" />
            <div className="personInfo">
                <h6>{name}</h6>
                <p> {text}</p>
            </div>
        </div>
        <div className="chatIcons">
            {
                span ? <span>{span}</span> : ""
            }
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
        </div>
    </div>
  )
}

export default Participants