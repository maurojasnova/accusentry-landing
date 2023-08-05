const products = [
    {
        id: 1,
        name: 'SentryDash',
        href: '/products/sentrydash',
        imageSrc: '/features/visionSystem.jpg',
        imageAlt: "Sentrydash.",
        description: 'Activate real-time production intelligence',
    },
    {
        id: 3,
        name: 'SentryCore',
        href: '/products/sentrycore',
        imageSrc: '/features/visionSystem.jpg',
        imageAlt: "Sentrycore.",
        description: 'Monitor your SAP and fluff',
    },
    {
        id: 4,
        name: 'SentryView',
        href: '/products/sentryview',
        imageSrc: '/features/visionSystem.jpg',
        imageAlt: "SentryView.",
        description: 'Supervise your products',
    },
    {
        id: 5,
        name: 'SentrySeal',
        href: '/products/sentryview',
        imageSrc: '/features/visionSystem.jpg',
        imageAlt: "SentryView.",
        description: 'Inspect your package seals',
    }
    // More products...
]

export default function Products() {
    return (

        <div className="bg-white">
            <h1 className="text-center mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Products</h1>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
