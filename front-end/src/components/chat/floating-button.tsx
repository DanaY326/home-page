"use client"
import React from 'react';
import Image from "next/image";

interface Props {
    open: () => void;
}

export default function FloatingButton(props: Props) {
  const { open } = props;
  return (
    <button onClick={open} className="fixed bottom-6 right-6 rounded-2xl bg-blue-200 outline-1 outline-solid outline-neutral-700 hover:bg-blue-100 shadow-sm font-bold p-2 z-30">
        <Image
            className=""
            src={"gemini-blue.svg"}
            alt="Image"
            height={30}
            width={30}
        />
    </button>
  );
}