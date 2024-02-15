import React from 'react'
import Carousel from '../../components/layouts/Carousel'
import Tab from '../../components/layouts/Tabs'
const Home = () => {
  return (
    <>
      <div className='py-14 hp:px-2 s4:px-6 s6:px-36 bg-primary'>
        <div className="hp-2:mx-3 s4:mx-14 s5:mx-16 s6:mx-20 3xl:mx-24">
          <Carousel />
          <Tab />
        </div>
      </div>
    </>
  )
}

export default Home