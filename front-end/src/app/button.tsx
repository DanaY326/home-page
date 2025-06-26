"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonItem } from './header';

interface Props {
    item: ButtonItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;

    return (
        
        <a
            className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
            href={item.link}
            target={item.target ? item.target : "_self"}
            rel="noopener noreferrer"
        >
            <Image
                src={item.image}
                alt={item.imageAlt ? item.imageAlt : "Icon"}
                width={20}
                height={20}
            />
            {item.text ? item.text : ""}
        </a>
    )
}




