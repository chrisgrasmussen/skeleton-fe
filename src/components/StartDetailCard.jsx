import React from 'react'

const StartDetailCard = (props) => {
    const [items, setItems] = React.useState(props.completeData);

    const handleDelete = async (id) => {
        console.log(`https://skeleton-a70q.onrender.com/api/start/${props.start.id}/complete/${id}`)


        try {
            // Make the API call to delete the item
            const response = await fetch(`https://skeleton-a70q.onrender.com/api/start/${props.start.id}/complete/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Update the state to remove the deleted item
                setItems(items.filter((item) => item.id !== id));
            } else {
                // Handle errors
                console.error('Failed to delete item');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };




    return (
        <div className="flex flex-row justify-center">
            <div className="flex min-h-screen pt-20 justify-center pb-10">
                <div className="flex flex-col">

                    <div className=''>
                        {
                            props.completeData.map((item, index) => (
                                <div onClick={() => handleDelete(item.id)} key={index} className="w-[900px] flex items-center justify-between px-10 mt-5 bg-indigo-500 text-white rounded-2xl">
                                    <h3 className="text-2xl font-regular py-10">
                                        {item.body}
                                    </h3>
                                    <svg className="opacity-100 cursor hover:opacity-50" width="40px" height="40px" viewBox="0 0 1024 1024" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill=""></path><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill=""></path><path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path></g></svg>
                                </div>

                            ))}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StartDetailCard
