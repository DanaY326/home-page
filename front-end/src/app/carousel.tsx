"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Model from './model'

import { DetailedModel } from './body';

interface Props {
    itemList: DetailedModel[];
}

export default function Carousel(props: Props) {
    const { itemList } = props;

    return (
        
        {itemList.map((item, i) => {
            return (
                <>  
                    <Model item={item} key={i}/>
                </>
            );
        })}
    )
}




