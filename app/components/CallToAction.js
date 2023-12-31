export default function CallToAction(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="relative isolate  bg-gray-600 px-6 py-0 sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
          <div className="mx-auto  text-center lg:mx-0 lg:flex-auto py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your machines PERFORMANCE.
              <br />
              Start using {props.productName} today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's work together to activate real-time production intelligence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
