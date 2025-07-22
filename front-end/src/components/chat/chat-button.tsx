"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Props {
    setShow: (bool: boolean) => void;
}

export default function ChatButton(props: Props) {
  const { setShow } = props;
  return (
    <button onClick={() => setShow(true)} className="fixed bottom-6 right-6 rounded-2xl bg-white hover:bg-blue-100 shadow-sm font-bold p-1 z-50">
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