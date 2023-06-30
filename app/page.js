import Image from 'next/image'
import Hero from './components/Hero'
import LogoClouds from './components/LogoClouds'
import Feature from './components/Feature'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoClouds />
      <Feature />
      <Stats />
      <Testimonial />
    </main>
  )
}
