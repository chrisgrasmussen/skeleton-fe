import React, { useState, useEffect } from 'react'

const CreateNewCard = () => {
    const [startText, setStartText] = useState('')

    const handleChange = (event) => {
        setStartText(event.target.value)
        console.log(startText);
    }

    const handleSubmit = () => {
        if (startText.trim() === '') {
            alert('Please enter a thought');
            return;
        }

        // Send the new start to the server
        fetch('https://skeleton-a70q.onrender.com/api/start/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: startText }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('New start created:', data);
                // Clear the input field
                setStartText('');
            })
            .catch(error => console.error('Error:', error));

    };


    return (
        <div>
            <div className="px-6 py-4 flex justify-center">
                <form onSubmit={handleSubmit} className="w-[1200px]" >
                    <label htmlFor="chat" className="sr-only">Your message</label>
                    <div className="flex items-center py-2 px-3">
                        <textarea onChange={handleChange} name="completeText" rows="5" className="block mx-4 p-2.5 w-full text-2xl text-gray-700 bg-white rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500  " placeholder="Create a new thought..."></textarea>
                        <button type="submit" text="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateNewCard
