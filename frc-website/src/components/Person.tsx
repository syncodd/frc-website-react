"use client"

import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import Image from 'next/image';

interface PersonInfo {
    name: string;
    title: string;
    image: string;
}

const Person = ({name, title, image}:PersonInfo) => {
  return (
    <Card className="w-60 rounded-2xl p-2 shadow-2xl bg-black bg-opacity-25 text-gray-800">
      <CardHeader floated={true} className="h-48 mt-2 bg-black bg-opacity-0">
        <div className="w-full relative pt-[90%]">
            <Image
            src={image}
            alt="photo"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl shadow-2xl"
            />
        </div>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="mb-2">
          {name}
        </Typography>
        <Typography className="font-medium" textGradient>
          {title}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default Person