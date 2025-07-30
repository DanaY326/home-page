"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CloseButton from './close-button';

interface Props {
    close: () => void;
}

export default function PopupHeader(props: Props) {
  const { close } = props;
  return (
    <div className='flex flex-row mr-3 mt-3 mb-1'>
        <Image
            className="justify-start"
            src={"/gemini-blue.svg"}
            alt="Image"
            height={20}
            width={20}
        />
        <CloseButton close={close}/>
    </div>
  );
}