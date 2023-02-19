import React from 'react'
// import Lottie from 'react-lottie'
// import animationData from '../assets/animation/final.json'
// import animationData2 from '../assets/animation/final_1.lottie'
import animationData3 from '../assets/animation/final_2.webm'
import '@dotlottie/player-component';

const Animation = () => {
  return (
    <div>
      <dotlottie-player
        src={JSON.stringify(animationData3)}
        autoplay
        loop
        style={{ height: '100%', width: '100%' }}
      />
      {/* <Lottie options={defaultOptions} isClickToPauseDisabled={true} height={650} width={'auto'} /> */}
    </div>
  )
}

export default Animation