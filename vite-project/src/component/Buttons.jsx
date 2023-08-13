

const Buttons = ({text2, image, text, image2, color, textColor}) => {
  return (
    <button  style={{backgroundColor:`${color}`}}>
      
            <img src={image} alt="" />
            {
        text2 ? <span>{text2}</span> : ""
      }
            
            <span style={{color:`${textColor}`}}>{text}</span>
            {
                image2 ? <img src={image2} alt="" /> : ""
            }
        </button>
  )
}

export default Buttons