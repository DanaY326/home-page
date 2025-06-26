"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "./white-button";

import { Article, DetailedModel } from './body';

interface Props {
    item: DetailedModel;
}

export default function Model(props: Props) {
    const { item } = props;
    const menuItems = item.links;

    return (
        <div className={"mb-6 md:mb-12 md:h-60 mx-2 text-neutral-500"}>
            <hr className="w-7/9 left-0 h-0.5 border-t-0 bg-neutral-900" />
            <Image
                className="w-25 rounded-3xl my-10 max-width-full max-height-full"
                src={item.image}
                alt="Image"
                height={1000}
                width={1000}
            />
            <h2 className="h-10 md:h-35 lg:25 xl:h-20 my-4"><p className="text-neutral-300 text-3xl mb-1">{item.name}</p><p className="text-lg">{item.subtitle}</p></h2>
            <p className="my-8 text-xs">TRY IT IN</p>
            {item.links ? (
                <ul className="mb-6 md:mb-8 h-40">
                    {item.links.map((link, j) =>
                            <li className="mb-2 md:mb-3" key={j}>
                                <a href={link.link} className="flex items-center mb-5 gap-4 block">
                                    <WhiteButton text={link.text}/>
                                </a>
                            </li>
                    )}
                </ul>
            ) : ""}  
            {
                item.learnmore ?
                    <a href={item.learnmore} className="text-neutral-500 text-md flex items-center gap-1 block hover:text-white">
                        Learn more
                    </a>
                :
                ""
            }
        </div>
    )
}