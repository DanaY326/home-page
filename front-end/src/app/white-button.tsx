"use client"
import React, { useState } from "react";
import Image from "next/image";

import { Article } from './body';

interface ButtonText {
    text: string;
}


export default function WhiteButton(bt : ButtonText) {
    const { text } = bt;
    const [isOpen, setIsOpen] = useState<boolean>(false);

     const open = () => {
        setIsOpen(() => true);
    }

    const close = () => {
        setIsOpen(() => false);
    }

    return (
        <button className="block flex gap-2 text-sm transition ease-in-out duration-300 hover:text-white hover:text-bold"
                onMouseOver={open}
                onMouseLeave={close}>
            {text}
            <Image
                className="h-3 w-2 mt-1 items-centre"
                src ={isOpen ? "/right-arrow-white.png" : "/right-arrow.png"}
                alt="Right arrow"
                width={6}
                height={2}
            />
        </button>
    )
}