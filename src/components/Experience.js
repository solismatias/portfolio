import React from 'react'
import image from "../images/alkemy.png"

const Experience = () => {
  return (
    <div className='experience'>
      <p className='experience__title'>EXPERIENCE</p>
      <div className='experience__item'>
        <div className='experience__info'>
          <p className='experience__name'>LOREM IPSUM</p>
          <p className='experience__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus nisl, interdum tincidunt ligula vel, vestibulum laoreet leo. Suspendisse ut consequat lorem. Nam sed risus mauris. Praesent lectus ipsum, mollis vitae sapien vitae, blandit gravida arcu. Nunc egestas sit amet sem ut efficitur. Praesent semper vel libero at finibus. Integer ut lectus lacinia, dictum lectus vitae, condimentum</p>
        </div>
        <img className='experience__image' src={image} alt="experience" />
      </div>
      <div className='experience__item'>
        <img className='experience__image' src={image} alt="experience" />
        <div className='experience__info'>
          <p className='experience__name'>LOREM IPSUM</p>
          <p className='experience__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus nisl, interdum tincidunt ligula vel, vestibulum laoreet leo. Suspendisse ut consequat lorem. Nam sed risus mauris. Praesent lectus ipsum, mollis vitae sapien vitae, blandit gravida arcu. Nunc egestas sit amet sem ut efficitur. Praesent semper vel libero at finibus. Integer ut lectus lacinia, dictum lectus vitae, condimentum</p>
        </div>
      </div>
    </div>
  )
}

export { Experience }