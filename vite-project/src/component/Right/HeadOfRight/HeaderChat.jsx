import participant from '../../../assets/right-images/participantIcon.png'
import appIcon from '../../../assets/right-images/appIcon.png'
import Buttons from "../../Buttons"
import redRecordIcon from '../../../assets/right-images/redRecordCircle.png'
const HeaderChat = () => {
  return (
    <div className="headerChat">
        <div className="buttonBorder">
        <Buttons image={participant} text="Participants" color="#2D8CFF" textColor="white"/>
        <Buttons image={appIcon} text="Apps" image2={redRecordIcon} color="transparent"/>
        </div>
    </div>
  )
}

export default HeaderChat