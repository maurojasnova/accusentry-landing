import Hero from './components/Hero'
import LogoClouds from './components/LogoClouds'
import Feature from './components/Feature'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

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

export default function Home() {
  return (
    <main>
      <Hero title="Vision systems for better performance" description="AccuSentry empowers production management and personnel to achieve 100% inspections, and activate process and production intelligence by delivering collaborative means to monitor and improve performance." />
      <LogoClouds />
      <Feature subtitle="Production Intelligence" title="Machine Vision" description="Convey key centerlining measures and capability of production process in real time." features={features} imageRoute="/visionSystem.jpg" imageAlt="Vision System" imageWidth={2000} imageHeight={1000} />
      <Stats />
      <Testimonial />
      <CallToAction />
    </main>
  )
}
