import React from 'react'
import league from "../videos/league.webm"
import pet from "../videos/pet.webm"

const Projects = () => {
	return (
		<div className='projects' id="projects">
			<div className='projects__title'>SELECTED PROJECTS</div>
			<div className='projects__container'>
				<div className='projects__item'>
					<video muted autoPlay loop className='projects__video'>
						<source src={league} type="video/webm" />
					</video>
					<div className='projects__info'>
						<p className='projects__name'>League Maker</p>
						<ul className='projects__list'>
							<li className='projects__tech'>react</li>
							<li className='projects__tech'>react router</li>
							<li className='projects__tech'>axios</li>
							<li className='projects__tech'>formik</li>
							<li className='projects__tech'>yup</li>
							<li className='projects__tech'>css</li>
						</ul>
						<p className='projects_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo arcu, maximus sit amet bibendum id, sollicitudin vel dolor. Ut et dapibus erat.
						</p>
						{/* <i className="fa-brands fa-github" />
						<p>live</p> */}
					</div>
				</div>
				<div className='projects__item'>
					<video muted autoPlay loop className='projects__video'>
						<source src={pet} type="video/webm" />
					</video>
					<div className='projects__info'>
						<p className='projects__name'>Family Pets</p>
						<ul className='projects__list'>
							<li className='projects__tech'>react</li>
							<li className='projects__tech'>css</li>
							<li className='projects__tech'>formik</li>
							<li className='projects__tech'>firebase</li>
						</ul>
						<p className='projects_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo arcu, maximus sit amet bibendum id, sollicitudin vel dolor. Ut et dapibus erat.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Projects }