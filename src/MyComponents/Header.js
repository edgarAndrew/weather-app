import React from 'react'
import "./style.css"
import ico1 from '../assets/github.png'
export const Header = () => {
  return (
    <>
        <header className='header'>
            <h1 className='title'>React Weather</h1>
            <a href="https://github.com/edgarAndrew/weather-app" title="github-repo">
              <img src={ico1} alt=""/>
            </a>
        </header>
    </>
  )
}
