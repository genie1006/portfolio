import React from 'react'
import { Hero } from '../conponents/Hero'
import { TechStack } from '../conponents/TechStack'
import { Project } from '../conponents/Project'
import { Info } from '../conponents/Info'

export const Home = () => {
  return (
    <main>
      <Hero />
      <TechStack />
      <Project />
      <Info />
    </main>
  )
}
