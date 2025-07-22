"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import BigArticle from './big-article';
import ArticleBlock from './article';
import Model from './model';

export interface Article {
  title: string;
  date: string;
  topic: string;
  link: string;
  image: string;
}

export interface DetailedModel {
  name: string;
  subtitle: string;
  image: string;
  links: Link[];
  learnmore: string;
}

export interface Link {
  text: string;
  link: string;
}

const highlightedArticle: Article = {
    title: "Gemini 2.5 Flash-Lite is here, and 2.5 Pro and Flash are now stable and generally available",
    date: "June 2025",
    topic: "Models",
    link: "https://deepmind.google/models/gemini/",
    image: "/gemini-fancy.png",
}

const topArticles: Article[] = [
    {
        title: "AlphaGenome: AI for better understanding the genome",
        date: "June 2025",
        topic: "Science",
        link: "https://deepmind.google/discover/blog/alphagenome-ai-for-better-understanding-the-genome/",
        image: "/dna.webp",
    },
    {
        title: "Gemini Robotics On-Device brings AI to local robotic devices",
        date: "June 2025",
        topic: "Models",
        link: "https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/",
        image: "/robot.webp",
    },
    {
        title: "Imagen 4: Our best image generation model yet",
        date: "May 2025",
        topic: "Models",
        link: "https://deepmind.google/models/imagen/",
        image: "/girl.webp",
    },
    {
        title: "Project Mariner: Exploring how AI agents can help you multitask",
        date: "May 2025",
        topic: "Labs",
        link: "https://deepmind.google/models/project-mariner/",
        image: "/mariner.webp",
    },
    {
        title: "Bringing Project Astra's live capabilities into our products",
        date: "May 2025",
        topic: "Models",
        link: "https://deepmind.google/models/project-astra/",
        image: "/phone.webp",
    },
    {
        title: "Gemma 3n: The future of fast, efficient, multimodal AI on your devices is here",
        date: "May 2025",
        topic: "Models",
        link: "https://deepmind.google/discover/blog/announcing-gemma-3n-preview-powerful-efficient-mobile-first-ai/",
        image: "/gemma-3n.webp",
    },
]

const researchArticles: Article[] = [
    {
        title: "AlphaGenome: AI for better understanding the genome",
        date: "June 2025",
        topic: "Science",
        link: "https://deepmind.google/discover/blog/alphagenome-ai-for-better-understanding-the-genome/",
        image: "/dna.webp",
    },
    {
        title: "How we're supporting better tropical cyclone prediction with AI",
        date: "May 2025",
        topic: "Science",
        link: "https://deepmind.google/discover/blog/weather-lab-cyclone-predictions-with-ai/",
        image: "/cyclone.webp",
    },
    {
        title: "AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms",
        date: "May 2025",
        topic: "Science",
        link: "https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/",
        image: "/alphaevolve.webp",
    },
    {
        title: "DolphinGemma: How Google AI is helping decode dolphin communication",
        date: "April 2025",
        topic: "Models",
        link: "https://blog.google/technology/ai/dolphingemma/",
        image: "/dolphin.webp",
    },
    {
        title: "Gemini Robotics brings AI into the physical world",
        date: "March 2025",
        topic: "Research",
        link: "https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/",
        image: "/robot.webp",
    },
    {
        title: "Genie 2: A large-scale foundation world model",
        date: "December 2024",
        topic: "Research",
        link: "https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/",
        image: "/genie.webp",
    },
]

const geminiAppLink: Link = {
    text: "Gemini app",
    link: "https://gemini.google.com/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
}

const aiStudioLink: Link = {
    text: "Google AI Studio",
    link: "https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
}

const vertexStudioLink: Link = {
    text: "Vertex AI Studio",
    link: "https://cloud.google.com/vertex-ai?hl=en&utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
}

