export default function HeroSection () {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                        {/* Build products for everyone */}
                        Scripting Success
                    </h1>
                    <h2 className="">
                        {/* <span className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">Scripting Success</span> <br/> <br/> */}
                        <span className="text-4xl tracking-tight text-gray-800 font-extrabold mx-auto md:text-5xl tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-black">
                            Connecting Writers and Producers
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto">
                    Join a community of passionate scriptwriters, pitch your ideas, and connect with industry professionals looking for the next big hit.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="/app" className="block py-2 px-4 font-medium duration-150 text-white bg-black rounded-lg shadow-lg hover:shadow-none">
                            Showcase Your Script
                        </a>
                        <a href="/app" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Need a Script
                        </a>
                    </div>
                </div>
                <div className="mt-14">
                    <img src="https://cdn.dribbble.com/userupload/11281393/file/original-d3cc916e744ea2abbc638f3f21264a04.png?resize=3810x2858" className="w-full shadow-lg rounded-lg border" alt="" />
                </div>
            </div>
        </section>
    )
}