"use client"
import React, { useState, useEffect, use } from 'react';
import Image from "next/image";
import Link from "next/link";
import Form from 'next/form'
import CloseButton from './close-button';
import SearchBar from './search-bar';
import ChatHistory from './chat-history';

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
            <div className="fixed bottom-0 right-0 flex flex-col w-full h-full sm:w-80 sm:h-100 sm:pt-50 sm:rounded-2xl bg-neutral-950 sm:outline-1 sm:outline-solid sm:outline-neutral-700 p-1 z-30">
                <div className='absolute top-3 right-3'>
                    <CloseButton close={close}/>
                </div>
                <div className='relative grow overflow-y-auto'>
                    <ChatHistory inputHistory={inputHistory} resultHistory={resultHistory}/>
                </div>
                <div className='w-full px-1 py-1'>
                    <SearchBar setInput={setInput} setResult={setResult} />
                </div>
            </div>
    );
}