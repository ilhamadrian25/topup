import { Tab } from '@headlessui/react'
import Product from '../../pages/Product/Product'

export default function Tabs() {
    return (
        <div className="my-5">
            <Tab.Group>
                <Tab.List className={'mx-8'}>
                    <Tab className={''}>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel><Product /></Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}