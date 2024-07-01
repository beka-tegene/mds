import React from 'react'
import { Navigation } from '../../Components/Navigation'
import { Hero } from './Home'
import { SupportCompany } from './SupportCompany'
import { PetitionDetail } from './PetitionDetail'

export const Landing = () => {
  return (
    <main>
        <Navigation />
        <Hero />
        <SupportCompany />
        <PetitionDetail />
    </main>
  )
}
