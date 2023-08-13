import Participants from "./Participants"
import Natura from '../../../assets/left-images/Natura.png'
import Cecile from '../../../assets/left-images/Cecile.png'
import Nico from '../../../assets/left-images/Nico.png'
import Bryan from '../../../assets/left-images/Bryan.png'
import Azzura from '../../../assets/left-images/Azzura.png'
import Ahmed from '../../../assets/left-images/Ahmed.png'
import blueMicrofone from '../../../assets/left-images/Microfone.png'
import silenceIcon from '../../../assets/right-images/silenceIconRight.png'
import cameraIcon from '../../../assets/right-images/cameraIconRight.png'
import stilMicrofone from '../../../assets/right-images/microfoneIconRight.png'


const ParticipiantCont = () => {
  return (
    <div className="ParticipiantCont">
        <div className="people">
        <Participants image={Natura} name="Natura" text="Project Manager" span="Host" icon1={silenceIcon} icon2={cameraIcon}/>
        <Participants image={Cecile} name="Cecile" text="Software Developer" span="Co-Host" icon1={blueMicrofone} icon2={cameraIcon}/>
        <Participants image={Nico} name="Nico" text="UI/UX Designer" icon1={stilMicrofone} icon2={cameraIcon}/>
        <Participants image={Bryan} name="Bryan" text="Ethical Hacker" icon1={silenceIcon} icon2={cameraIcon}/>
        <Participants image={Azzura} name="Azzura" text="Team Leader" icon1={silenceIcon} icon2={cameraIcon}/>
        <Participants image={Ahmed} name="Ahmed" text="UI/UX Designer" icon1={silenceIcon} icon2={cameraIcon}/>
        </div>
    <div className="footerSpans">
        <span>Invite</span>
        <span>Mute all</span>
        <span>Ask to start video</span>
    </div>
    
    </div>
  )
}

export default ParticipiantCont
