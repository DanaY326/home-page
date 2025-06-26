"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Article } from './body';

interface Props {
    item: Article;
}

export default function BigArticle(props: Props) {
    const { item } = props;

    return (
        <a
            className="flex-col items-center w-full max-w-full gap-2 block rounded-4xl px-3"
            href={item.link}
            target={"_blank"}
            rel="noopener noreferrer"
        >
            <p className="text-4xl text-white mb-4">{item.title}</p>
            <div className="flex p-0 items-center gap-4 text-sm text-neutral-500 mb-10">
                <span>{item.date}</span>
                <span>{item.topic}</span>
                <span
                    className="block rounded-4xl w-fit h-max-6 flex gap-4 items-centre outline-1 outline-solid outline-neutral-700 row-flex px-3.5 py-1.5 text-sm text-neutral-400 bg-neutral-950 hover:bg-neutral-900"
                >
                    Learn more
                    <Image
                        className="h-3 mt-1 w-2 items-centre"
                        src ="/right-arrow.png"
                        alt="Right arrow"
                        width={6}
                        height={2}
                    />
                </span>
            </div>
            <div className="mr-10">
                <Image
                    className="h-full w-full"
                    src={item.image}
                    alt="Image"
                    width={6000}
                    height={6000}
                />
            </div>
        </a>
    )
}

