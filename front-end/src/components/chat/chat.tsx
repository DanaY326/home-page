"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import ChatButton from './chat-button';

export default function Chat() {
  const [show, setShow] = useState(false);

  return (
    <div className={`absolute lg:fixed bg-black w-full max-w-full`}>
        <ChatButton setShow={setShow}/>
    </div>
  );
}