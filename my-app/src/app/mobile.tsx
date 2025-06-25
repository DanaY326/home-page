import Image from 'next/image'

export default function Mobile() {
    return (
        <div className="md:hidden" id="mobile-menu">
            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right text-lg text-white divide-y-80 divide-black rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
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
    )
}