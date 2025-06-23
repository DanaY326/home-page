import Image from "next/image";
import "tailwindcss";

export default function Home() {
  return (
    [
      <nav className="bg-black" key = "n">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="#" className="py-2 gap-0 font-large text-white">Google DeepMind</a>
                  <div className="absolute flex items-center sm:visible inline-block">
                    <div className="">
                      <div>
                        <button
                          type="button"
                          className="flex items-center block rounded-xl px-1 py-0.5 text-base text-neutral-200 font-medium text-white outline-1 outline-offset-2 outline-solid outline-neutral-700" 
                          id="menu-button" 
                          aria-expanded="true" 
                          aria-haspopup="true"
                        >
                          <Image
                            className="dark:invert"
                            src="/down-arrow.png"
                            alt="Down Arrow"
                            width={10}
                            height={10}
                          />
                        </button>
                      </div>
                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                          <form method="POST" action="#" role="none">
                            <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800">Models</a>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800">Research</a>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800">Stories</a>
                  <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800">About</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 gap-1 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-base font-xl text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://aistudio.google.com/prompts/new_chat?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/google-ai-studio.svg"
                      alt="Google AI Studio icon"
                      width={20}
                      height={20}
                    />
                    Try Google AI Studio
                  </a>
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://gemini.google.com/?utm_source=deepmind.google&utm_medium=referral&utm_campaign=gdm&utm_content="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/gemini.svg"
                      alt="Gemini logomark"
                      width={20}
                      height={20}
                    />
                    Try Gemini
                  </a>
                  <a
                    className="flex items-center gap-2 block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 bg-neutral-900 hover:bg-neutral-800"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="dark:invert"
                      src="/search.png"
                      alt="Search icon"
                      width={20}
                      height={20}
                    />
                  </a>
              </div>
          </div>
        </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" className="block rounded-4xl bg-neutral-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Google DeepMind</a>
      <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white">Models</a>
      <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white">Research</a>
      <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white">Stories</a>
      <a href="#" className="block rounded-4xl px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white">About</a>
    </div>
  </div>
</nav>,
    <div key = "m" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Image
          className="dark:invert"
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
              className="dark:invert"
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
    </div>
    ]
  );
}
