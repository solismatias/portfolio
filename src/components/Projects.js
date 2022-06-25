import React from 'react'
import league from "../videos/league.webm"
import pet from "../videos/pet.webm"
import frontstore from "../videos/frontstore.webm"


const Projects = () => {
	return (
		<div className='projects' id="projects">
			<div className='projects__title'>SELECTED PROJECTS</div>
			<div className='projects__container'>
				<div className='projects__item'>
					<video muted autoPlay loop className='projects__video'>
						<source src={frontstore} type="video/webm" />
					</video>
					<div className='projects__info'>
						<p className='projects__name'>Front Store</p>
						<ul className='projects__list'>
							<li className='projects__tech'>react</li>
							<li className='projects__tech'>react router</li>
							<li className='projects__tech'>redux</li>
							<li className='projects__tech'>graphql</li>
							<li className='projects__tech'>apollo</li>
							<li className='projects__tech'>sass</li>
						</ul>
						<p className='projects_description'>
							A nice looking front store, with:
							<ul>
								<li>category page</li>
								<li>product page</li>
								<li>Cart page + mini cart</li>
								<li>Ability to add/remove products and change their amounts in cart</li>
								<li>Ability to change the currency of the store to one of the available currencies</li>
								<li>⚠ this project was done entirely with react class components</li>
							</ul>
						</p>
						<div className='projects__links'>
							<a href='https://github.com/solismatias/scandiweb' target="_blank" rel="noreferrer">
								<i className="fa-brands fa-github" />
							</a>
						</div>
					</div>
				</div>
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
							Create your team of heroes, villains, mercenaries, antiheroes or whatever you like! Search for individual characters and inspect their stats.<br /> This website was part of a challenge to enter the Alkemy Internship/Acceleration, which I successfully delivered and was accepted!
						</p>
						<div className='projects__links'>
							<a href='https://github.com/solismatias/leaguemaker' target="_blank" rel="noreferrer">
								<i className="fa-brands fa-github" />
							</a>
							<a className='projects__live' href='https://solismatias-leaguemaker.herokuapp.com/' target="_blank" rel="noreferrer">LIVE <i class="fa-solid fa-square-arrow-up-right"></i></a>
						</div>
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
							<li className='projects__tech'>materialui</li>
							<li className='projects__tech'>formik</li>
							<li className='projects__tech'>firebase</li>
						</ul>
						<p className='projects_description'>
							A CRUD sheet system for an Animal Hospital, whenever a dog needs a bath, the veterinarian will fill out a health report and appoint a consult if necessary, all reports are stored in the database and can be sorted, searched, deleted, edited or delivered as a WhatsApp message as needed.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Projects }