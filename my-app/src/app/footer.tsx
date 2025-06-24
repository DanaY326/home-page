"use client"
import Image from "next/image";
import "tailwindcss";

export interface List {
  title: string;
  subtitle?: string;
  children?: ListItem[];
}

export interface ListItem {
  image?: typeof Image;
  title: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Products",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products/hinkle-horns",
      },
      {
        title: "Doozers",
        route: "/products/doozers",
      },
      {
        title: "Zizzer-zazzers",
        route: "/products/zizzer-zazzers",
      },
    ],
  },
];

export default function Footer() {
    return (
        <footer className="bg-black max-w-full mx-7 md:mx-20">
            <div className="relative block text-lg text-white mb-12 flex gap-4 md:gap-6 items-center flex-col flex-row">
            <p className="mr-4 md:mr-8">Follow us</p>
                <a href="https://x.com/googledeepmind" className="flex items-center gap-1 block w-max-20 h-max-20 md:w-max-30 md:h-max-30" target="_blank">
                <Image
                    className=""
                    src="/x.svg"
                    alt="X logo"
                    width={28}
                    height={28}
                />
                </a>
                <a href="https://www.instagram.com/googledeepmind/#" className="flex items-center gap-1 block" target="_blank">
                <Image
                    className=""
                    src="/instagram.svg"
                    alt="Instagram logo"
                    width={28}
                    height={28}
                />
                </a>
                <a href="https://www.youtube.com/@googledeepmind" className="flex items-center gap-1 block" target="_blank">
                <Image
                    className=""
                    src="/youtube.svg"
                    alt="YouTube logo"
                    width={28}
                    height={28}
                />
                </a>
                <a href="https://www.linkedin.com/company/googledeepmind/" className="flex items-center gap-1 block" target="_blank">
                <Image
                    className=""
                    src="/linkedin.svg"
                    alt="LinkedIn logo"
                    width={28}
                    height={28}
                />
                </a>
                <a href="https://github.com/google-deepmind" className="flex items-center gap-1 block" target="_blank">
                <Image
                    className=""
                    src="/github.svg"
                    alt="GitHub logo"
                    width={28}
                    height={28}
                />
                </a>
            </div>
            <div className="w-full max-w-full gap-8 lg:py-6 sm:grid sm:grid-cols-2 md:grid-cols-3 items-start text-lg md:text-xl">
            <div className="text-white mr-30 text-2xl lg:text-3xl sm:max-w-50% md:max-w-40% mb-10 md:mb-12">Build AI reponsibly to benefit humanity</div>
                <div className="mb-6 md:mb-12 md:h-60 sm:col-start-2 sm:row-start-1">
                    <h2 className="mb-3 sm:mb-4 text-sm"><p className="text-white mb-1">Models</p><p className="text-neutral-500">Build with our next generation AI systems</p></h2>
                    <ul className="text-white">
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/gemini/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/gemini-white.svg"
                                alt="Gemini logo"
                                width={28}
                                height={28}
                            />
                            Gemini
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/gemma/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/gemma.svg"
                                alt="Gemma logo"
                                width={28}
                                height={28}
                            />
                            Gemma
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/veo/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/veo.svg"
                                alt="Veo logo"
                                width={28}
                                height={28}
                            />
                            Veo
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/imagen/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/imagen.svg"
                                alt="Imagen logo"
                                width={28}
                                height={28}
                            />
                            Imagen
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/lyria/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/lyria.svg"
                                alt="Lyria logo"
                                width={28}
                                height={28}
                            />
                            Lyria
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-12 md:h-60 sm:col-start-2 sm:row-start-3 md:row-start-2">
                    <h2 className="mb-3 md:mb-4 text-sm text-white">Learn more</h2>
                    <ul className="text-white">
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/about/" className="flex items-center gap-1 block">About</a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/discover/blog/" className="flex items-center gap-1 block">News</a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/about/careers/" className="flex items-center gap-1 block">Careers</a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/research/" className="flex items-center gap-1 block">Research</a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/about/responsibility-safety/" className="flex items-center gap-1 block">Responsibility & Safety</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-12 md:h-60 sm:col-start-2 sm:row-start-2 md:col-start-3 md:row-start-1">
                    <h2 className="mb-3 md:mb-4 text-sm"><p className="text-white mb-1">Science</p><p className="text-neutral-500">Unlocking a new era of discovery with AI</p></h2>
                    <ul className="text-white">
                    <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/gemini/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/alphafold.svg"
                                alt="AlphaFold logo"
                                width={28}
                                height={28}
                            />
                            AlphaFold
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/gemma/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/synthid.svg"
                                alt="SynthID logo"
                                width={28}
                                height={28}
                            />
                            SynthID
                            </a>
                        </li>
                        <li className="mb-1 md:mb-2">
                            <a href="https://deepmind.google/models/veo/" className="flex items-center gap-1 block">
                            <Image
                                className=""
                                src="/weathernext.svg"
                                alt="WeatherNext logo"
                                width={28}
                                height={28}
                            />
                            WeatherNext
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="mb-6 md:mb-12 md:h-60 sm:w-max-50% mr-5 md:w-max-30% text-neutral-400 sm:col-start-2 sm:row-start-4 md:col-start-3 md:row-start-2">
                <p className="mb-3 md:mb-4 text-sm">
                    Sign up for updates on our latest innovations
                </p>
                <p className="mb-3 md:mb-4 text-xs">I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with &nbsp;
                    <a href="https://policies.google.com/privacy" target="_blank" className="underline hover:no-underline">
                    Google's privacy policy
                    </a>
                    .
                </p>
                <form className="w-full p-0">
                    <div className="flex items-center block rounded-4xl bg-neutral-900 px-4 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-neutral-200 mr-3 px-2 sm:text-sm leading-tight focus:outline-none" type="text" placeholder="Email address" aria-label="Full name"></input>
                    <button className="flex-shrink-0 border-transparent border-4 text-white text-sm py-1 px-2 rounded" type="button">
                        <Image
                        className=""
                        src="/right-arrow.png"
                        alt="Go"
                        width={10}
                        height={10}
                        />
                    </button>
                    </div>
                </form>
                </div>
            </div>

            <div className="relative block w-100% mx-auto max-w-full py-8 flex gap-0 z-0 justify-left items-centre flex-col sm:flex-row outline-1 outline-offset-2 outline-solid outline-neutral-700">
                <a className="text-gray-400 ml-10 md:ml-20 text-2xl sm:text-center"
                href="https://www.google.com/"
                target="_blank" >
                Google
                </a>
                <div className="text-gray-400 ml-10 md:ml-20 font-thin flex gap-6 text-lg flex-col sm:flex-row">
                <a className="sm:text-center"
                    href="https://about.google/" 
                    target="_blank" >
                    About Google
                </a>
                <a className="sm:text-center"
                    href="https://about.google/products/" 
                    target="_blank" >
                    Google products
                </a>
                <a className="sm:text-center"
                    href="https://policies.google.com/privacy" 
                    target="_blank" >
                    Privacy
                </a>
                <a className="sm:text-center"
                    href="https://policies.google.com/terms" 
                    target="_blank" >
                    Terms
                </a>
                <a className="sm:text-center"
                    href="https://google.com" 
                    target="_blank" >
                    Manage cookies
                </a>
                </div>
            </div>
        </footer>
    )
}