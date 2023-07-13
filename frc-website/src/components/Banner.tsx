"use client"

import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Lorem ipsum dolor sit amet.",
            "Text 2",
            "Text 3"
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="h-full max-w-screen-2xl mx-auto text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl uppercase font-bold">Terrakİ FRC Team</h1>
            {/* <p className="text-lg font-semibold mt-2 mb-8">{text}<Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17"/></p> */}
            <ChevronDoubleDownIcon className="h-8 w-8 absolute bottom-5 animate-bounce" aria-hidden="true" />
        </div>
    )
}

export default Banner