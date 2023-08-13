import leftArrow from '../../../assets/left-images/leftArrow.png'
import rightArrow from '../../../assets/left-images/rightArrow.png'
import blueCircle from '../../../assets/left-images/blueCircle.png'
import greyCircle from '../../../assets/left-images/greyCircle.png'


const Pagination = () => {
  return (
    <div className="pagination">
      <img src={leftArrow} alt="" />
      <div className="circles">
        <img src={blueCircle} alt="" />
        <img src={greyCircle} alt="" />
        <img src={greyCircle} alt="" />
      </div>
    <img src={rightArrow} alt="" />
    </div>
  )
}

export default Pagination