import React from 'react'

export default function MainHeader({isChatOpen}){
  const handleClick = (event) => {
    const button = event.target.textContent;
    isChatOpen((button === 'Lobby')? true : false)
  }

  return(
    <header className="mb-5 d-flex justify-content-between ui segment">
      <h1 className="mb-0">Dashboard</h1>
      <nav id="main-nav" className="d-flex ui ">
        <a className="ui button inverted red w-50" onClick={handleClick}>Lobby</a>
        <a className="ui button inverted blue w-50" onClick={handleClick}>Files</a>
      </nav>
    </header>
  )
}

