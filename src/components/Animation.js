import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/tanujnarang1.json'
// import animationData2 from '../assets/animation/final_1.lottie'
// import animationData3 from '../assets/animation/final_2.webm'
// import '@dotlottie/player-component';

const Animation = () => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <div className='max-w-full'>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} width={'100%'} />
    </div>
  )
}

export default Animation