"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Dropdown from "./dropdown";
import Hover from "./hover";
import Button from "./button";
import Mobile from "./mobile/mobile";

export interface HoverItem {
  title: string;
  tagline: string;
  exploreline: string;
  explorelink: string;
  children: SubItem[];
}

export interface SubItem {
  title: string;
  subtitle?: string;
  links?: Link[];
  learnmore?: string;
}

export interface Link {
  text: string;
  link: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ButtonItem {
  text?: string;
  link: string;
  image: string;
  imageAlt?: string;
  target?: string;
}

export interface MainDropDown {
  company: string;
  division: string;
  dropdown: DropDownItemList[];
}

export interface DropDownItemList {
  items: DropDownItem[];
}

export interface DropDownItem {
  text: string;
  subtitle: string;
  link: string;
}

export interface MobileItems {
  hovers: HoverItem[];
  buttons: ButtonItem[];
}

const hoverItems: HoverItem[] = [
  {
    title: "Models",
    tagline: "Build with our next generation AI systems",
    exploreline: "Explore models",
    explorelink: "Image, music and video generation models",
    children: [
        {
            title: "Gemini",
            subtitle: "Our most intelligent AI models",
            links: [
                {
                    text: "2.5 Pro",
                    link: "https://deepmind.google/models/gemini/pro/",
                    imageSrc: "/gemini-blue.svg",
                    imageAlt: "Gemini"
                },
                {
                    text: "2.5 Flash",
                    link: "https://deepmind.google/models/gemini/flash/",
                    imageSrc: "/gemini-blue.svg",
                    imageAlt: "Gemini"
                },
                {
                    text: "2.5 Flash-Lite",
                    link: "https://deepmind.google/models/gemini/flash-lite/",
                    imageSrc: "/gemini-blue.svg",
                    imageAlt: "Gemini"
                },
            ],
            learnmore: "https://deepmind.google/models/gemini/",
        },
        {
            title: "Gemma",
            subtitle: "Lightweight, state-of-the-art open models",
            links: [
                {
                    text: "Gemma 3",
                    link: "https://deepmind.google/models/gemini/pro/",
                    imageSrc: "/gemma-blue.svg",
                    imageAlt: "Gemma"
                },
                {
                    text: "Gemma 3n",
                    link: "https://deepmind.google/models/gemini/flash/",
                    imageSrc: "/gemma-blue.svg",
                    imageAlt: "Gemma"
                },
                {
                    text: "ShieldGemma 2",
                    link: "https://deepmind.google/models/gemini/flash-lite/",
                    imageSrc: "/shield-blue.svg",
                    imageAlt: "Shield"
                },
            ],
            learnmore: "https://deepmind.google/models/gemma/",
        },
        {
            title: "Generative models",
            subtitle: "Image, music and video generation models",
            links: [
                {
                    text: "Imagen",
                    link: "https://deepmind.google/models/imagen/",
                    imageSrc: "/imagen-blue.svg",
                    imageAlt: "Imagen"
                },
                {
                    text: "Lyria",
                    link: "https://deepmind.google/models/lyria/",
                    imageSrc: "/lyria-blue.svg",
                    imageAlt: "Lyria"
                },
                {
                    text: "Veo",
                    link: "https://deepmind.google/models/veo/",
                    imageSrc: "/veo-blue.svg",
                    imageAlt: "Veo"
                },
            ],
        },
        {
            title: "Experiments",
            subtitle: "AI prototypes and experiments",
            links: [
                {
                    text: "Project Astra",
                    link: "https://deepmind.google/models/project-astra/",
                    imageSrc: "/astra-blue.svg",
                    imageAlt: "Astra"
                },
                {
                    text: "Project Mariner",
                    link: "https://deepmind.google/models/project-mariner/",
                    imageSrc: "/mariner-blue.svg",
                    imageAlt: "Mariner"
                },
                {
                    text: "Gemini Diffusion",
                    link: "https://deepmind.google/models/gemini-diffusion/",
                    imageSrc: "/diffusion-blue.svg",
                    imageAlt: "Diffusion"
                },
            ],
            learnmore: "https://deepmind.google/models/gemma/",
        },
    ]
  },
  {
    title: "Research",
    tagline: "Our latest AI breakthroughs and updates from the lab",
    exploreline: "Explore research",
    explorelink: "https://deepmind.google/research/",
    children: [
      {
        title: "Projects",
        subtitle: "Explore some of the biggest AI innovations",
        learnmore: "https://deepmind.google/research/projects/",
      },
      {
        title: "Publications",
        subtitle: "Read a selection of our recent papers",
        learnmore: "https://deepmind.google/research/publications/",
      },
      {
        title: "News",
        subtitle: "Discover the latest updates from our lab",
        learnmore: "https://deepmind.google/discover/blog/",
      },
    ],
  },
  {
    title: "Science",
    tagline: "Unlocking a new era of discovery with AI",
    exploreline: "Explore science",
    explorelink: "https://deepmind.google/science/",
    children: [
      {
        title: "AI for biology",
        links: [
          { text: "AlphaFold", 
            link: "https://deepmind.google/science/alphafold/", 
            imageSrc: "/alphafold-blue.svg"},
          { text: "AlphaMissense", 
            link: "https://deepmind.google/discover/blog/a-catalogue-of-genetic-mutations-to-help-pinpoint-the-cause-of-diseases/",
            imageSrc: "/missence-blue.svg"},
          { text: "AlphaProteo", 
            link: "https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/", 
            imageSrc: "/proteo-blue.svg"},
        ],
      },
      {
        title: "AI for climate and sustainability",
        links: [
          { text: "WeatherNext", 
            link: "https://deepmind.google/science/weathernext/" ,
            imageSrc: "/weathernext-blue.svg"
          },
          { text: "Weather Lab", 
            link: "https://deepmind.google.com/science/weatherlab" ,
            imageSrc: "/weatherlab-blue.svg"},
        ],
      },
      {
        title: "AI for mathematics and computer science",
        links: [
          { text: "AlphaEvolve", 
            link: "https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/", 
            imageSrc: "/alphaevolve-blue.svg"},
          { text: "AlphaProof", 
            link: "https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/", 
            imageSrc: "/alphaproof-blue.svg"},
          { text: "AlphaGeometry", 
            link: "https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/", 
            imageSrc: "/alphageometry-blue.svg"},
        ],
      },
      {
        title: "AI for physics and chemistry",
        links: [
          { text: "GNoME", 
            link: "https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/", 
            imageSrc: "/gnome.svg"},
          { text: "Fusion", 
            link: "https://deepmind.google/discover/blog/accelerating-fusion-science-through-learned-plasma-control/", 
            imageSrc: "/fusion.svg"},
          { text: "AlphaQubit", 
            link: "https://blog.google/technology/google-deepmind/alphaqubit-quantum-error-correction/", 
            imageSrc: "/qubit.svg"},
        ],
      },
      {
        title: "AI transparency",
        links: [
          { text: "SynthID", 
            link: "https://deepmind.google/science/synthid/", 
            imageSrc: "synthid-blue.svg"},
        ],
      },
    ],
  },
  {
    title: "About",
    tagline: "Our mission is to build AI responsibly to benefit humanity",
    exploreline: "About Google DeepMind",
    explorelink: "https://deepmind.google/about/",
    children: [
      {
        title: "News",
        subtitle: "Discover our latest AI breakthroughs, projects, and updates",
        learnmore: "https://deepmind.google/discover/blog/",
      },
      {
        title: "Careers",
        subtitle: "We’re looking for people who want to make a real, positive impact on the world",
        learnmore: "https://deepmind.google/about/careers/",
      },
      {
        title: "Milestones",
        subtitle: "For over 20 years, Google has worked to make AI helpful for everyone",
        learnmore: "https://ai.google/our-ai-journey/?section=intro",
      },
      {
        title: "Education",
        subtitle: "We work to make AI more accessible to the next generation",
        learnmore: "https://deepmind.google/about/education/",
      },
      {
        title: "Responsibility",
        subtitle: "Ensuring AI safety through proactive security, even against evolving threats",
        learnmore: "https://deepmind.google/about/responsibility-safety/",
      },
      {
        title: "The Podcast",
        subtitle: "Uncover the extraordinary ways AI is transforming our world",
        learnmore: "https://deepmind.google/discover/the-podcast/",
      },
    ],
  },
]

const buttonItems: ButtonItem[] = [
  {
    text: "Try Google AI Studio",
    link: "https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
    image: "/google-ai-studio.svg",
    imageAlt: "Google AI Studio icon",
    target: "_blank",
  },
  {
    text: "Try Gemini",
    link: "https://gemini.google.com/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
    image: "/gemini.svg",
    imageAlt: "Gemini Logomark",
    target: "_blank",
  },
];

const searchButton: ButtonItem = {
    link: "https://deepmind.google/search",
    image: "/search.png",
    imageAlt: "Search icon",
}

const maindropdown: MainDropDown =
  {
    company: "Google",
    division: "DeepMind",
    dropdown: [
      {
        items:
        [
          {
            text: "Google AI",
            subtitle: "Learn about all of our AI",
            link: "https://ai.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
          },
          {
            text: "Google DeepMind",
            subtitle: "Explore the frontier of AI",
            link: "https://deepmind.google/",
          },
          {
            text: "Google Labs",
            subtitle: "Try our AI experiments",
            link: "https://labs.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
          },
          {
            text: "Google Research",
            subtitle: "Explore our research",
            link: "https://research.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
          },
        ]
      },
      {
        items:
        [
          {
            text: "Gemini app",
            subtitle: "Chat with Gemini",
            link: "https://gemini.google.com/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
          },
          {
            text: "Google AI Studio",
            subtitle: "Build withour next-gen AI models",
            link: "https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content=",
          },
        ]
      },
    ]
}

const mobileItems: MobileItems = {
  hovers: hoverItems,
  buttons: buttonItems
}

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
      <nav className={`absolute lg:fixed bg-black z-20 lg:${lastScrollY == 0 ? "" : "outline-1 outline-solid outline-neutral-800"} w-full max-w-full lg:${show ? "visible" : "hidden"}`}>
        <div className="mx-7 md:mx-10 w-full lg:pl-4 lg:pr-8">
          <div className="relative flex h-16 items-center text-left justify-between gap-1 mr-10">
            <div className="flex flex-1 items-center justify-left">
              <div className="lg:hidden">
                <Mobile items={mobileItems}/>
              </div>
              <Dropdown item={maindropdown}/>
              <div className="hidden lg:block">
                <div className="flex inset-y-0 px-3 left-0 xl:static xl:inset-auto xl:ml-6 xl:pr-0">
                  {hoverItems.map((item, i) => {
                    return (
                      <Hover item={item} key={i}/>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="absolute inset-y-0 right-0 gap-1 flex items-center pr-2 invisible md:visible md:static md:inset-auto md:ml-6 md:pr-0">
                {buttonItems.map((item, i) => {
                    return (
                      <Button item={item} key={i}/>
                    );
                  })}
              </div>
            </div>
            <Button item={searchButton}/>
          </div>
        </div>
    </nav>
  );
}