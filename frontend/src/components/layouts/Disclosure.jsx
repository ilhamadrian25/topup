import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Disclosuree = ({Value, Label}) => {
    return (
        <div className="w-full">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-t-lg bg-purple-100 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span className='mx-3'>{Label}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500 mx-3`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm bg-secondary rounded-b-lg text-gray-500">
                                {Value}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Disclosuree

