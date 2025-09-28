import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl lg:text-5xl absolute top-10 text-center'>Our Models & Features</h1>
      <div className="flex flex-col md:flex-row gap-25 md:gap-10 mt-[200px] md:mt-30">
        <Cards modelName={"Breed Recognition Model"} desc = {"AI-powered breed identification system for accurate and instant results."} link = {"https://sihproject-git-main-yashjangir04s-projects.vercel.app/"} imgNo={1} />

        <Cards modelName={"Disease Detection Model"} desc = {"Detect cattle diseases early with AI for timely care and prevention."} link = {"https://sihproject-git-main-yashjangir04s-projects.vercel.app/"} imgNo={2} />

        <Cards modelName={"Disease Zone Alerts"} desc = {"Notifies when disease-prone areas are near and explore all active risk zones on the map."} link = {"https://sihproject-git-main-yashjangir04s-projects.vercel.app/"} imgNo={3} />
      </div>
    </div>
  )
}

export default App