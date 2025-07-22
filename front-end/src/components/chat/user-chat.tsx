"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Props {
    text: string;
}

export default function UserChat(props: Props) {
  const { text } = props;
  return (
    <div className="rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-neutral-700 w-fit max-w-3/4 px-3 py-2 text-wrap wrap-break-word">
        {text}
    </div>
  );
}