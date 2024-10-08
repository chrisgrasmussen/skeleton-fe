import React from 'react'
import Header from '../components/Header.jsx'
import StartCard from '../components/StartCard.jsx'
import StartText from '../components/StartText.jsx'
import StartCreate from '../components/StartCreate.jsx'
import NavBar from '../components/NavBar.jsx'

const ConversationsPage = () => {
    return (
        <div>
            <NavBar />
            <StartText />
            <StartCard />
        </div>
    )
}

export default ConversationsPage
