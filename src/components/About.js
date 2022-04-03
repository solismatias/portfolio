import React from 'react'
import profilePic from "../images/greyprofile.png"

const About = () => {
	return (
		<div className='about'>
			<img className='about__image' src={profilePic} alt='my profile pic' />
			<div className='about__hire'>
				<span className='about__dot' />
				<p>Available to be hired</p>
			</div>
			<p className='about__me'>Hello! my name is <span className='about__name'>Matias&nbsp;Solis</span>, I'm from a small town in the Argentinian Patagonia, currently living in Buenos Aires.<br />
				I've always been passionate about technology, what started as a hobby, ended being one of my principal objectives, working as a software developer!<br />
				As for now, I'm studying the programming career in Universidad Nacional de General San Martín, but my main focus is the web development  with React and soon with React Native!<br />
				I put my efforts in learning things that I like and are useful, as  keeping my skills and knowledge updated as possible </p>
		</div>
	)
}

export { About }