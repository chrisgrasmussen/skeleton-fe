import React from 'react'
import NavBar from '../components/NavBar.jsx'
import CreateNewText from '../components/CreateNewText.jsx'
import CreateNewCard from '../components/CreateNewCard.jsx'

const CreateNewPage = () => {
    return (
        <div>
            <NavBar />
            <CreateNewText />
            <CreateNewCard />
        </div>
    )
}

export default CreateNewPage
