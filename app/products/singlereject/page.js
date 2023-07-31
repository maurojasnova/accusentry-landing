import Hero from '../../components/Hero'
import Feature from '../../components/Feature'
import Stats from '../../components/Stats'
import CallToAction from '../../components/CallToAction'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Multiple stations',
    description:
      'You cab have one or more stations and each of them will reject one product per defect.',
    icon: CheckCircleIcon,
  },
  {
    name: 'High accuracy.',
    description: 'From day one you will be rejecting the correct product.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Affordable hardware.',
    description: 'The investment in terms of hardware is minimum. Our power comes from the software. There is no need for high speed PLC or servos',
    icon: CheckCircleIcon,
  },
  {
    name: 'Works in parallel with splice sensors.',
    description: 'The machine can continue using its splice sensors without affecting the functioning of the single reject.',
    icon: CheckCircleIcon,
  }

]

export default function SingleReject() {
  return (
    <main>
      <Hero title="Single Reject" description="Reject one product for every defect found with high accuracy without expensive hardware." />
      <Feature subtitle="Production Intelligence" title="Single Reject" description="Reduce your product waste and mantain your product quality with our reject gate control." features={features} imageRoute="/visionSystem.jpg" imageAlt="Vision System" imageWidth={2000} imageHeight={1000} />
      <div>
        <h2 className='my-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>Calculate your SAVINGS</h2>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl pt-4 pb-12 sm:px-6 lg:px-8">
            <div className="relative isolate  bg-white px-6 py-4 sm:rounded-3xl sm:px-16 flex justify-center lg:gap-x-20 lg:px-24">
              <form action="/api/single-reject-calculator" method="post" className='inline-grid grid-cols-2 gap-4'>
                <label for="speed" className='text-lg leading-8 text-gray-600'>Machine speed:</label>
                <input type='number' id="speed" name="speed" className='bg-gray-400 rounded text-lg leading-8 text-gray-900' />
                <label for="scrap" className='text-lg leading-8 text-gray-600'>Scrap rate:</label>
                <input type='number' id="scrap" name="scrap" className='bg-gray-400 rounded text-lg leading-8 text-gray-900' />
                <label for="oee" className='text-lg leading-8 text-gray-600'>OEE:</label>
                <input type='number' id="oee" name="oee" className='bg-gray-400 rounded text-lg leading-8 text-gray-900' />
                <label for="rejects" className='text-lg leading-8 text-gray-600'>Rejects per defect:</label>
                <input type='number' id="rejects" name="rejects" className='bg-gray-400 rounded' />
                <label for="cost" className='text-lg leading-8 text-gray-600'>Cost per product:</label>
                <input type='number' id="cost" name="cost" className='bg-gray-400 rounded text-lg leading-8 text-gray-900' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <CallToAction productName="Single Reject" />
    </main >
  )
}
