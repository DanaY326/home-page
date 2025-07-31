"use client"
import React, { useEffect, useRef } from 'react';
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
    <div ref={chatHistoryRef} className="w-full h-full flex flex-col items-end text-neutral-300 text-sm/7">
        <div className='w-full flex flex-col justify-start gap-4 px-8 py-4 text-wrap wrap-break-word'>
            <Markdown remarkPlugins={[remarkGfm]}>Welcome! I&apos;m ready to assist you.</Markdown>
        </div>
        {inputHistory.map((inputFromArr, index) => {
            const resultFromArr = resultHistory[index] ? resultHistory[index] : "Thinking...";
            return (
                <div key={index} className="w-full flex flex-col gap-4 px-8 py-4">
                    <div className='flex justify-end'>
                        <UserChat text={inputFromArr}/>
                    </div>
                    <div className='flex flex-col gap-4 justify-start text-wrap wrap-break-word'>
                        <Markdown remarkPlugins={[remarkGfm]}>{resultFromArr}</Markdown>
                    </div>
                </div>
            )
        })}
    </div>
  );
}