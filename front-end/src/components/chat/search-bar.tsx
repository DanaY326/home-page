"use client"
import React from 'react';
 import { useForm } from "react-hook-form";
import Form from 'next/form'

interface Props {
    inputHistory: string[];
    setInput: (str: string) => void;
    setResult: (str: string) => void;
}

const baseUrl = "http://localhost:3000";

const fetchResponse = async (input: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/gemini-ai-model`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: {input}
      }), // Replace with your state which is controlled by an input
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
    const { inputHistory, setInput, setResult } = props;
    const { register, getValues, reset } = useForm();
    const handleQuery = async (event: any) => {
      try {
        event.preventDefault();
        const input = getValues("prompt");
        if (!input) {
            console.log("Input is empty, not sending query.");
            throw("Input is empty, not sending query.");
        }
        reset({ prompt: '' });
        setInput(input);
        const response = await fetchResponse(input);
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