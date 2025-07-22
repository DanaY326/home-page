"use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import UserChat from './user-chat';

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    inputHistory: string[];
    resultHistory: string[];
}

export default function ChatHistory(props: Props) {
  const { inputHistory, resultHistory } = props;
  const chatHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatHistoryRef.current) {
            const lastChild = chatHistoryRef.current.lastElementChild;
            if (lastChild) {
                lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    }, [inputHistory, resultHistory])

  return (
    <div ref={chatHistoryRef} className="w-full h-full flex flex-col">
        {inputHistory.map((inputFromArr, index) => {
            const resultFromArr = resultHistory[index] ? resultHistory[index] : "Thinking...";
            return (
                <div key={index} className="flex flex-col gap-4 p-8">
                    <div className='flex justify-end'>
                        <UserChat text={inputFromArr}/>
                    </div>
                    <div className='flex flex-col justify-start'>
                        <Markdown remarkPlugins={[remarkGfm]}>{resultFromArr}</Markdown>
                    </div>
                </div>
            )
        })}
    </div>
  );
}