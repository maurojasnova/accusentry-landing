import Hero from '../../components/Hero'
import Feature from '../../components/Feature'
import Stats from '../../components/Stats'
import CallToAction from '../../components/CallToAction'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Interconnecting architecture',
    description:
      'Expand on Demand by linking additional cameras.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Reliable systems',
    description: 'Our systems are built to withstand the rigors of manufacturing environments.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Dual Integrated Interfaces',
    description: 'The Sentry 9000 software provides two different interfaces to cater to the varying needs of a factory environment.',
    icon: CheckCircleIcon,
  }

]

export default function SingleReject() {
  return (
    <main>
      <Hero title="SentryDash" description="Activate real-time production intelligence" />
      <Feature subtitle="Production Intelligence" title="SentryDash" description="Convey key centerlining measures and capability of production process in real time." features={features} imageRoute="/visionSystem.jpg" imageAlt="Vision System" imageWidth={2000} imageHeight={1000} />
      <CallToAction productName="SentryDash" />
    </main >
  )
}
