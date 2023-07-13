"use client";

import Image from 'next/image';
import Link from "next/link";
import { Link as LinkScroll } from 'react-scroll';
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Navbar() {

  const title = "Terraki FRC Team Logo"

  const handleClick = (e:any, path:any) => {
    var access = document.getElementById(path);
    if(access) {
      access.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <Popover className={
      "container mx-auto flex items-center text-white px-6 py-2 h-24"
    }>

      <Image 
      src="/assets/terabot_logo.png"
      alt=""
      width={300}
      height={300}
      className='mt-2'
      />
      
      <div className="grow">
        <div className=" hidden sm:flex items-center justify-end gap-2 md:gap-8">
          <Link href="/" onClick={(e) => handleClick(e, "about_us")}>Biz Kimiz?</Link>
          <Link href="/" onClick={(e) => handleClick(e, "our_team")}>Takımımız</Link>
          <Link href="/" onClick={(e) => handleClick(e, "sponsor")}>Sponsorluk</Link>
          <Link href="/" onClick={(e) => handleClick(e, "sponsor_package")}>İletişim</Link>
        </div>
      </div>
      
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex ite ms-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Popover.Overlay className=" sm:hidden fixed inset-0 bg-black opacity-30" />

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden text-black"
          >
          <div className="rounded-lg bg-white shadown-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">{title}</h1>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>
              <div className="mt-8">
                <div className="grid gap-y-8">
                <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                    onClick={(e) => handleClick(e, "about_us")}
                    >
                    Biz Kimiz?
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                    onClick={(e) => handleClick(e, "our_team")}
                    >
                    Takımımız
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                    onClick={(e) => handleClick(e, "sponsor")}
                    >
                    Sponsorluk
                  </Link>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                    onClick={(e) => handleClick(e, "sponsor_package")}
                    >
                    İletişim
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
