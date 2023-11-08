import React from 'react'
import DefaultCarousel from '../../components/layouts/Carousel'
import Card from '../../components/layouts/Card'
import Product from '../Product/Product'
import Loader from '../../components/layouts/Loader'
import TabsCustomAnimation from '../../components/layouts/Tabs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Loader />
      <div className='pb-9 pt-20 bg-primary'>
        {/* <Loader /> */}
        <div className="py-5 hp:mx-2 3xl:mx-24">
          <DefaultCarousel />
          {/* <div className="my-3 text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <Link to={''} className="inline-block hover:bg-primary-50 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Semua</Link>
              </li>
              <li className="mr-2">
                <Link to={''} className="inline-block p-4 bg-blue-300 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Games</Link>
              </li>
              <li className="mr-2">
                {/* <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300">Pulsa</a> */}
              {/* </li>
              <li className="mr-2"> */}
                {/* <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PLN</a> */}
              {/* </li>
              <li>
                <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300">Joki</a>
              </li> */}
            {/* </ul>
          </div> */}
          <TabsCustomAnimation />
        </div>
      </div>
    </>
  )
}

export default Home