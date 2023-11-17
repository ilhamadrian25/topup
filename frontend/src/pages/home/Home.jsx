import React from 'react'
import Carousel from '../../components/layouts/Carousel'
import Tab from '../../components/layouts/Tabs'

const Home = () => {
  return (
    <>
      <div className=' py-16 hp:px-2 md:px-6 lg:px-36 bg-primary'>
        <div className=" s3:px-16 s4:px-24 s5:px-40 s6:px-44">
          <Carousel />
          <Tab />
        </div>
      </div>
    </>
  )
}

export default Home