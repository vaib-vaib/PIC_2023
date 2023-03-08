import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { Image } from '../components/Image'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Welcome to EyeNetram!"
        content="Upload your fundus image to get the result"
        />
        <Image />
    </Layout>
  )
}
