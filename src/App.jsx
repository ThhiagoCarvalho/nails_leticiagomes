import { lazy, Suspense } from 'react'
import Navbar from './sections/Navbar'
import FloatingActionButton from './components/FloatingActionButton'

// Code-split below-the-fold sections
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Portfolio = lazy(() => import('./sections/Portfolio'))
const Services = lazy(() => import('./sections/Services'))
const Identity = lazy(() => import('./sections/Identity'))
const Feedback = lazy(() => import('./sections/Feedback'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Identity />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Feedback />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingActionButton />
    </>
  )
}

export default App
