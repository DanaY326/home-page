"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { SubItem } from './header';

interface Props {
    item: SubItem;
}

export default function HoverSubItem (props: Props) {
    const { item } = props;

    return (<div className={"mb-6 md:mb-12 md:h-60 mx-6"}>
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
                                        </div> )
}