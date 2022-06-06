import React from 'react'
import {Link} from 'react-router-dom'

const Hero = (props) => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                  Moflix
            </h1>
            <Link className="py-6 px-10 bg-red-300 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 case-in-out flex items-center animate-bounce">
                Watch Now
                <svg class="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
            </Link>
            
        </div>
    )
}

export default Hero
