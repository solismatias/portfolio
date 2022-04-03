import React from 'react'
import alkemy from "../images/alkemy.png"
import pets from "../images/family-pets.png"

const Experience = () => {
  return (
    <div className='experience'>
      <p className='experience__title'>EXPERIENCE</p>
      <div className='experience__item'>
        <div className='experience__info'>
          <p className='experience__name'>Alkemy Internship/Acceleration</p>
          <p className='experience__description'>
            At the beginning of this year (2022) I started an acceleration that simulates a real work environment whose  objective is to achieve  a Job-Ready profile.<br /> Together with 7 coworkers and our mentor/Scrum-master, we developed a web management platform for an NGO, which we successfully completed in March!. I want to highlight that this acceleration, not only gave me solid knowledge in React, but it boosted my soft skills 100%, the team work & communication was a fundamental element, so I am very satisfied with this experience
          </p>
          <p className='experience__name'>Job-Ready profile</p>
          <p>The job-ready profile is a stage in the learning curve of a junior developer in which he is already productive for a work team</p>
          <div className='experience__link'>
            <a href='https://drive.google.com/file/d/1gTy8UWIS1YOBlGEYSW13rWifRg0jx-IW/view?usp=sharing' target="_blank" rel="noreferrer">Click here to see my certificate!</a>
          </div>
        </div>
        <img className='experience__image' src={alkemy} alt="experience" />
      </div>
      <div className='experience__item'>
        <img className='experience__image' src={pets} alt="experience" />
        <div className='experience__info'>
          <p className='experience__name'>Freelance Family Pets</p>
          <p className='experience__description'>This was my first freelance experience! A Peruvian animal hospital needed to replace their handwriting sheet  system for something new, so they contacted me for the task, which I delivered successfully.
            I didn't have a boss or someone who could assign me the necessary tasks, so I had to learn how to manage my time efficiently and break down each feature into small tasks to complete the job.</p>
        </div>
      </div>
    </div>
  )
}

export { Experience }