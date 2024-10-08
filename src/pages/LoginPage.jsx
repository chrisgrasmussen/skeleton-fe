import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext.jsx';

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);
    return (
        <div>
            <div className="h-screen flex">

                <div className="flex w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 justify-around items-center">
                </div>
                <div className="flex w-1/2 justify-center items-center bg-white">
                    <form onSubmit={loginUser} className="bg-white w-[600px]">
                        <h1 className="text-gray-800 font-bold text-4xl pb-5 mb-1">Login to Eidetic</h1>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="password" name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
