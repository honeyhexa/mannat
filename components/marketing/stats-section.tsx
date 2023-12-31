export default function StatsSection () {

    const stats = [
        {
            data: "35K+",
            title: "Writers"
        },
        {
            data: "100K+",
            title: "Scripts"
        },
        {
            data: "500+",
            title: "Production houses"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

    return (
        <section className="py-36 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-indigo-400 font-semibold mb-2">Statistics</h3>
                    <h3 className="tracking-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 text-3xl font-extrabold sm:text-4xl">
                        Our writers are always happy
                    </h3>
                    <p className="mt-3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-8 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center bg-gray-800 px-20 py-8 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl font-mono text-white font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}