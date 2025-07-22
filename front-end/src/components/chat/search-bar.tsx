"use client"
import React, { useState, useEffect } from 'react';
 import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Form from 'next/form'
import CloseButton from './close-button';

interface Props {
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
    const { setInput, setResult } = props;
    const { register, getValues, reset } = useForm();
    const handleQuery = async (event: any) => {
      try {
        event.preventDefault();
        const input = getValues("prompt");
        if (!input) {
            console.log("Input is empty, not sending query.");
            throw("Input is empty, not sending query.");
        }
        setInput(input);
        const response = await fetchResponse(input);
        setResult(response.summary);
        reset({ prompt: '' });
      } catch(err) {
        console.log(err);
      }
    }

    return (
      <div>
        <Form action="" onSubmit={handleQuery} className='w-full flex flex-row'>
            <input {...register("prompt")} name="prompt" placeholder="Ask Gemini" className='px-4 py-2 my-4 mx-3 rounded-full w-full font-thin text-md bg-neutral-800 outline-1 outline-solid outline-neutral-700 hover:outline-white'/>
            <button type="submit" className='px-4 py-2 my-4 mx-3 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer'>
              <Image
                  src={"/gemini-white.svg"}
                  alt="Image"
                  height={15}
                  width={15}
              />
            </button>
        </Form>
      </div>
    );
}