import React from 'react'
import { InfiniteSlider } from './ui/infinite-slider'
import Image from 'next/image'

const InfinitySlider = () => {
  return (
    <div>
       <InfiniteSlider gap={45} speed={30}>
          {Array(10).fill(0).map((_, i) => (
          <Image
           key={i}
            width={80}
            height={10}
            src="/logo.png"
            alt="slider"
            className="lg:h-[40px] h-3 w-auto"
          />
          ))}
          </InfiniteSlider>
    </div>
  )
}

export default InfinitySlider