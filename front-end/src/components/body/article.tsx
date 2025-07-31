"use client"
import React from "react";
import Image from "next/image";
import WhiteButton  from "../misc/white-button";

import { Article } from './body';

interface Props {
    item: Article;
}

export default function ArticleBlock(props: Props) {
    const { item } = props;

    return (
        <a
            className="md:flex items-start lg:items-center gap-2 block rounded-4xl h-fit mt-10 px-3 w-full max-w-full"
            href={item.link}
            target={"_blank"}
            rel="noopener noreferrer"
        >
            <div className="flex-col items-top lg:mr-4 mb-4">
                <p className="text-2xl text-white mb-4">{item.title}</p>
                <div className="flex sm:flex-col lg:hidden justify-left gap-5 md:gap-5 text-sm text-neutral-500 w-fit">
                    <div className="flex items-center gap-5">
                        <span className="w-fit">{item.date}</span>
                        <span>{item.topic}</span>
                    </div>
                    <WhiteButton text="Learn more"/>
                </div>
                <div className="hidden lg:flex lg:items-center gap-5 md:gap-5 text-sm text-neutral-500 w-fit">
                    <div className="flex items-center gap-5">
                        <span className="w-fit">{item.date}</span>
                        <span>{item.topic}</span>
                    </div>
                    <div>   
                        <WhiteButton text="Learn more"/>
                    </div>
                </div>
            </div>
            <Image
                className="w-full md:w-3/10 rounded-2xl max-width-full max-height-full"
                src={item.image}
                alt="Image"
                height={1000}
                width={1000}
            />
        </a>
    )
}
