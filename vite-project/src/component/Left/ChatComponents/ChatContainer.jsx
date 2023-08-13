import Chatters from "./Chatters"
import Pagination from "./Pagination"
import Natura from '../../../assets/left-images/Natura.png'
import Cecile from '../../../assets/left-images/Cecile.png'
import Nico from '../../../assets/left-images/Nico.png'
import Bryan from '../../../assets/left-images/Bryan.png'
import Azzura from '../../../assets/left-images/Azzura.png'
import Ahmed from '../../../assets/left-images/Ahmed.png'
import Merry from '../../../assets/left-images/Merry.png'
import Diana from '../../../assets/left-images/Diana.png'
import Lucas from '../../../assets/left-images/Lucas.png'
import Mike from '../../../assets/left-images/Mike.png'
import Daniel from '../../../assets/left-images/Daniel.png'
import Shandy from '../../../assets/left-images/Shandi.png'
import Stephany from '../../../assets/left-images/Stephany.png'
import Robert from '../../../assets/left-images/Robert.png'
import Lily from '../../../assets/left-images/Lily.png'
import Michael from '../../../assets/left-images/Michael.png'
import officialIcon from '../../../assets/left-images/chatNameIcon.png'
import chatVoice from '../../../assets/left-images/chatVoiceIcon.png'

const ChatContainer = () => {
  return ( 
    <div className="ChatContainer">
      <div className="chatter-card">
      <Chatters bgImage={Natura} officialIcon={officialIcon} text="Natura" voiceIcon={chatVoice}/>
      <Chatters bgImage={Cecile} officialIcon={officialIcon} text="Cecile"/>
      <Chatters bgImage={Nico} text="Nico"/>
      <Chatters bgImage={Bryan} text="Bryan" voiceIcon={chatVoice}/>
      <Chatters bgImage={Azzura} text="Azzura" voiceIcon={chatVoice}/>
      <Chatters bgImage={Ahmed} text="Ahmed" voiceIcon={chatVoice}/>
      <Chatters bgImage={Merry} text="Merry"/>
      <Chatters bgImage={Diana} text="Diana"/>
      <Chatters bgImage={Lucas} text="Lucas"/>
      <Chatters bgImage={Mike} text="Mike" voiceIcon={chatVoice}/>
      <Chatters bgImage={Daniel} text="Daniel" voiceIcon={chatVoice}/>
      <Chatters bgImage={Shandy} text="Shandy" voiceIcon={chatVoice}/>
      <Chatters bgImage={Stephany} text="Stephany" voiceIcon={chatVoice}/>
      <Chatters bgImage={Robert} text="Robert" voiceIcon={chatVoice}/>
      <Chatters bgImage={Lily} text="Lily" voiceIcon={chatVoice}/>
      <Chatters bgImage={Michael} text="Michael" voiceIcon={chatVoice}/>
    </div>
    <div className="paginationContainer">
      <Pagination/>
    </div>
    </div>
  )
}

export default ChatContainer