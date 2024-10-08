import React from 'react'
import Header from '../components/Header.jsx'
import HomeText from '../components/HomeText.jsx'
import HomeCard from '../components/HomeCard.jsx'
import HomeLink from '../components/HomeLink.jsx'
import NavBar from '../components/NavBar.jsx'

const HomePage = () => {
    return (
        <div className=" overflow-hidden">
            <NavBar />
            <HomeText />
            <HomeCard />
        </div>
    )
}

export default HomePage