const models: DetailedModel[] = [
    {
        name: "Gemini",
        subtitle: "Our most intelligent AI models",
        image: "gemini-big.svg",
        links: [
            geminiAppLink,
            aiStudioLink,
            vertexStudioLink,
        ],
        learnmore: "https://deepmind.google/models/gemini/",
    },
    {
        name: "Gemma",
        subtitle: "A family of lightweight, state-of-the-art open models",
        image: "gemma-big.svg",
        links: [
            geminiAppLink
        ],
        learnmore: "https://deepmind.google/models/gemma/",
    },
    {
        name: "Veo",
        subtitle: "Our state-of-the-art video generation model",
        image: "veo-big.svg",
        links: [
            geminiAppLink,
            {
                text: "Flow",
                link: "http://labs.google/flow?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
            },
            aiStudioLink,
            vertexStudioLink,
        ],
        learnmore: "https://deepmind.google/models/gemini/",
    },
    {
        name: "Imagen",
        subtitle: "Our best text-to-image model yet, engineered for creativity",
        image: "imagen-big.svg",
        links: [
            {
                text: "Whisk",
                link: "https://labs.google/fx/tools/whisk?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
            },
            aiStudioLink,
            vertexStudioLink,
        ],
        learnmore: "https://deepmind.google/models/gemini/",
    },
    {
        name: "Lyria",
        subtitle: "Our latest music generation model",
        image: "lyria-big.svg",
        links: [
            geminiAppLink,
            {
                text: "MusicFX DJ",
                link: "https://labs.google/fx/tools/music-fx-dj?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
            },
            aiStudioLink,
            vertexStudioLink,
        ],
        learnmore: "https://deepmind.google/models/gemini/",
    },
]

export default function Body() {
    const [isLeft, setIsLeft] = useState<boolean>(true);

    const left = () => {
        setIsLeft(() => true);
    }

    const right = () => {
        setIsLeft(() => false);
    }

    return ( 
      <div className="grid grid-rows-[20px_1fr_20px] items-center max-w-full justify-items-center min-h-screen p-6 gap-16 lg:p-20 font-[family-name:var(--font-montserrat)]">
        <main className="flex flex-col row-start-2 py-10 items-center sm:items-start">
            <div className="md:grid md:grid-cols-2 min-h-screen mb-20">
                <div className="md:sticky md:top-0 col-span-1 h-screen mb-30">
                    <BigArticle item={highlightedArticle}/>
                </div>
                <div className="col-span-1 clear-both">
                    {topArticles.map((item, i) => {
                        return (
                            <>  
                                {i != 0 ? <hr className="h-0.5 border-t-0 bg-neutral-900 my-10" /> : <></>}
                                <ArticleBlock item={item} key={i}/>
                            </>
                        );
                    })}
                </div>
            </div>
            <hr className="w-full clear-both h-0.5 mt-20 mb-10 border-t-0 bg-neutral-900" />
            <div className='w-full h-fit flow-root'>
                <div className='text-4xl float-left'>Start building</div>
                <a
                    className="block rounded-4xl w-fit float-right h-max-6 flex gap-4 items-centre cursor-pointer outline-1 outline-solid outline-neutral-700 row-flex px-3.5 py-1.5 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://deepmind.google/models/"
                >
                    View models
                    <Image
                        className="h-3 mt-1 w-2 items-centre"
                        src ="/right-arrow.png"
                        alt="Right arrow"
                        width={6}
                        height={2}
                    />
                </a>
            </div>
            <div className=''>
                <div className='md:grid md:grid-cols-4 gap-4 mt-10 my-10 clear-end my-80'>
                    {models.slice(isLeft ? 0 : 1, isLeft ? -1 : models.length).map((item, i) => {
                        return (
                            <>  
                                <Model item={item} key={i}/>
                            </>
                        );
                    })}            
                </div>
                <div className='clear-both hidden md:flex'>
                    <div className='flex items-center gap-2 block rounded-4xl px-1 py-1 clear-both text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800 w-fit'>
                        <button
                            className={`flex items-center gap-2 block rounded-4xl px-4 py-2 text-sm text-neutral-400 ${isLeft ? 'cursor-not-allowed bg-neutral-700' : 'cursor-pointer bg-neutral-900'}`} 
                            onClick={left}
                        >
                            {
                                <Image
                                    src="/left-arrow.png"
                                    alt="Left Arrow"
                                    width={10}
                                    height={10}
                                />
                            }
                            
                        </button>
                        <button
                            className={`flex items-center gap-2 block rounded-4xl px-4 py-2 text-sm text-neutral-400 ${isLeft ? 'cursor-pointer bg-neutral-900' : 'cursor-not-allowed bg-neutral-700'}`} 
                            onClick={right}
                        >
                            {
                                <Image
                                    src="/right-arrow.png"
                                    alt="Right Arrow"
                                    width={10}
                                    height={10}
                                />
                            }
                            
                        </button>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 bg-neutral-900 my-10"/>
            <div className="md:grid md:grid-cols-2 gap-10 grid-flow-row auto-rows-fr flex flex-wrap">
                {researchArticles.map((item, i) => {
                    return (
                        <div className=''>  
                            {i >= 2 ? <hr className="h-0.5 border-t-0 bg-neutral-900 mb-10" /> : <></>}
                            <ArticleBlock item={item} key={i}/>
                        </div>
                    );
                })}
            </div>
        </main>
    </div>
  );
}