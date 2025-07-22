"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import FloatingButton from './floating-button';
import Popup from './popup';

export default function Chat() {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <div className={`absolute lg:fixed bg-black w-full max-w-full`}>
        <FloatingButton open={open}/>
        <div className={`${show ? "" : "hidden"}`}>
            <Popup close={close}/>
        </div>
    </div>
  );
}