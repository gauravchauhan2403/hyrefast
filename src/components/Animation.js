import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/tanujnarang221.json'
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
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} height={600} width={'auto'} />
  )
}

export default Animation