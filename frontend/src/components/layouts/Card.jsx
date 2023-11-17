import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({target, image}) => {
    return (
        <div className="bg-white rounded-lg shadow shadow-blue-gray-800 hover:shadow-2xl hover:brightness-50 dark:bg-gray-800 dark:border-gray-700">
            <Link to={target}>
                <img className="rounded-lg" src="https://donkey.id/_next/image?url=https%3A%2F%2Fsin1.contabostorage.com%2F0a986eb902c4469cb860e43985eb18a1%3Avocapanel%2Fdonkey%2F021DBA3E-D762-4B09-BF0F-D65890F92D92-f8b10-original-6ccb-original.jpeg&w=1920&q=75" alt="product image" />
            </Link>
        </div>

    )
}

export default Card