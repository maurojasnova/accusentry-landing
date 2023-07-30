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
      <CallToAction />
    </main>
  )
}
