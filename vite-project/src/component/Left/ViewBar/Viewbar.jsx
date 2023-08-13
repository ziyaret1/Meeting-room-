import logo from '../../../assets/left-images/logo.png'
import Buttons from '../../Buttons'
import record from '../../../assets/left-images/recordbutton.png'
import Views from './Views'
import icon1 from '../../../assets/left-images/headicon1.png'
import icon2 from '../../../assets/left-images/headicon2.png'
import icon3 from '../../../assets/left-images/headicon3.png'
import icon4 from '../../../assets/left-images/headicon4.png'

const Viewbar = () => {
  return (
    <div className='ViewBar'>
        <div><img src={logo} alt="" /></div>
    <div className='views'>
    <Views image={icon1}/>
    <Views image={icon2}/>
    <Views image={icon3}/>
    <Views image={icon4}/>
    </div>
    <div className='button'>
        <Buttons image={record} text="13:03:39" color="#4B556380"/>
    </div>
    </div>
  )
}

export default Viewbar