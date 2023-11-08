import React from 'react'
import Loader from '../../components/layouts/Loader'

const Contact = () => {
    throw new Response("Not Found", { status: 404 });
    return (
        <>
            <Loader />
            <div className='bg-primary h-96'>Contact</div>
        </>
    )
}

export default Contact