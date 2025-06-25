"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import MobileItem from './mobile-item';

import { HoverItem } from './header';

interface Props {
    items: HoverItem[];
}

export default function Mobile(props: Props) {
    const { items } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <div className="flex p-0 flex-1 items-center justify-centre gap-2">
                <button
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800" 
                    onClick={toggle}
                    onMouseOver={isOpen ? toggle : ()=>null}
                >
                    {
                        isOpen 
                        ?
                        <Image
                            src="/up-arrow.png"
                            alt="Up Arrow"
                            width={10}
                            height={10}
                        />
                        :
                        <Image
                            src="/down-arrow.png"
                            alt="Down Arrow"
                            width={10}
                            height={10}
                        />
                    }
                    
                </button>
                <div className={`absolute top-0 z-0 w-full min-h-[100px] flex flex-col bg-oppacity-100 rounded-md ${transClass}`}>
                    {items.map((item, i) => {
                        return (
                            <MobileItem item={item} key={i}/>
                        );
                    })}
                </div>
                {
                    isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-0 bg-transparent"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
                }
        </div>
    )
}