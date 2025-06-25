"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { HoverItem } from './header';

interface Props {
    item: HoverItem;
}

export default function Hover (props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item.children;

    const open = () => {
        setIsOpen(() => true);
    }

    const close = () => {
        setIsOpen(() => false);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
                <button
                    className={`block rounded-4xl px-3 py-2 text-sm text-neutral-400 transition z-10 delay-150 ease-in-out duration-300 hover:bg-neutral-800`}
                    onMouseOver={open}
                >
                    {item.title}
                </button>
                <div className={`absolute top-14 z-20 left-0 right-0 px-8 py-0 delay-300 duration-300 ease-in-out items-start bg-black rounded-md ${transClass}`}
                     onMouseLeave={close}>
                    {
                        <div className="md:grid md:grid-cols-4 items-start py-10">
                            <div className="max-w-60">
                                <p className="text-2xl text-semibold text-white mb-6">
                                    {item.tagline}
                                </p>
                                <a
                                    className="block rounded-4xl w-fit h-max-6 flex flex-1 gap-4 outline-1 outline-solid outline-neutral-700 row-flex px-3.5 py-1.5 text-sm text-neutral-400 hover:bg-neutral-900"
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
                            <div className="md:grid md:col-span-3 md:grid-cols-subgrid items-start items-stretch">
                                {menuItems.map((item, i) =>
                                    (<div className={"mb-6 md:mb-12 md:h-60 mx-6"} key={i}>
                                        <h2 className={(item.links ? (item.subtitle ? "h-20 md:h-25" : "h-15 md:h-20") : "mb-6 md:mb-7")}><p className="text-white text-xl">{item.title}</p>{item.subtitle ? (<p className="text-neutral-500 text-sm">{item.subtitle}</p>) : ""}</h2>
                                            {item.links ? (
                                                <ul className="text-white mb-6 md:mb-8">
                                                    {item.links.map((link, j) =>
                                                            <li className="mb-2 md:mb-3" key={j}>
                                                                <a href={link.link} className="flex items-center mb-5 gap-4 block">
                                                                    {link.imageSrc ? 
                                                                        (<div className="bg-black rounded-xs outline-1 outline-offset-5 outline-solid outline-neutral-900">
                                                                            <Image
                                                                            src ={link.imageSrc}
                                                                            alt={link.imageAlt ? link.imageAlt : "Logo"}
                                                                            width={15}
                                                                            height={15}
                                                                            />
                                                                        </div>) : ""}
                                                                    {link.text}
                                                                </a>
                                                            </li>
                                                    )}
                                                </ul>
                                            ) : ""}    
                                        {
                                            item.learnmore ?
                                                <a href={item.learnmore} className="text-neutral-500 text-md flex items-center gap-1 block">
                                                    Learn more
                                                </a>
                                            :
                                            ""
                                        }
                                    </div>                              
                                ))}
                            </div>
                        </div>
                    }
                </div>
            {
                isOpen
                    ?
                    <div>
                        <div
                            className="fixed top-14 right-0 bottom-0 left-0 backdrop-blur-md z-10"
                            onMouseOver={close}
                        >
                        </div>
                        <div
                            className="fixed top-0 h-14 right-0 bottom-0 left-0 bg-transparent z-0"
                            onMouseOver={close}
                        ></div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}