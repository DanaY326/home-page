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
        <CloseButton close={close}/>
    </div>
  );
}