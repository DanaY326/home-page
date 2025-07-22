"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Form from 'next/form'
import SearchBar from './search-bar';
import ChatHistory from './chat-history';
import PopupHeader from './popup-header';
import CloseButton from './close-button';

interface Props {
    close: () => void;
}

export default function Popup(props: Props) {
    const [inputHistory, setInputHistory] = useState<string[]>([]);
    const [resultHistory, setResultHistory] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const { close } = props;

    useEffect(() => {
        if (input !== "") {
            setInputHistory(prevHistory => [...prevHistory, input]);
            setResultHistory(prevHistory => [...prevHistory, "Thinking..."]);
        } 
    }, [input])

    useEffect(() => {
        if (result !== "") {
            setResultHistory(prevHistory => [...prevHistory.slice(0, -1), result]);
        } 
    }, [result])

    return (
            <div className="fixed bottom-0 right-0 flex flex-col w-full h-full sm:w-80 sm:h-[80vh] sm:rounded-tl-2xl bg-neutral-950 sm:outline-1 sm:outline-solid sm:outline-neutral-700 p-1 z-30">
                <Image
                    className="absolute left-4 top-4"
                    src={"/gemini-blue.svg"}
                    alt="Image"
                    height={30}
                    width={30}
                />
                <div className='flex flex-row mr-3 mt-3 mb-3 justify-end'>
                        <CloseButton close={close}/>
                    </div>
                <div className='grow overflow-y-scroll scrollbar-hidden'>
                    <ChatHistory inputHistory={inputHistory} resultHistory={resultHistory}/>
                </div>
                <div className='w-full'>
                    <SearchBar inputHistory={inputHistory} setInput={setInput} setResult={setResult} />
                </div>
            </div>
    );
}