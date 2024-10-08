import React from 'react'

const StartDetailText = (props) => {
    return (
        <>
            <div className="flex items-center justify-center pt-10">
                <div className="w-[1200px] h-auto">
                    <h1 className="bg-gradient-to-r from-blue-800 via-green-800 to bg-indigo-800 inline-block text-transparent bg-clip-text text-[100px] font-semibold pt-20 pb-5">{props.start.title}...</h1>
                </div>
            </div>


        </>
    )
}

export default StartDetailText
