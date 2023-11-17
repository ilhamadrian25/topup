import { Tab as Tabs } from '@headlessui/react'
import Product from '../../pages/Product/Product'

export default function Tab() {
    return (
        <div className="py-5">
            <Tabs.Group>
                <Tabs.List className={'flex gap-1'}>
                    <Tabs className={'border border-secondary px-2 hover:bg-secondary hover:text-brown-50 rounded-lg'}>Games</Tabs>
                    <Tabs className={'border border-secondary px-2 hover:bg-secondary hover:text-brown-50 rounded-lg'}>Joki</Tabs>
                    <Tabs className={'border border-secondary px-2 hover:bg-secondary hover:text-brown-50 rounded-lg'}>Tab 3</Tabs>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel><Product /></Tabs.Panel>
                    <Tabs.Panel>Content 2</Tabs.Panel>
                    <Tabs.Panel>Content 3</Tabs.Panel>
                </Tabs.Panels>
            </Tabs.Group>
        </div>
    )
}