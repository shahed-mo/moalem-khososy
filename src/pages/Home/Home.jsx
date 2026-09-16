import React from 'react'
import HeroSection from './HeroSection'
import QuickStatistics from './QuickStatistics'
import ChooseSection from './ChooseSection'
import StudentTestimonials from './StudentTestimonials'
import CallSection from './CallSection'

const Home = () => {
  return (
    <div className="flex flex-col w-full px-4">
      <HeroSection/>
      <QuickStatistics/>
      <ChooseSection/>
      <StudentTestimonials/>
      <CallSection/>
    </div>
  )
}

export default Home