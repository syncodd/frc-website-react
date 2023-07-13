import React from 'react'


interface NeedInfo {
    title: string;
    needings: string[];
}

const OurNeeds = ({title, needings}:NeedInfo) => {
  return (
    <div className="flex flex-col h-full mx-10 items-start text-black">
        <h1 className="w-48 h-8 flex mx-2 text-3xl border-b-2 border-gray-400 font-semibold">{title}</h1>
        <h1 className="m-2">{needings[0]}</h1>
        <h1 className="m-2">{needings[1]}</h1>
        <h1 className="m-2">{needings[2]}</h1>
    </div>
  )
}

export default OurNeeds