import React from 'react'

const StartDetailCard = (props) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex min-h-screen pt-20 justify-center pb-10">
                <div className="flex flex-col">
                    <div className="w-[900px] bg-sky-100 rounded-xl shadow-2xl">
                        <div className="">
                            <h3 className="flex items-center justify-center text-4xl font-regular py-10">
                                {props.start.title}
                            </h3>

                        </div>
                    </div>
                    <div className=''>
                        {
                            props.completeData.map((item, index) => (
                                <div key={index} className="w-[900px] flex items-center justify-center mt-5 bg-yellow-50 rounded-2xl">
                                    <h3 className="text-2xl font-regular py-10">
                                        {item.body}
                                    </h3>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StartDetailCard
