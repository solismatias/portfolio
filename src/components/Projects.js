import React from 'react'
import image from '../images/placeholder.png'

const Projects = () => {
	return (
		<div className='projects' id="projects">
			<div className='projects__title'>SELECTED PROJECTS</div>
			<div className='projects__container'>
				<div className='projects__item'>
					<img className='projects__video' src={image} alt="poject" />
					<div className='projects__info'>
						<p className='projects__name'>League Maker</p>
						<ul className='projects__list'>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
						</ul>
						<p className='projects_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo arcu, maximus sit amet bibendum id, sollicitudin vel dolor. Ut et dapibus erat.
						</p>
					</div>
				</div>
				<div className='projects__item'>
					<img className='projects__video' src={image} alt="poject" />
					<div className='projects__info'>
						<p className='projects__name'>League Maker</p>
						<ul className='projects__list'>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
						</ul>
						<p className='projects_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo arcu, maximus sit amet bibendum id, sollicitudin vel dolor. Ut et dapibus erat.
						</p>
					</div>
				</div>
				<div className='projects__item'>
					<img className='projects__video' src={image} alt="poject" />
					<div className='projects__info'>
						<p className='projects__name'>League Maker</p>
						<ul className='projects__list'>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
						</ul>
						<p className='projects_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo arcu, maximus sit amet bibendum id, sollicitudin vel dolor. Ut et dapibus erat.
						</p>
					</div>
				</div>
				<div className='projects__item'>
					<img className='projects__video' src={image} alt="poject" />
					<div className='projects__info'>
						<p className='projects__name'>League Maker</p>
						<ul className='projects__list'>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
							<li className='projects__tech'>lorem</li>
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