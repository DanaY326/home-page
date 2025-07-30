"use client"
import React from 'react';
import Image from "next/image";

interface Props {
    close: () => void;
}

export default function CloseButton(props: Props) {
  const { close } = props;
  return (
    <button onClick={close} className="rounded-lg bg-black outline-1 outline-solid outline-neutral-700 hover:bg-neutral-800 shadow-sm font-bold px-2 py-2 z-40 justify-end">
        <Image
            src="/down-arrow.png"
            alt="Down Arrow"
            width={15}
            height={15}
        />
    </button>
  );
}