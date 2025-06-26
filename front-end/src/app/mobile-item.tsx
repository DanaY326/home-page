import React, { useState } from 'react';
import Image from 'next/image'
import HoverSubItem from './hover-subitem';

import { HoverItem } from './header'

interface Props {
    item: HoverItem;
}

export default function MobileItem(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item.children;

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <div className="flex-col">
            <div className='flex mb-6 items-center text-lg flow-root'>
                <p className="float-left">{item.title}</p>
                <button
                    className={`flex rounded-4xl px-6 py-3 float-right transition delay-150 ease-in-out duration-500 text-sm text-neutral-400 ${isOpen ? "outline-1 outline-solid outline-neutral-700" : "bg-neutral-900"}`}
                    onClick={toggle}
                >
                    <Image
                        src={isOpen ? "/up-arrow.png" : "/down-arrow.png"}
                        alt={isOpen ? "Close" : "Open"}
                        width={10}
                        height={10}
                    />
                </button>
            </div>
            <div className={`relative visible top-14 z-20 left-0 right-0 px-0 delay-300 duration-300 ease-in-out items-start bg-black rounded-md ${transClass}`}>
                {
                    <div className="flex-col items-start py-10">
                        <div className="max-w-full mb-10 rounded-4xl mb-10">
                            <p className="text-2xl text-semibold text-white mb-6">
                                {item.tagline}
                            </p>
                            <a
                                className="block rounded-4xl h-max-6 flex flex-1 gap-4 w-fit outline-1 outline-solid outline-neutral-700 row-flex px-3.5 py-1.5 text-sm text-neutral-400 hover:bg-neutral-900"
                                href={item.explorelink}
                            >
                                {item.exploreline}
                                <Image
                                    src ="/right-arrow.png"
                                    alt="Right arrow"
                                    width={6}
                                    height={6}
                                />
                            </a>
                        </div>
                        <div className="items-stretch">
                            {menuItems.map((item, j) =>
                                (<div className="bg-neutral-900 rounded-2xl p-4 mb-3">
                                    <HoverSubItem item={item} key={j + 'mobileItem!'}/>
                                </div>))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}