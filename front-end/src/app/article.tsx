"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteButton  from "./white-button";

import { Article } from './body';

interface Props {
    item: Article;
}

export default function ArticleBlock(props: Props) {
    const { item } = props;

    return (
        <a
            className="flex items-center gap-2 block rounded-4xl h-30 px-3 w-full max-w-full"
            href={item.link}
            target={"_blank"}
            rel="noopener noreferrer"
        >
            <div className="flex-col items-top mr-4">
                <p className="text-2xl text-white mb-4">{item.title}</p>
                <div className="flex p-0 items-center gap-5 text-sm mb-2 text-neutral-500 w-fit">
                    <span className="w-fit">{item.date}</span>
                    <span>{item.topic}</span>
                    <WhiteButton text="Learn more"/>
                </div>
            </div>
            <Image
                className="w-1/3 rounded-4xl max-width-full max-height-full"
                src={item.image}
                alt="Image"
                height={1000}
                width={1000}
            />
        </a>
    )
}
