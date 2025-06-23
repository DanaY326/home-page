import Image from "next/image";
import "tailwindcss";

export default function Home() {
  return (
    [
      <nav className="bg-black outline-1 outline-offset-2 outline-solid outline-neutral-700 max-w-full" key = "n">
        <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="#" className="py-2 gap-0 visible text-white z-10 static inset-auto ml-6 pr-0"><span className="text-md">Google</span><span className="text-lg"> DeepMind</span></a>
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        className="flex items-center block rounded-xl px-1 py-0.5 outline-1 outline-offset-2 outline-solid outline-neutral-700" 
                        id="menu-button" 
                        aria-expanded="true" 
                        aria-haspopup="true"
                      >
                        <Image
                          className=""
                          src="/down-arrow.png"
                          alt="Down Arrow"
                          width={10}
                          height={10}
                        />
                      </button>
                      <div className="absolute collapse align-top right-0 z-0 mt-0 w-48 pt-20 top-0 origin-top-right text-xs  rounded-b-xl bg-black shadow-lg ring-1 ring-black/5 focus:visible outline-1 outline-offset-2 outline-solid outline-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-0" href="https://ai.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google AI</p><p className="text-neutral-400">Learn about all of our AI</p></a>
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-1" href="#"><p className="text-white">Google DeepMind</p><p className="text-neutral-400">Explore the frontier of AI</p></a>
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-2" href="https://labs.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google Labs</p><p className="text-neutral-400">Try our AI experiments</p></a>
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-3" href="https://research.google/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google Research</p><p className="text-neutral-400">Explore our research</p></a>
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-4" href="https://gemini.google.com/app?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Gemini app</p><p className="text-neutral-400">Chat with Gemini</p></a>
                          <a className="block rounded-md m-2 px-4 py-2 bg-neutral-800" target="_blank" role="menuitem" tabIndex="-1" id="menu-item-5" href="https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="><p className="text-white">Google AI Studio</p><p className="text-neutral-400">Build with our next-gen AI models</p></a>
                        </div>
                      </div>
                </div>
                  <button id="dropdownHoverButton"  type="button" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="block rounded-4xl px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800">Models</button>
                  <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
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
            <div className="hidden sm:ml-6 sm:block">
              <div className="absolute inset-y-0 right-0 gap-1 flex items-center pr-2 visible sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
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

  <div className="sm:hidden" id="mobile-menu">
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
          <li className="mb-2 tracking-[-.01em]">
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
    

<footer className="bg-black max-w-full" key="f">
    <div className="relative block text-lg text-white mb-12 mx-20 gap-20">
      <p>Follow us</p>
      <div className="">
        <a href="https://x.com/googledeepmind" className="flex items-center gap-1 block" target="_blank">
          <Image
            className=""
            src="/x.svg"
            alt="X logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
    <div className="mx-20 w-full max-w-full gap-8 lg:py-6 sm:grid sm:grid-cols-3 items-start">
      <div className="text-white text-2xl sm:text-3xl w-80 mb-10 sm:mb-12">Build AI reponsibly to benefit humanity</div>
      <div className="">
        <div className="mb-12 h-60">
            <h2 className="mb-4 text-sm"><p className="text-white mb-1">Models</p><p className="text-neutral-500">Build with our next generation AI systems</p></h2>
            <ul className="text-white text-lg sm:text-xl">
                <li className="mb-2">
                    <a href="https://deepmind.google/models/gemini/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/gemini-white.svg"
                        alt="Gemini logo"
                        width={30}
                        height={30}
                      />
                      Gemini
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/gemma/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/gemma.svg"
                        alt="Gemma logo"
                        width={30}
                        height={30}
                      />
                      Gemma
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/veo/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/veo.svg"
                        alt="Veo logo"
                        width={30}
                        height={30}
                      />
                      Veo
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/imagen/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/imagen.svg"
                        alt="Imagen logo"
                        width={30}
                        height={30}
                      />
                      Imagen
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/lyria/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/lyria.svg"
                        alt="Lyria logo"
                        width={30}
                        height={30}
                      />
                      Lyria
                    </a>
                </li>
            </ul>
        </div>
        <div className="mb-12 h-60">
            <h2 className="mb-4 text-sm text-white">Learn more</h2>
            <ul className="text-white text-xl">
                <li className="mb-2">
                    <a href="https://deepmind.google/about/" className="flex items-center gap-1 block">About</a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/discover/blog/" className="flex items-center gap-1 block">News</a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/about/careers/" className="flex items-center gap-1 block">Careers</a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/research/" className="flex items-center gap-1 block">Research</a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/about/responsibility-safety/" className="flex items-center gap-1 block">Responsibility & Safety</a>
                </li>
            </ul>
        </div>
        </div>
        <div>
          <div className="mb-12 h-60">
            <h2 className="mb-4 text-sm"><p className="text-white mb-1">Science</p><p className="text-neutral-500">Unlocking a new era of discovery with AI</p></h2>
            <ul className="text-white text-xl">
              <li className="mb-2">
                    <a href="https://deepmind.google/models/gemini/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/alphafold.svg"
                        alt="AlphaFold logo"
                        width={30}
                        height={30}
                      />
                      AlphaFold
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/gemma/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/synthid.svg"
                        alt="SynthID logo"
                        width={30}
                        height={30}
                      />
                      SynthID
                    </a>
                </li>
                <li className="mb-2">
                    <a href="https://deepmind.google/models/veo/" className="flex items-center gap-1 block">
                      <Image
                        className=""
                        src="/weathernext.svg"
                        alt="WeatherNext logo"
                        width={30}
                        height={30}
                      />
                      WeatherNext
                    </a>
                </li>
            </ul>
        </div>
          
        <div className="mb-12 h-60 w-65 text-neutral-400">
          <p className="mb-4 text-sm">
            Sign up for updates on our latest innovations
          </p>
          <p className="mb-4 text-xs">I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with &nbsp;
            <a href="https://policies.google.com/privacy" target="_blank" className="underline hover:no-underline">
              Google's privacy policy
            </a>
            .
          </p>
          <form className="w-full p-0">
            <div className="flex items-center block rounded-4xl bg-neutral-800 m-2 px-4 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-neutral-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email address" aria-label="Full name"></input>
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
    </div>
    <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-300 text-xl font-semibold sm:text-center">Google
        </p>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
</footer>
    ]
  );
}
