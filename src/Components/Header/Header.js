import React from 'react'
// import { Link } from "react-router-dom"
import avtr from '../../Assests/avtr.webp'
// import {useSelector} from 'react-redux';

export default function Header() {
    const user = true;
    // const user = useSelector((store)=>store.app.user);
    return (
        <div className='flex w-[100%] absolute z-10 px-6 items-center justify-between bg-gradient-to-b from-black'>
            <img className='w-56 m-5 ml-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflixLogo" />
            {
                user &&  
                <div className='flex items-center'>
                <i class="fa-solid fa-circle-chevron-down text-white m-2 cursor-pointer hover:text-gray-400"></i> 
                    <h1 className='text-lg text-white bg-black font-medium'>{user.fullName}</h1>
                    <div>
                    <img className='w-10 rounded-sm m-2 cursor-pointer' src={avtr} alt='avatar'/>
                    </div>
                    <div className='ml-4 '>
                    <button className='bg-red-800 rounded-lg hover:bg-red-700 text-white p-2'>Logout</button>
                    <button className='bg-red-800 rounded-lg hover:bg-red-700 text-white p-2 ml-2'>Search movie</button>
                    </div>
                </div>
            }
           
        </div>
    )
}
