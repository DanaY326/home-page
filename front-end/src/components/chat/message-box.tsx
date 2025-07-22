"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import CloseButton from './close-button';

interface Props {
    close: () => void;
}

export default function MessageBox(props: Props) {
  const { close } = props;
  return (
    <div className="fixed bottom-5 right-5 w-100 h-120 pt-50 rounded-2xl bg-black outline-1 outline-solid outline-neutral-700 font-bold p-1 z-30">
        <div className="absolute top-3 left-3 p-1 z-50 bg-blue-200 outline-1 outline-solid outline-neutral-700 rounded-lg">
            <Image
                src={"gemini-blue.svg"}
                alt="Image"
                height={20}
                width={20}
            />
        </div>
        <CloseButton close={close}/>
    </div>
  );
}