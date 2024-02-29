import './Background.css';
import video from '../../assets/video.mp4';
import cat1 from '../../assets/cat1.jpg';
import cat2 from '../../assets/cat2.jpg';
import cat3 from '../../assets/cat3.jpg';

const Background = ({playStatus,heroCount}) => {
  if (playStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={video} type='video/mp4' /> 
      </video>
    )
  } 
  else if (heroCount===0) {
    return <img src={cat1} className='background' alt="" />
  }
  else if (heroCount===1) {
    return <img src={cat2} className='background' alt="" />
  }
  else if (heroCount===2) {
    return <img src={cat3} className='background' alt="" />
  }

}

export default Background