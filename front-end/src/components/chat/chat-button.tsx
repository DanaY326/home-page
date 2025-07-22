"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Props {
    open: () => void;
}

export default function ChatButton(props: Props) {
  const { open } = props;
  return (
    <button onClick={open} className="fixed bottom-6 right-6 rounded-xl bg-blue-200 outline-1 outline-solid outline-neutral-700 hover:bg-blue-100 shadow-sm font-bold p-1 z-30">
        <Image
            className=""
            src={"gemini-blue.svg"}
            alt="Image"
            height={40}
            width={40}
        />
    </button>
  );
}