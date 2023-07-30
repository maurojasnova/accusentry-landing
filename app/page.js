import Hero from './components/Hero'
import LogoClouds from './components/LogoClouds'
import Feature from './components/Feature'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero title="Vision systems for better performance" description="AccuSentry empowers production management and personnel to achieve 100% inspections, and activate process and production intelligence by delivering collaborative means to monitor and improve performance."/>
      <LogoClouds />
      <Feature />
      <Stats />
      <Testimonial />
      <CallToAction />
    </main>
  )
}
