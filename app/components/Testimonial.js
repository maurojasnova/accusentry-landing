export default function Testimonial() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="/logoClouds/threeM.png" alt="three M Logo" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “AccuSentry Systems provides us with the power and flexibility we require for our inspection needs. The flexibility and power of an AccuSentry inspection system allow us to solve very challenging and demanding applications. The System is also a great tool for analyzing manufacturer performance allowing us to understand and improve our manufacturing processes. The larget set of available tools and fast processing speeds mean I am only limited by what I can imagine. AccuSentry understands the importance of good customer support.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Patrick Duerr</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Advanced Engineering Specialist of 3M</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  