import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({target, image}) => {
    return (
        <div className="bg-white rounded-lg shadow shadow-blue-gray-800 hover:shadow-2xl hover:brightness-50 dark:bg-gray-800 dark:border-gray-700">
            <Link to={target}>
                <img className="rounded-lg" src={image} alt="product image" />
            </Link>
        </div>

    )
}

export default Card