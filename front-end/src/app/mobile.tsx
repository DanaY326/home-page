"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import MobileItem from './mobile-item';
import MobileButton from './mobile-button';

import { MobileItems } from './header';

interface Props {
    items: MobileItems;
}

export default function Mobile(props: Props) {
    const { items } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const hoverItems = items.hovers;
    const buttonItems = items.buttons;

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "visible"
        :
        "hidden";

    return (
        <div className="z-20">
            <button
                className={`flex cursor-pointer rounded-4xl px-5 py-3 transition delay-150 ease-in-out duration-500 text-sm text-neutral-400 ${isOpen ? "outline-1 outline-solid outline-neutral-700" : "bg-neutral-900"}`} 
                onClick={toggle}
            >
                <Image
                    className={isOpen ? "w-2 lg:w-3" : "w-3 lg:w-4"}
                    src={isOpen ? "/x.png" : "/hamburger.png"}
                    alt={isOpen ? "Close" : "Menu"}
                    width={isOpen ? 8 : 18}
                    height={isOpen ? 8 : 18}
                />
            </button>
            <div className={`absolute h-fit px-6 py-5 top-14 left-0 right-0 border-t-1 border-solid border-neutral-800 pb-1 delay-300 duration-300 ease-in-out bg-black ${transClass}`}>
                {hoverItems.map((item, i) => {
                    return (
                        <MobileItem item={item} key={i}/>
                    );
                })}
                <div className='my-30 visible md:hidden'>
                    {buttonItems.map((item, i) => {
                        return (
                            <MobileButton item={item} key={i}/>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}