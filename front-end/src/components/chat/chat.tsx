"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import ChatButton from './chat-button';
import MessageBox from './message-box';

export default function Chat() {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <div className={`absolute lg:fixed bg-black w-full max-w-full`}>
        <ChatButton open={open}/>
        <div className={`${show ? "" : "hidden"}`}>
            <MessageBox close={close}/>
        </div>
    </div>
  );
}