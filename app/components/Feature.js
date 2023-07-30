import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Quality Assurance.',
        description:
            'We help you reduce customer complaints and guarantee your products are within specification via 100% product inspection.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Comprehensible Production Data.',
        description: 'Unlock the potential of your data. We highlight process inefficiencies in real-time, empowering you to optimize production workflows.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Machine Speed Optimization.',
        description: 'Balance speed and quality efficiently. Our system aids in pinpointing defect trends and understanding optimal machine speeds, aiding in reject rate reduction.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Labor Cost Reduction.',
        description: 'Cut back on manual quality checks and high labor overheads. Our automated inspection system enables you to refocus resources on strategic priorities.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Understand Operating Team and SKU Performance.',
        description: 'Leverage comprehensive insights into team and SKU performance to drive targeted improvements and elevate overall output.',
        icon: CheckCircleIcon,
    },

]

export default function Feature() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-gray-600">Production Intelligence</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Machine Vision</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Convey key centerlining measures and capability of production process in real time.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-gray-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="/visionSystem.jpg"
                        alt="Vision System"
                        className="rounded-xl"
                        width={2000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}
