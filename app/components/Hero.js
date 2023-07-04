export default function Hero() {
    return (

        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Vision systems for better performance
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        AccuSentry empowers production management and personnel to achieve 100% inspections, and activate process and production intelligence by delivering collaborative means to monitor and improve performance.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
            </div>
        </div>
    )
}