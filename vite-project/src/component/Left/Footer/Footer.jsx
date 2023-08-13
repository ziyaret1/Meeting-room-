import Buttons from "../../Buttons"
import speaker from '../../../assets/left-images/Speaker.png'
import voiceIcon from '../../../assets/left-images/VoiceVolumeIcon.png'
import microfone from '../../../assets/left-images/Microfone.png'
import upArrow from '../../../assets/left-images/upArrow.png'
import camera from '../../../assets/left-images/cameraIcon.png'
import tvIcon from '../../../assets/left-images/tvIcon.png'
import blueRecord from '../../../assets/left-images/blueRecordIcon.png'
import viewGrid from '../../../assets/left-images/fourViewIcon.png'
import lineIcon from '../../../assets/left-images/lineIcon.png';
import handIcon from '../../../assets/left-images/handIcon.png'
import smileIcon from '../../../assets/left-images/smileIcon.png'
import whiteUpArrow from '../../../assets/left-images/whiteUpArrow.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftBtn">
      <Buttons image={speaker} image2={voiceIcon}/>
      </div>
      <div className="middleBtn">
      <Buttons image={microfone} image2={upArrow}/>
      <Buttons image={camera} image2={upArrow}/>
      <Buttons image={tvIcon} image2={upArrow}/>
      <Buttons image={blueRecord} image2={whiteUpArrow} color="#2D8CFF"/>
      <Buttons image={viewGrid}/>
      <div className="line"><img src={lineIcon} alt="" /></div>
      <Buttons image={handIcon} image2={upArrow}/>
      <Buttons image={smileIcon} image2={upArrow}/>
      </div>
      <div className="rightBtn">
      <Buttons text="Leave Meeting" color="#EF4444"/>
      </div>
    </div>
  )
}

export default Footer