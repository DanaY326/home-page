"use client"
import React from 'react';
 import { useForm } from "react-hook-form";
import Form from 'next/form'

import { baseUrl } from '@/lib/chatApi';

interface Props {
    inputHistory: string[];
    sessionId: string;
    setInput: (str: string) => void;
    setResult: (str: string) => void;
}

const fetchResponse = async (input: string, sessionId: string) => {
  try {
    const response = await fetch(`${baseUrl}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId,
        text: {input}
      }),
    });

    // Parse the response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching response:", error);
    return null;
  }
};

export default function SearchBar(props: Props) {
    const { sessionId, setInput, setResult } = props;
    const { register, getValues, reset } = useForm();
    const handleQuery = async (event: React.FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        const input = getValues("prompt");
        if (!input) {
            console.log("Input is empty, not sending query.");
            throw("Input is empty, not sending query.");
        }
        reset({ prompt: '' });
        setInput(input);
        const response = await fetchResponse(input, sessionId);
        setResult(response.summary);
      } catch(err) {
        console.log(err);
      }
    }

    return (
      <div>
        <Form action="" onSubmit={handleQuery} className='w-full flex flex-row'>
            <input {...register("prompt")} name="prompt" placeholder="Ask Gemini" className='px-4 py-2 m-5 rounded-full w-full font-thin text-md bg-neutral-800 outline-1 outline-solid outline-neutral-700 hover:outline-white'/>
        </Form>
      </div>
    );
}