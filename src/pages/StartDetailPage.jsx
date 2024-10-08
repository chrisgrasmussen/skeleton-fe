import { useState, useEffect } from 'react'
import React from 'react'
import Header from '../components/Header.jsx'
import NavBar from '../components/NavBar.jsx'
import StartCard from '../components/StartCard.jsx'
import StartText from '../components/StartText.jsx'
import StartDetailText from '../components/StartDetailText.jsx'
import StartDetailCard from '../components/StartDetailCard.jsx'
import StartDetailReply from '../components/StartDetailReply.jsx'
import { useParams } from 'react-router-dom'



const StartDetailPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [completeData, setCompleteData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [response1, response2] = await Promise.all([
                fetch(`https://skeleton-a70q.onrender.com/api/start/${id}/`),
                fetch(`https://skeleton-a70q.onrender.com/api/start/${id}/complete/`)
            ]);

            const data1 = await response1.json();
            const data2 = await response2.json();

            setData(data1);
            setCompleteData(data2);
        };

        fetchData();
        console.log(data)
        console.log(completeData)
    }, []);

    return (
        <>
            <NavBar />
            <StartDetailText start={data} completeData={completeData} />
            <StartDetailReply start={data} completeData={completeData} />
            <StartDetailCard start={data} completeData={completeData} />
        </>
    )
}

export default StartDetailPage

