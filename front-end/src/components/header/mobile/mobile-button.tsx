"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonItem } from '../header';

interface Props {
    item: ButtonItem;
}

export default function MobileButton(props: Props) {
    const { item } = props;

    return (
        
        <a
            className="flex mb-6 items-center text-lg flow-root"
            href={item.link}
            target={item.target ? item.target : "_self"}
            rel="noopener noreferrer"
        >
            <p className="float-left">
                {item.text ? item.text : ""}
            </p>
            <div className="rounded-4xl float-right px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800">
                <Image
                    src={item.image}
                    alt={item.imageAlt ? item.imageAlt : "Icon"}
                    width={20}
                    height={20}
                />
            </div>
        </a>
    )
}