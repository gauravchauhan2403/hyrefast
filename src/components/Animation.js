import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/final.json'

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { 'svg': true
    }
  }
  return (
    <div>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} height={550} width={'auto'} />
    </div>
  )
}

export default Animation