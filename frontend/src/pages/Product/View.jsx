import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const params = useParams()
    const [data, setData] = useState([])
    console.log(data);
    const fetchData = async () => {
        try {
            await axios({
                method: 'get',
                url: import.meta.env.VITE_API_HOST + '/product/' + params.slug,
                // params: {
                //     id: params.slug
                // }
            })
                .then(function (response) {
                    setData(response.data)
                });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    if (!data) {
        throw new Response("error");
    }

    const [open, setOpen] = useState(false)

    const handleOnChange = useCallback(() => {
        setOpen(!open)
    }, [open])

    const handleClick = useCallback((state) => {
        console.log(state.target.style.backgroundColor = 'blue');
    }, [])
    return (
        <>
            <div className="mt-16 mx-36">

                <div className="mx-auto">
                    <img className=' h-96 w-full rounded-lg' src={"https://api.duniagames.co.id/api/content/upload/file/17961226881617693078.jpg"} alt="" srcset="" />
                </div>

                <div className="my-7">
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="row-span-3 h-56 w-auto bg-primary-50 rounded-lg">
                            <div className='ml-10'>
                                <div className="grid grid-cols-3 -mb-12">
                                    <img className='-mt-12 h-32 rounded-xl' src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/donkey/Image%2016-07-23%20at%2012-869c-original.jpeg" alt="" srcset="" />
                                    <div className="col-span-2 grid grid-rows-4 grid-flow-col gap-1 mt-4">
                                        <span className="col-span-1 font-bold text-lg text-black">Valorant</span>
                                        <span className="col-span-1 text-black text-xs font-bold">Riot Games</span>
                                    </div>
                                </div>
                                {/* <span className="col-span-3">Valorant</span> */}
                                <span className='text-xs'>
                                    Top up point Valorant harga paling murah. Cara topup Valorant termurah :
                                </span>
                            </div>
                            {/* <div className="-mt-12 grid grid-cols-2">
                                <img className='ml-9 h-32 rounded-xl' src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/donkey/Image%2016-07-23%20at%2012-869c-original.jpeg" alt="" srcset="" />
                                <span className='mt-16 -ml-6 font-bold text-black text-lg'>Valorant</span>
                                <span className="">Valorant</span>
                            </div> */}
                        </div>
                        <div className="col-span-2 bg-primary-50">
                            <div className="mt-5 mx-4">
                                <span className='bg-blue-400 px-4 py-4 rounded-b-full font-bold'>1</span>
                                <span className='font-bold mx-2 text-2xl'>Masukkan Player ID</span>
                                <input type="text" placeholder='Masukan user ID' className='w-full mt-5 rounded-2xl mr-10' />
                            </div>

                        </div>
                        <div className="col-span-2  bg-primary-50">
                            <div className="mx-4">
                                <span className='bg-blue-400 py-4 px-4 rounded-b-full font-bold'>2</span>
                                <span className="font-bold mx-2 text-2xl">Pilih nominal TopUp</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 ml-5 mt-5">
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className=' bg-white rounded-lg h-24' name='heho' style={{ cursor: 'pointer' }} onClick={handleClick}>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>01</div>
                                <div className='bg-blue-600'>09</div>
                                <div className='bg-blue-600'>09</div>
                            </div>
                        </div>
                        <div className="col-span-2  bg-primary-50">
                            <div className="mx-4">
                                <span className='bg-blue-400 py-4 px-4 rounded-b-full font-bold'>2</span>
                                <span className="font-bold mx-2 text-2xl">Pilih nominal TopUp</span>
                            </div>
                            <div className='mx-4'>
                                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                    <h2 id="accordion-flush-heading-1">
                                        <button type="button" onClick={handleOnChange} class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                            <span>What is Flowbite?</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-flush-body-1" className={open ? '' : 'hidden'} aria-labelledby="accordion-flush-heading-1">
                                        <div class="py-5 border-b bg-black border-gray-200 dark:border-gray-700">
                                            <p>hello</p>
                                            {/* <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p> */}
                                            {/* <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
                                        </div>
                                    </div>
                                    <h2 id="accordion-flush-heading-2">
                                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                            <span>Is there a Figma file available?</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                                        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                            <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-flush-heading-3">
                                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                                        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                                <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                                <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View