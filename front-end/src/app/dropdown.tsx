"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { MainDropDown } from './header';

interface Props {
    item: MainDropDown;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item.dropdown;

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <div className="flex p-0 items-center gap-2">
                <a href="#" className="gap-0 visible text-white z-50 static inset-auto pr-0 pl-8"><span className="text-md">{item.company}</span> <span className="text-lg">{item.division}</span></a>
                <button
                    className="flex items-center block rounded-xl px-2 py-1.5 z-50 cursor-pointer outline-1 outline-solid outline-neutral-700" 
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
                <div className={`absolute top-0 z-0 w-full min-h-[100px] flex flex-col rounded-md ${transClass}`}>
                    <div className="absolute align-top top-0 left-0 z-0 w-auto origin-top-right text-xs bg-black rounded-b-xl shadow-lg ring-1 ring-black/5 outline-1 outline-offset-2 outline-solid outline-neutral-700 pt-14 pb-1 px-1">  
                        {menuItems.map((item, i) =>
                            (<div className="rounded-lg pt-1 m-1.5" key={i}>
                                {item.items.map((listItem, i) =>
                                    (<div key={i}>
                                        <a className="block rounded-sm mt-0.5 px-4 py-1.5 bg-neutral-800" target="_blank" role="menuitem" id="menu-item-0" href={listItem.link}><p className="text-neutral-200">{listItem.text}</p><p className="text-neutral-400">{listItem.subtitle}</p></a>   
                                    </div>)
                                )}
                            </div>)
                        )}
                    </div>
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