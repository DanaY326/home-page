import Image from "next/image";
import "tailwindcss";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    [ <nav className="bg-black outline-1 outline-offset-2 outline-solid outline-neutral-700 max-w-full" key = "n">
        <div className="mx-auto w-full px-2 px-6 md:px-8">
          <div className="relative flex h-16 items-center text-left justify-between">
            <div className="flex flex-1 items-center justify-left md:items-stretch">
              <div className="hidden md:block">
                <div className="flex space-x-4 inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <div className="relative inline-block text-left">
                    <a href="#" className="py-2 gap-0 visible text-white z-10 static inset-auto pr-0"><span className="text-md">Google</span><span className="text-lg"> DeepMind</span></a>
                      <button
                        type="button"
                        className="flex items-center block rounded-xl px-1 py-0.5 outline-1 outline-offset-2 outline-solid outline-neutral-700" 
                        id="arrow-menu" 
                        aria-expanded="true" 
                        aria-haspopup="true"
                        aria-controls="arrow-menu"
                      >
                        <Image
                          className=""
                          src="/down-arrow.png"
                          alt="Down Arrow"
                          width={10}
                          height={10}
                        />
                      </button>
                      <div id="arrow-menu" className="!visible hidden absolute align-top right-0 z-0 w-48 origin-top-right text-xs rounded-b-xl bg-black shadow-lg ring-1 ring-black/5 focus:visible outline-1 outline-offset-2 outline-solid outline-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="pt-20 pb-1 px-1" role="none">
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-0" href="https://ai.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google AI</p><p className="text-neutral-400">Learn about all of our AI</p></a>
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-1" href="#"><p className="text-white">Google DeepMind</p><p className="text-neutral-400">Explore the frontier of AI</p></a>
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-2" href="https://labs.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google Labs</p><p className="text-neutral-400">Try our AI experiments</p></a>
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-3" href="https://research.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google Research</p><p className="text-neutral-400">Explore our research</p></a>
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-4" href="https://gemini.google.com/app?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Gemini app</p><p className="text-neutral-400">Chat with Gemini</p></a>
                          <a className="block rounded-md m-1 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-5" href="https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google AI Studio</p><p className="text-neutral-400">Build with our next-gen AI models</p></a>
                        </div>
                      </div>
                  </div>
                  <button id="dropdownHoverButton"  type="button" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="block rounded-4xl px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800">Models</button>
                  <div id="dropdownHover" className="z-0 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                      <li>
                        <a href="#"className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#"className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#"className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                      <li>
                        <a href="#"className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                      </li>
                    </ul>
                </div>

                  <a href="#" className="block rounded-4xl px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800">Research</a>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800">Stories</a>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800">About</a>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="absolute inset-y-0 right-0 gap-1 flex items-center pr-2 visible md:static md:inset-auto md:ml-6 md:pr-0">
              
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className=""
                      src="/google-ai-studio.svg"
                      alt="Google AI Studio icon"
                      width={20}
                      height={20}
                    />
                    Try Google AI Studio
                  </a>
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://gemini.google.com/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className=""
                      src="/gemini.svg"
                      alt="Gemini logomark"
                      width={20}
                      height={20}
                    />
                    Try Gemini
                  </a>
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-sm text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://deepmind.google/search/"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className=""
                      src="/search.png"
                      alt="Search icon"
                      width={20}
                      height={20}
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right text-lg text-white divide-y-80 divide-black rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block px-3 py-2 cursor-text">
              Models
              <Image
                className=""
                src="/down-arrow.png"
                alt="Open"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="block px-3 py-2 cursor-text">Research</a>
            <a href="#" className="block px-3 py-2 cursor-text">Stories</a>
            <a href="#" className="block px-3 py-2 cursor-text">About</a>
          </div>
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block px-3 py-2">Try Google Ai Studio</a>
            <a href="#" className="block px-3 py-2">Try Gemini</a>
          </div>
        </div>
      </div>
    </nav>,

    <div key = "m" className="grid grid-rows-[20px_1fr_20px] items-center max-w-full justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Image
          className=""
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-1 sm:mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>,
    <Footer  key="f"/>
    ]
  );
}
