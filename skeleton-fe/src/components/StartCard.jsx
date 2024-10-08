import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewCard = () => {
    const [starts, setStarts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const data = await fetch('https://skeleton-a70q.onrender.com/api/start/');
            const json = await data.json();
            setStarts(json);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);


    return (
        <div className="flex justify-center ">
            <div className="border w-[1200px] rounded-3xl">
                <div className="h-full p-10">
                    {starts.map((start, index) => {
                        return (
                            <div key={start.id} className="card rounded-2xl m-10 text-xl shadow-sm hover:shadow-2xl p-5 opacity-70 hover:opacity-100">
                                <Link to={`/start/${start.id}`} >
                                    <div className="w-full h-20 bg-sky-50 rounded mb-3 flex items-center justify-center">
                                        <h1 className="text-2xl font-medium text-indigo-900">
                                            {start.title}
                                        </h1>
                                    </div>


                                    <button className="h-8 flex justify-center items-center bg-indigo-400 rounded w-full mb-2">
                                        <h3 className="text-sm text-white ">Finish the Conversation</h3>
                                    </button>
                                    <div class="h-8 flex items-center justify-center bg-gray-50 rounded w-1/4">
                                        <h3 className="text-sm">Posted 3 hours ago</h3>
                                    </div>
                                </Link>
                            </div>

                        )
                    })}
                </div>
            </div >
        </div>
    )
}

export default ViewCard
